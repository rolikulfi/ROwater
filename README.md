# AquaClear RO Purifier Configurator

A static, no-backend storefront for building, buying, and servicing RO water purifiers — plus an admin panel for editing all product content.

## Files

- **`index.html`** — the public storefront: Home, Build Your Purifier, Buy Ready Made, Buy Parts Only, Cart & Checkout, Order History, Book Servicing, My Builds, About, Contact.
- **`admin.html`** — password-protected admin panel for editing storefront content (parts, options, sellers, ready-made models, servicing packages, etc).
- **`data.js`** — the single source of truth for all editable product/content data. Loaded by both `index.html` and `admin.html`.

No server, database, or build step is required — this can be hosted as-is on GitHub Pages, Netlify, Vercel (static), or any static file host.

## How content editing works

Since this site has no backend, admin edits don't go live instantly the way a database-backed CMS would. Instead:

1. Open `admin.html` in a browser and log in with the admin password (see `ADMIN_PASSWORD` near the top of `admin.html`'s `<script>` — **change this before deploying publicly**).
2. Add, edit, or delete major parts, minor parts, ready-made models, servicing types, and servicing packages. Changes are saved to your browser's local storage as you go, so you can safely close the tab and come back later without losing work.
3. When ready to publish, click **"Export data.js"**. This downloads a new `data.js` file reflecting all your changes.
4. Replace the `data.js` file in this repo with the downloaded one.
5. Commit and push. Your static host (e.g. GitHub Pages) will redeploy automatically, and the changes will be live for all visitors.

This means changes are not multi-user or real-time — only one admin edits at a time, and publishing requires a commit + deploy step. If you need instant, multi-admin, database-backed editing, that requires adding a real backend (an API + database) and pointing `admin.html`'s save/export logic at it instead of `localStorage` — the admin UI itself is already structured to make that swap straightforward later.

## Data model (`data.js`)

- `READY_MADE_MODELS` — pre-built purifier models shown on the "Buy Ready Made" page and Home.
- `MAJOR_PARTS` — the ~20 main components in the builder, each with `options` (variants), and each option with `sellers` (name + price).
- `MINOR_GROUPS` — supporting parts (water-line, electrical, mechanical) grouped by category.
- `MINOR_PRICE` — flat price applied to every minor part.
- `REQUIRED_CORE` — array of part IDs that must be selected for a build to be "ready" for checkout.
- `ICONS` — a library of inline SVG icons referenced by parts/models via their `icon` field. Any part or model can instead set an `imageUrl` field to show a real image instead of an icon.
- `SERVICE_TYPES` — one-time servicing options (General Service, Repair, etc).
- `SERVICE_PACKAGES` — yearly servicing subscription plans.

## Demo / placeholder notices

Several features are intentionally built as working front-end demos without a real backend behind them, since this project has no server:

- **Payments** (card/UPI/COD) are not processed by any real payment gateway.
- **Google Sign-In** is a mock — it accepts any name/email typed in, with no real OAuth.
- **UPI auto-renewal** stores a UPI ID locally but does not create a real mandate.
- **Cart, orders, saved builds, service bookings, and subscriptions** are all stored in the visitor's own browser (`localStorage`), scoped per-browser or per mock-signed-in account. They do not sync across devices.

These are clearly marked in the UI and are natural next steps if this project grows into a real production service with its own backend.
