 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 1070f996d1873b48384c2e60aeaab26782bb3222..79f2d683879ad70ce6a69cb13c9e46aee73e01d0 100644
--- a/README.md
+++ b/README.md
@@ -13,33 +13,34 @@ A professional website for Kattali Textile Ltd., showcasing our export-oriented
    ```bash
    npm run build
    ```
 4. **Serve** the project folder with any static server:
    ```bash
    npx http-server -p 5000 -a 0.0.0.0
    # or
    python3 -m http.server 5000
    ```
 5. Visit [http://localhost:5000](http://localhost:5000).
 
 ## Environment Variables
 
 | Variable | Description |
 | --- | --- |
 | `NEWS_API_URL` | Endpoint returning JSON news data |
 | `CONTACT_ENDPOINT` | POST endpoint for contact form |
 | `CONTACT_EMAIL` | Fallback email for contact form |
 | `RFQ_ENDPOINT` | POST endpoint for RFQ form |
 | `RFQ_EMAIL` | Fallback email for RFQ form |
 
 ## Deployment
 
 1. Run `npm run build` to generate `scripts/config.js` with production values.
 2. Upload the directory to a static host (e.g., Replit Static Deployments).
+   - The included `vercel.json` is preconfigured for [Vercel](https://vercel.com/); set project environment variables in the Vercel dashboard and it will run `npm run build` automatically.
 3. Ensure `.env` is **not** uploaded; only the generated `scripts/config.js` is served.
 
 ## Notes
 
 - Accessible, responsive design meeting WCAG 2.1 AA guidelines.
 - Forms gracefully fall back to mailto: when endpoints are not set.
 - API errors are logged to the console and surfaced in the UI.
 - Hash-based routing for single-page application experience.
 
EOF
)
