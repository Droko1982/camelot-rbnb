"""Descarga las fotos elegidas de Wikimedia Commons y genera WebP responsivos.

Uso: python -I .work/process_images.py
Salida: assets/img/<nombre>-<ancho>.webp, assets/img/og-base.jpg y .work/credits.json
"""
import io
import json
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
WORK = ROOT / ".work"
OUT = ROOT / "assets" / "img"
UA = "CamelotSiteBuilder/1.0 (static site build)"

# nombre: (tema, índice en la hoja, proporción ancho/alto, anchos, foco vertical 0-1)
PICKS = {
    "hero-armenia": ("armenia", 3, 16 / 9, [768, 1280, 1920], 0.42),
    "hero-cocora": ("cocora", 1, 16 / 9, [768, 1280, 1920], 0.5),
    "hero-filandia": ("filandia", 1, 16 / 9, [768, 1280, 1920], 0.45),
    "room-escudero": ("room", 15, 4 / 3, [480, 800, 1200], 0.55),
    "room-caballero": ("room", 12, 4 / 3, [480, 800, 1200], 0.55),
    "room-hermandad": ("room", 13, 4 / 3, [480, 800, 1200], 0.55),
    "room-mesa": ("room", 2, 4 / 3, [480, 800, 1200], 0.5),
    "room-detalle": ("room", 0, 4 / 3, [480, 800, 1200], 0.5),
    "room-suite": ("room", 7, 4 / 3, [480, 800, 1200], 0.5),
    "place-plaza": ("armenia", 3, 4 / 3, [480, 800, 1200], 0.45),
    "place-catedral": ("armenia", 8, 4 / 3, [480, 800, 1200], 0.5),
    "place-parquevida": ("parquevida", 4, 4 / 3, [480, 800, 1200], 0.5),
    "place-museo": ("museo", 1, 4 / 3, [480, 800, 1200], 0.5),
    "place-botanico": ("botanico", 2, 4 / 3, [480, 800, 1200], 0.5),
    "place-parquecafe": ("parquecafe", 1, 4 / 3, [480, 800, 1200], 0.45),
    "place-panaca": ("panaca", 2, 4 / 3, [480, 800, 1200], 0.55),
    "place-cocora": ("cocora", 1, 4 / 3, [480, 800, 1200], 0.5),
    "place-filandia": ("filandia", 1, 4 / 3, [480, 800, 1200], 0.5),
    "grial-cafe": ("cafe", 9, 4 / 3, [480, 800, 1200], 0.5),
}


def fetch(url):
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429:
                raise
            wait = int(e.headers.get("Retry-After") or 0) or 6 * (attempt + 1)
            print("429, espero", wait, file=sys.stderr)
            time.sleep(wait)
    raise RuntimeError("no se pudo bajar " + url)


def crop(im, ratio, focus):
    w, h = im.size
    if w / h > ratio:  # demasiado ancha: recorta lados
        nw = int(h * ratio)
        x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = int(w / ratio)
    y = int((h - nh) * focus)
    return im.crop((0, y, w, y + nh))


def main():
    cands = json.loads((WORK / "cands.json").read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    cache = WORK / "orig"
    cache.mkdir(exist_ok=True)
    credits = {}
    for name, (topic, idx, ratio, widths, focus) in PICKS.items():
        it = cands[topic][idx]
        fname = it["title"].split(":", 1)[1]
        local = cache / (f"{topic}-{idx}.img")
        if not local.exists():
            q = urllib.parse.urlencode({"action": "query", "format": "json", "titles": it["title"],
                                        "prop": "imageinfo", "iiprop": "url", "iiurlwidth": 1920})
            meta = json.loads(fetch("https://commons.wikimedia.org/w/api.php?" + q))
            page = next(iter(meta["query"]["pages"].values()))
            url = page["imageinfo"][0].get("thumburl") or page["imageinfo"][0]["url"]
            print("bajando", name, url[-60:], flush=True)
            local.write_bytes(fetch(url))
            time.sleep(1.2)
        im = ImageOps.exif_transpose(Image.open(local)).convert("RGB")
        im = crop(im, ratio, focus)
        for w in widths:
            if w > im.width:
                w = im.width
            h = round(w / ratio)
            im.resize((w, h), Image.LANCZOS).save(OUT / f"{name}-{widths[widths.index(w)] if w in widths else w}.webp", "WEBP", quality=74, method=6)
        if name == "hero-armenia":
            im.resize((1200, 675), Image.LANCZOS).save(WORK / "og-base.jpg", quality=88)
        credits[name] = {
            "file": fname, "author": it["artist"], "license": it["license"],
            "licenseUrl": it["licenseUrl"], "page": it["page"], "widths": widths, "ratio": ratio,
        }
        print("ok", name, im.size, flush=True)
    (WORK / "credits.json").write_text(json.dumps(credits, ensure_ascii=False, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
