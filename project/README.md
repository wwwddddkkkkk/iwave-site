# iwave — Wavekart

Luxury single-page site for **iwave Wavekart** — the first electric jet go-kart.

## Live site
The homepage is **`site.html`** (renamed to `index.html` when you publish — see below).

## Publish to GitHub Pages

1. Create a new public repo on GitHub (e.g. `iwave-site`).
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/iwave-site.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`** → Save.
4. Your site will be live at `https://<your-user>.github.io/iwave-site/site.html`.

### Want the URL to be the bare domain?
Either rename `site.html` → `index.html` (and rename the current `index.html` design canvas to something else like `design-canvas.html`), **or** add a tiny redirect at the root.

## Drop in your own ocean video
Open `directions/ObsidianLight.jsx`, find the `{/* HERO — full-bleed ocean video */}` section, and replace this block:

```jsx
<div className="iw-water" style={{ position: 'absolute', inset: 0 }}/>
```

with a real `<video>`:

```jsx
<video autoPlay muted loop playsInline
  src="assets/ocean.mp4"
  poster="assets/ocean-poster.jpg"
  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

Drop your video file into a new `assets/` folder.

## Drop in your kart photos (color picker)
The color swatches swap a photo of the kart in that finish. Export one PNG per **(model, color)** combination — ideally on a transparent background — and save them as:

```
assets/wavekart/s-porcelain.png   assets/wavekart/x-porcelain.png
assets/wavekart/s-obsidian.png    assets/wavekart/x-obsidian.png
assets/wavekart/s-titan.png       assets/wavekart/x-titan.png
assets/wavekart/s-amber.png       assets/wavekart/x-amber.png
assets/wavekart/s-azure.png       assets/wavekart/x-azure.png
```

Filename rule: `{model-letter-lowercase}-{color-slug}.png`. To rename a color or add a new one, edit the `colors` array near the top of `directions/ObsidianLight.jsx` — each entry has `name`, `hex`, and `slug` (the filename piece).

If an image is missing, the site falls back to the CSS-drawn kart silhouette, so nothing breaks while you're still photographing.

## Replace placeholders
Lifestyle and founder shots use a striped placeholder. Search the source for `iw-placeholder` blocks and swap each one with `<img src="…" />`.

## File structure
```
site.html                ← homepage (publish this)
index.html               ← design canvas with all 3 directions (for review)
styles/shared.css        ← design tokens & shared utility styles
directions/
  ObsidianLight.jsx      ← the chosen direction (LIGHT, ocean hero)
  Ivory.jsx              ← alt: cream quiet luxury
  Obsidian.jsx           ← alt: dark Apple/DJI
  Editorial.jsx          ← alt: magazine
```

## Custom domain
If you point `iwavekart.com` at GitHub Pages, add a `CNAME` file at the project root containing just:
```
iwavekart.com
```
Then in your DNS, set `iwavekart.com` to CNAME `<your-user>.github.io`.
