# MANII SPORTS BHERA — Demo Store Website

Static demo website for **MANII SPORTS BHERA** ("Play Hard. Play Better." — Bhera, Punjab, Pakistan), built 2026-10-14 as a client demo and upgraded the same day to a professional dark design (charcoal + yellow-gold) with the store's real branding and catalogue, taken from the client's own preview site.

## Run locally
```bash
cd ~/workspace/mani-sports
python3 -m http.server 8000
# open http://localhost:8000
```
No build step, no dependencies — plain HTML/CSS/JS.

## Client details go in ONE place: `config.js`
- `facebookPageUrl` — client's real Facebook Page link (currently empty → site shows an honest placeholder)
- `whatsappNumber` — order number, country code without `+` (currently empty → buttons point to the Contact section)
- `storeAddress` / `storeCity` — shop address (currently empty → placeholder text shown)

As soon as these are filled, every Facebook button, share link, "Order on WhatsApp" button (with the product name pre-filled in the message) and the address update automatically — no other file needs editing.

## Files
- `index.html` — store page: sticky header, hero, trust strip, Featured (2), Tape Ball (11 products), Hard Ball (9), Trophies (10), Facebook section, Contact, footer
- `style.css` — dark professional theme (charcoal + #FFD100 gold) + responsive/mobile layout
- `config.js` — client details in one place. Branding, address and city are filled from the client's own site; `facebookPageUrl` and `whatsappNumber` stay EMPTY placeholders (TODO-marked) until the client confirms them
- `app.js` — wires config into all links (never produces a fake link when config is empty)
- `img/*.svg` — self-drawn generic product graphics by type (bat, ball, gloves, pads, helmet, guard, kit bag, wickets, tape, grip, trophies) — no brand logos, no hotlinked images, no ratings/reviews anywhere
- `REPORT.md` — full inspection/test/fix report (kept locally, not published to the repo)

Catalogue and PKR prices are the client's own listed products/prices (from their preview site), shown on the demo with "sample price" labels until the store confirms its final catalogue.
