# Clothing Catalog

A responsive single-page clothing catalog built as a frontend portfolio project.
It demonstrates a complete client-side flow: browsing a collection, filtering and
sorting products, opening product details, navigating between routes, and handling
unknown URLs.

[Live demo](https://clothing-catalog.tw1.ru) ·
[Privacy policy](https://clothing-catalog.tw1.ru/privacy)

> This is a non-commercial educational project. The products, prices, descriptions,
> and images are fictional and are not offered for sale.

## Features

- Responsive layout for desktop, tablet, mobile, and landscape mobile screens
- Product filtering by category
- Case-insensitive product search by name
- Price sorting in ascending and descending order
- Animated product-grid updates with Motion
- Dynamic product pages at `/products/:productId`
- Smooth navigation between sections and routes
- Custom not-found states for invalid product IDs and unknown routes
- Semantic HTML, descriptive image text, keyboard focus states, and ARIA attributes
- Privacy, asset-source, and third-party license disclosures

## Tech Stack

- React 19
- TypeScript
- React Router
- Zod
- Motion
- Vite
- CSS
- ESLint

## Implementation Notes

Product data is stored separately from the interface. The product model is declared
with a Zod schema, and the TypeScript `Product` type is inferred from that schema.
Reusable cards receive typed product properties and generate links to dynamic product
routes.

The catalog combines three pieces of UI state:

1. selected category;
2. search query;
3. price sort order.

Products are filtered first and sorted afterwards without mutating the source array.
Motion animates cards entering, leaving, and changing position when the visible set
changes.

Client-side routes are handled by React Router. The production build includes an
Apache `.htaccess` fallback so a direct request to a product or privacy URL returns
the application instead of a server-side 404 response.

## Project Structure

```text
src/
├── assets/       # Fonts, icons, and generated project images
├── components/   # Reusable cards, header, footer, and navigation helpers
├── data/         # Local product dataset
├── pages/        # Catalog, product, privacy, and not-found views
├── schemas/      # Zod product schema and inferred TypeScript type
└── App.tsx       # Routes and scroll restoration
```

## Run Locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/danmolori7-jpg/clothing-catalog.git
cd clothing-catalog
npm install
npm run dev
```

Useful commands:

```bash
npm run lint       # Check the source code with ESLint
npm run build      # Type-check and create the production build
npm run preview    # Preview the production build locally
```

## Deployment

The application is built with Vite and deployed as static files on Timeweb virtual
hosting. Apache rewrite rules provide:

- permanent HTTP-to-HTTPS redirection;
- SPA fallback to `index.html` for client-side routes.

## Assets and Licenses

Project images were generated for this educational catalog and do not intentionally
depict real products, brands, or commercial listings. Full provenance is documented
in [`ASSET_SOURCES.md`](./ASSET_SOURCES.md).

Third-party software and font notices are listed in
[`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md). The Manrope font is distributed
under the SIL Open Font License 1.1.

## Author

Dan — [Telegram](https://t.me/belinimoz)
