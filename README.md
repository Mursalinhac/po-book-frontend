# Corvette Purchase Order

A Corvette dealership tool for preparing and printing purchase orders. The existing Corvette/Ciocca identity, authentic vehicle imagery, catalog prices, field names/order and legal text are preserved.

## Stack

- Node.js **26.12.0**, pinned in `.nvmrc` and package engines.
- Next.js **16.4.2**, React / React DOM **19.3.1**.
- Tailwind CSS **4.3.3**, CSS-first semantic theme tokens in `src/app/globals.css`, CSS Modules for showroom/configurator composition.
- React Hook Form **7.90.0**, Zod **4.6.7**, current Radix primitives and existing Lucide icon family.
- TypeScript **7.0.2** native compiler for `npm run typecheck`. Microsoft's documented side-by-side `@typescript/typescript6` alias supplies the compiler API required by Next/lint tooling; its CLI is `tsc6`.
- ESLint **10.13.0** with matching Next **16.4.2** flat configuration. The current upstream import/React/accessibility plugins emit lagging peer-range warnings on install; lint and the clean-install dry run pass.
- Node's built-in test runner with esbuild **0.28.2** for TS/TSX test fixtures.

## Run locally

Use Node 26.12.0 or newer. Start the sibling Express backend first (`npm start` in `PO-BOOK`), then run:

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3002
```

The frontend uses same-origin `/api` requests. Set server-side `API_URL` to change the backend origin (default `http://localhost:3001`); see `.env.example`. `NEXT_PUBLIC_API_URL` is only needed for an intentionally separate public API origin.

## Current capabilities

- Price catalogs for Stingray, Z06 and E-Ray. ZR1 remains unavailable because it has no catalog.
- Customer/trade-in details and option selections stay in memory while configuring an order. Navigating away or reloading does not save the draft.
- Exact catalog option prices, existing tax calculation, persistent desktop summary and compact mobile summary.
- Coordinated light/dark themes with a system default, a saved appearance preference, keyboard navigation and reduced-motion support. Geist is bundled and self-hosted.
- Review entered customer details and selections, expand the paper preview, and print or save a PDF through the browser. Select a model trim before printing.
- No backend order/customer persistence API exists. Save is unavailable and the customer page explains this rather than displaying fixture customers.
- Trade-in details print separately for review and are not applied to vehicle totals. No additional fee or tax policy is introduced.

## Verify

```sh
npm test
npm run lint
npm run typecheck
npm run build
```

The frontend has 20 regression tests covering catalog normalization, 520 option rows, immutable/idempotent pricing, exact cents, print data and the order summary. `tests/fixtures` contains backend catalog snapshots; refresh those snapshots when catalogs change. The backend has five HTTP regression tests.

Use separate production (`npm start -- --port 3003`) and development instances when measuring performance. The UI uses existing Radix/shadcn primitives; component configuration points to the active Tailwind 4 stylesheet.

## Dependency audit note

The production dependency audit reports zero advisories. Five development audit entries remain in the upstream `eslint-config-next → fast-glob → micromatch → braces` chain. No patched braces release is available in the registry. The suggested forced fix downgrades Next, so it was not applied. These tools process repository lint patterns, not application user input. Check upstream updates before the next dependency refresh.
