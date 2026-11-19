"""Genera los íconos PNG y la imagen para redes (og.jpg) a partir del castillo de Camelot.

Uso: python -I scripts/tools/make_icons.py
Requiere: Pillow. Usa .work/og-base.jpg (lo crea process_images.py) o assets/img/hero-armenia-1280.webp.
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[2]
ICONS = ROOT / "assets" / "icons"
GOLD = (217, 181, 108)
NAVY = (20, 27, 45)

BODY = [(8, 22, 22, 56), (42, 22, 56, 56), (25, 14, 39, 56), (14, 32, 54, 56)]
MERLONS = [(8, 17, 11.6, 22), (13.2, 17, 16.8, 22), (18.4, 17, 22, 22), (42, 17, 45.6, 22), (47.2, 17, 50.8, 22),
           (52.4, 17, 56, 22), (25, 9, 28.6, 14), (30.2, 9, 33.8, 14), (35.4, 9, 39, 14)]
POLE = (31.4, 0, 32.6, 9)
FLAG = [(32.6, 0.6), (42, 3.2), (32.6, 5.8)]
WINDOWS = [(13.5, 28, 16.5, 33), (47.5, 28, 50.5, 33), (30.5, 22, 33.5, 28)]


def castle(draw, ox, oy, k, fg, bg):
    """Dibuja el castillo (caja 64×60) en (ox, oy) con escala k. bg recorta puerta y ventanas."""
    def r(b):
        return [ox + b[0] * k, oy + b[1] * k, ox + b[2] * k, oy + b[3] * k]
    for b in BODY + MERLONS + [POLE]:
        draw.rectangle(r(b), fill=fg)
    draw.polygon([(ox + x * k, oy + y * k) for x, y in FLAG], fill=fg)
    for b in WINDOWS:
        draw.rectangle(r(b), fill=bg)
    draw.rectangle(r((27, 46.5, 37, 56.2)), fill=bg)
    draw.ellipse(r((27, 41.5, 37, 51.5)), fill=bg)


def icon(size, maskable=False):
    s = 4  # sobremuestreo para bordes suaves
    S = size * s
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if maskable:
        d.rectangle([0, 0, S, S], fill=NAVY)
        k = S * 0.5 / 64
    else:
        d.rounded_rectangle([0, 0, S - 1, S - 1], radius=S * 0.22, fill=NAVY)
        k = S * 0.69 / 64
    w, h = 64 * k, 60 * k
    castle(d, (S - w) / 2, (S - h) / 2 + S * 0.01, k, GOLD, NAVY)
    return img.resize((size, size), Image.LANCZOS)


def font(names, size):
    for n in names:
        p = Path("C:/Windows/Fonts") / n
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def og():
    base = ROOT / ".work" / "og-base.jpg"
    src = Image.open(base if base.exists() else ROOT / "assets/img/hero-armenia-1280.webp").convert("RGB")
    W, H = 1200, 630
    ratio = max(W / src.width, H / src.height)
    src = src.resize((round(src.width * ratio), round(src.height * ratio)), Image.LANCZOS)
    x, y = (src.width - W) // 2, (src.height - H) // 2
    img = src.crop((x, y, x + W, y + H)).filter(ImageFilter.GaussianBlur(1.2))
    shade = Image.new("L", (W, H))
    sd = ImageDraw.Draw(shade)
    for i in range(W):
        sd.line([(i, 0), (i, H)], fill=int(235 - 120 * (i / W)))
    dark = Image.new("RGB", (W, H), (10, 15, 28))
    img = Image.composite(dark, img, shade)
    d = ImageDraw.Draw(img)
    k = 2.1
    castle(d, 80, 120, k, GOLD, (14, 20, 34))
    serif = font(["GARABD.TTF", "georgiab.ttf", "constanb.ttf"], 118)
    sans = font(["segoeuib.ttf", "arialbd.ttf"], 26)
    sans2 = font(["segoeui.ttf", "arial.ttf"], 30)
    text = "CAMELOT"
    xx = 80
    for ch in text:  # espaciado de letras
        d.text((xx, 270), ch, font=serif, fill=(243, 235, 220))
        xx += d.textlength(ch, font=serif) + 14
    d.line([(84, 410), (300, 410)], fill=GOLD, width=2)
    d.text((80, 432), "HOSPEDAJE · ARMENIA, QUINDÍO · COLOMBIA", font=sans, fill=GOLD)
    d.text((80, 478), "Estadías cortas, medianas y largas", font=sans2, fill=(243, 235, 220))
    d.text((80, 520), "Short, medium & long stays  ·  ES · EN · FR · DE · PT", font=sans2, fill=(196, 188, 172))
    img.save(ROOT / "assets" / "og.jpg", quality=86, optimize=True, progressive=True)


def main():
    ICONS.mkdir(parents=True, exist_ok=True)
    icon(32).save(ICONS / "icon-32.png")
    icon(180).save(ICONS / "apple-touch-icon.png")
    icon(192).save(ICONS / "icon-192.png")
    icon(512).save(ICONS / "icon-512.png")
    icon(512, maskable=True).save(ICONS / "icon-maskable-512.png")
    ico = icon(64)
    ico.save(ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    og()
    print("ok íconos + og.jpg")


if __name__ == "__main__":
    main()
