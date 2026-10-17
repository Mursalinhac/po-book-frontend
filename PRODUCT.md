# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Corvette dealership sales staff (Ciocca, Atlantic City NJ) building a purchase order at a desk or on a showroom tablet, with the customer usually sitting beside them looking at the same screen.

## Product Purpose
Turn a conversation about a car into a correct, printable purchase order: pick model and trim, add factory and dealer options at exact catalog prices, capture customer and trade-in details, review the totals with the customer, print or save as PDF. Success: a complete, accurate PO printed without re-entry or price errors.

## Operating Context
- Work order is car first: trim, then factory options, then dealer options, then customer details, then trade-in, then review and print.
- Options and review are shown to the customer; they double as a showroom build sheet. Customer and trade-in forms are mostly staff-entered.
- Review must show a build summary and checklist alongside the actual paper PO on desktop.
- Draft lives in memory only; reloading or leaving loses it. No backend save, no stored customers.

## Capabilities and Constraints
- Catalogs for Stingray, Z06, E-Ray. ZR1 has no catalog (coming soon).
- Option groups: some single-choice (model trim, colors), most multi-select; each option has a code and catalog price.
- NJ sales tax 6.625% via existing calculation. Trade-in details print separately and are not applied to vehicle totals.
- The printed PO document (PrintPreview, Terms_Conditions, print.css) must stay identical: layout, legal text, field names and order.
- Field names, option names/codes/prices and their order are catalog truth and must not change.

## Brand Commitments
Corvette and Ciocca identity, authentic vehicle photography in public/images, existing legal text. One image per model; no per-color imagery.

## Evidence on Hand
Model photos: stingray.jpeg, Z06.jpg, eray.jpg, ZR1.webp. Ciocca logo in print. No customer data, testimonials, or color swatch assets; do not fabricate them.

## Product Principles
1. The car and the running price are always visible while choosing.
2. Speed of entry for staff; clarity for the customer watching.
3. Numbers are sacred: exact, tabular, never ambiguous.
4. Always show what is done and what is missing before print.
5. The paper PO is the source of truth; the screen previews it faithfully.

## Accessibility & Inclusion
Keyboard operable, visible focus, 44px touch targets for tablet, reduced-motion respected, WCAG AA contrast in both light and dark themes.
