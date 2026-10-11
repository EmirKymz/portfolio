# emircankaymaz.com

Personal portfolio of Emircan Kaymaz, built as a retro computer: press POWER on the desk, boot into EmirOS, then explore through a Linux-style terminal or a Y2K browser. Includes Snake, Breakout, a typing test and an offline dino game. Turkish and English.

## Stack

- React 18 + Vite, static build
- Nginx (alpine) in Docker
- GitHub Actions → GHCR → server via SSH (`docker compose pull && up -d`)

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
```

## Project layout

| Path | What |
|---|---|
| `design/Main.dc.html` | Source design (scene, OS, terminal, content) |
| `tools/convert_dc.py` | Generates `src/App.jsx`, `src/ek.js`, `src/styles.css` from the design |
| `src/ek.js` | All text content: terminal commands, portfolio data (TR/EN) |
| `cv/make_cv.py` | Generates the TR/EN CV PDFs (`npm run cv` copies them to `public/cv/`) |
| `deploy/docker-compose.yml` | Compose file for the server |
| `.github/workflows/deploy.yml` | Build, push and deploy on every push to `master` |

After editing `design/Main.dc.html`, run `npm run convert`.

## Deploy

Every push to `master` builds the image, pushes it to GHCR and runs `docker compose pull && up -d` on the server over SSH (user `deploy`).

On the server, `/home/deploy/emircankaymaz/` holds `docker-compose.yml` and `tls.conf` from `deploy/`, plus `ssl/` with the origin certificate. The container uses host networking and serves HTTPS on port 8445, which ufw only opens to Cloudflare IP ranges. In Cloudflare, an Origin Rule rewrites the destination port to 8445 for `emircankaymaz.com` and `www.emircankaymaz.com` (SSL mode: Full).

Repository secrets: `SSH_HOST`, `SSH_PORT`, `SSH_USER`, `SSH_KEY`.
