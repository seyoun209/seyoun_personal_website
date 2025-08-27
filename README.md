
# Jess Personal Site (React + Vite)

A minimal, ready-to-deploy academic website. Edit content in `src/PersonalSite.jsx` (PROFILE, HIGHLIGHTS, PUBLICATIONS, BLOG_POSTS, GALLERY).

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Dev server
npm run dev
# Open the local URL it prints (e.g. http://localhost:5173)
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g., `jess-personal-site`).

2. In `package.json`, set:
```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```
Replace with your GitHub username & repo name.

3. Push the code:
```bash
git init
git add -A
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

4. Deploy:
```bash
npm run deploy
```
Then go to GitHub → **Settings → Pages** and choose the **gh-pages** branch.
Your site will be served at:
```
https://<your-username>.github.io/<repo-name>/
```

## Customizing

- Update your name/links/publications in `src/PersonalSite.jsx`.
- To add analytics, drop your snippet in `index.html`.
- To switch to full Tailwind styles later, we can integrate Tailwind CSS.

## Notes

- `vite.config.js` uses relative `base` so assets work at `/repo-name/`.
- If you move to a user site (`<username>.github.io` root), you can keep this config as-is.
