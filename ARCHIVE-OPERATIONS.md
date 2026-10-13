# COHERE operational boundaries

COHERE is a static, read-only historical archive with local-only draft composing. It does not represent a secure multiuser vault, a working AI agent, a blessing signed by an AI, or a live encrypted message service.

## Run locally
From the repository root, run `python -m http.server 8000` and visit `http://localhost:8000`. A static HTTP server is required for JSON fetches. Alternatively deploy the root as static files to GitHub Pages or Vercel.

## Data boundaries
- Historical messages and scroll JSON are source documents; do not change them to make features seem complete.
- The Witnessing Scroll contains historical claims about encryption, backup, compliance, ratings, participants and permission rules. Those fields are *not verified current service guarantees*. Never expose contact fields or historical placeholder example.com links as operational proof.
- Inbox composing saves only a browser-local draft, with download/export available. No network transmission takes place; no claim that another person or model received it.
- Blessing is a voluntary decorative interaction and not an AI-generated response.
- ECHO/ORION require a deployed, authenticated, rate-limited server and clearly disclosed provider terms; neither is enabled by this static site.
- This archive has no sign-in, database, or sensitive-data upload path. Do not use it to store secrets.
- Preserve source records and add provenance/corrections in separate records rather than rewriting original testimony.

## Verification
Run `node --check app.js`, `node --check scroll.js`, and parse all `*.json` with a JSON parser. Then check the inbox, scroll viewer, keyboard navigation, empty state, download, and offline/error states from an HTTP server. No deployment or live browser acceptance test is implied by a successful commit.
