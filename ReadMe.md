# Palermo Penano’s website

Live site: https://pspenano.com/

The homepage is a standalone page served by the existing GitHub Pages setup:

- `index.html`: bio and profile links.
- `style.css`: responsive layout and typography.
- `contact.js`: email reveal and copy controls.
- `images/profile_pic_cropped.jpeg`: portrait.
- `CNAME`: custom domain; preserve this file.

The email address is lightly encoded and revealed on click. This deters basic harvesting but is not a secrecy boundary. The site loads no external fonts, libraries, or analytics.

The old `pages/` source is retained for reference and excluded from the published site in `_config.yml`. The old email field has been removed from the current configuration; prior Git history is unchanged.

Changes pushed to `gh-pages` deploy through GitHub Pages. Review the homepage locally before pushing.

For a local preview, run `python3 -m http.server 8766 --bind 127.0.0.1` from the repository root and visit http://127.0.0.1:8766/.
