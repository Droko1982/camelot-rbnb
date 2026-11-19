"""Busca fotos con licencia libre en Wikimedia Commons y arma hojas de contacto.

Uso: python -I .work/fetch_candidates.py
Salida: .work/cands.json + .work/sheet_<tema>.jpg
"""
import io
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

UA = "CamelotSiteBuilder/1.0 (static site build)"
WORK = Path(__file__).resolve().parent
OK_LIC = re.compile(r"^(cc0|cc[- ]by(-sa)?[- ]?[1-4]\.0|cc-by-sa-[1-4]\.0|cc-by-[1-4]\.0|public domain|pd)", re.I)

TOPICS = {
    "hero": ["Quindío paisaje cultural cafetero", "Coffee plantation Quindio Colombia", "Eje cafetero paisaje montañas"],
    "cocora": ["Valle de Cocora palmas de cera"],
    "salento": ["Salento Quindío calle real", "Salento Colombia colorful houses"],
    "filandia": ["Filandia Quindío"],
    "armenia": ["Plaza de Bolívar Armenia Quindío", "Monumento al Esfuerzo Armenia", "Armenia Quindío ciudad"],
    "parquevida": ["Parque de la Vida Armenia"],
    "museo": ["Museo del Oro Quimbaya Armenia", "Museo Quimbaya Salmona"],
    "botanico": ["Jardín Botánico del Quindío mariposario", "Jardín Botánico del Quindío"],
    "parquecafe": ["Parque del Café Montenegro"],
    "panaca": ["Panaca Quimbaya"],
    "cafe": ["café colombiano taza granos", "coffee cup Colombia"],
    "room": ["hotel room bed interior", "Hotel room double bed", "boutique hotel bedroom"],
}


def _open(url, timeout=60):
    import urllib.error
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code != 429:
                raise
            wait = int(e.headers.get("Retry-After") or 0) or (5 * (attempt + 1))
            print("429, espero", wait, file=sys.stderr)
            time.sleep(wait)
    raise RuntimeError("demasiados 429: " + url)


def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    return json.loads(_open(url, 40))


def get(url):
    return _open(url, 60)


def strip_html(s):
    return re.sub(r"<[^>]+>", "", s or "").strip()


def search(q, limit=12):
    data = api({
        "action": "query", "format": "json", "generator": "search",
        "gsrnamespace": 6, "gsrsearch": q + " filetype:bitmap", "gsrlimit": limit,
        "prop": "imageinfo", "iiprop": "url|size|extmetadata|mime", "iiurlwidth": 360,
    })
    out = []
    for p in (data.get("query", {}).get("pages", {}) or {}).values():
        ii = (p.get("imageinfo") or [{}])[0]
        if ii.get("mime") not in ("image/jpeg", "image/png"):
            continue
        if ii.get("width", 0) < 1400:
            continue
        md = ii.get("extmetadata", {})
        lic = strip_html(md.get("LicenseShortName", {}).get("value", ""))
        if not OK_LIC.match(lic.replace("CC BY", "cc-by").replace(" ", "-")) and "public domain" not in lic.lower() and not lic.lower().startswith("cc"):
            continue
        out.append({
            "title": p["title"], "url": ii["url"], "thumb": ii.get("thumburl"),
            "w": ii["width"], "h": ii["height"], "license": lic,
            "licenseUrl": strip_html(md.get("LicenseUrl", {}).get("value", "")),
            "artist": strip_html(md.get("Artist", {}).get("value", ""))[:120],
            "page": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote(p["title"].replace(" ", "_")),
        })
    return out


def sheet(name, items):
    cols, tw, th = 4, 360, 240
    rows = (len(items) + cols - 1) // cols
    img = Image.new("RGB", (cols * tw, rows * (th + 22)), "white")
    d = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 15)
    except OSError:
        font = ImageFont.load_default()
    for i, it in enumerate(items):
        try:
            im = Image.open(io.BytesIO(get(it["thumb"]))).convert("RGB")
            im.thumbnail((tw, th))
            x, y = (i % cols) * tw, (i // cols) * (th + 22)
            img.paste(im, (x, y))
            d.text((x + 4, y + th + 3), f"{i} {it['w']}x{it['h']} {it['license'][:14]}", fill="black", font=font)
        except Exception as e:  # noqa: BLE001
            print("thumb fail", it["title"], e, file=sys.stderr)
        time.sleep(0.8)
    img.save(WORK / f"sheet_{name}.jpg", quality=80)


def main():
    only = sys.argv[1:] or list(TOPICS)
    path = WORK / "cands.json"
    allc = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
    for name in only:
        seen, items = set(), []
        for q in TOPICS[name]:
            for it in search(q):
                if it["title"] not in seen:
                    seen.add(it["title"])
                    items.append(it)
            time.sleep(1.5)
        items = items[:16]
        allc[name] = items
        print(name, len(items))
        path.write_text(json.dumps(allc, ensure_ascii=False, indent=1), encoding="utf-8")
        if items:
            sheet(name, items)


if __name__ == "__main__":
    main()
