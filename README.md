# Portal Dashboard

A React + Vite + Tailwind dashboard to manage and visualize your portal business ideas. Ships with:
- Demo login (username/password in `public/portalData.json`)
- Metrics cards, line chart, ideas list & detail
- GitHub Pages workflow

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:5173/

## Customize with your data

Edit `public/portalData.json` and paste your real data from your "portal business idea" file.

### Data shape example
```json
{
  "company": { "name": "Your Portal", "tagline": "Tagline", "owner": "You" },
  "metrics": [ { "label": "Active Ideas", "value": 12 } ],
  "chart": { "monthly": [ { "month": "Jan", "ideas": 4, "mvps": 0 } ] },
  "ideas": [
    { "id": "idea-1", "title": "Idea", "status": "Validation", "confidence": 0.7, "summary": "desc", "owner": "Owner", "nextSteps": [] }
  ],
  "auth": { "username": "admin", "password": "admin123" }
}
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g., `portal-dashboard`) and push this project.
2. If your repo name is `portal-dashboard`, update `vite.config.ts` `base` to `'/portal-dashboard/'`.
3. Enable Pages: Settings → Pages → Build and deployment → Source: "GitHub Actions".
4. Push to `main`. The included workflow will build and deploy.

## Workflow notes

The SPA uses client-side routing. For deep links to work on Pages, we rely on a 404 fallback to `index.html`. This is handled by the Pages action configuration.

## Security

This demo uses simple localStorage auth for illustration. For production, integrate a proper auth provider (e.g., GitHub OAuth, Auth0, Firebase, or a custom backend).
