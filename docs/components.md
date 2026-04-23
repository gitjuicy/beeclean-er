# Component Reference

This document maps all sections and snippets in the BeeClean-er theme.

## Sections

### Page Sections

| File | Type | Category | Description |
|------|------|----------|-------------|
| header.liquid | page | Header | Site navigation header |
| footer.liquid | page | Footer | Site footer |
| announcement-bar.liquid | page | Header |Promo bar |
| main-product.liquid | page | Product | Product detail page |
| main-collection-product-grid.liquid | page | Collection | Collection grid |
| main-collection-banner.liquid | page | Collection | Collection banner |
| main-cart-items.liquid | template | Cart | Cart items display |
| main-cart-footer.liquid | template | Cart | Cart totals/checkout |
| cart-drawer.liquid | component | Cart | Slide-out cart |

### Featured Sections

| File | Type | Category | Description |
|------|------|----------|-------------|
| featured-collection.liquid | feature | Homepage | Featured products |
| featured-blog.liquid | feature | Homepage | Blog posts |
| featured-product.liquid | feature | Homepage | Single product |
| image-banner.liquid | feature | Homepage | Full-width banner |
| image-with-text.liquid | feature | Homepage | Image + text |
| slideshow.liquid | feature | Homepage | Hero carousel |

### Utility Sections

| File | Type | Category | Description |
|------|------|----------|-------------|
| rich-text.liquid | utility | Content | Text block |
| multicolumn.liquid | utility | Content | Multi-column |
| multirow.liquid | utility | Content | Multi-row |
| video.liquid | utility | Media | Video player |
| collage.liquid | utility | Media | Image collage |
| newsletter.liquid | utility | Marketing | Email signup |
| contact-form.liquid | utility | Forms | Contact form |
| collapsible-content.liquid | utility | Content | FAQ/accordion |

### Account Sections

| File | Type | Category | Description |
|------|------|----------|-------------|
| main-account.liquid | customer | Account | Customer dashboard |
| main-login.liquid | customer | Account | Login form |
| main-register.liquid | customer | Account | Registration |
| main-activate-account.liquid | customer | Account | Account activation |
| main-reset-password.liquid | customer | Account | Password reset |
| main-addresses.liquid | customer | Account | Address book |
| main-order.liquid | customer | Account | Order history |

## Section Groups

| File | Contains |
|------|----------|
| header-group.json | header, announcement-bar |
| footer-group.json | footer |

## Snippets

### Product Components

| File | Purpose |
|------|---------|
| buy-buttons.liquid | Add to cart button |
| price.liquid | Price display |
| product-variant-picker.liquid | Variant selector |
| product-variant-options.liquid | Variant options |
| product-media.liquid | Product images/videos |
| product-media-gallery.liquid | Media gallery |
| product-media-modal.liquid | Media lightbox |
| product-thumbnail.liquid | Media thumbnail |
| quantity-input.liquid | Quantity selector |
| unit-price.liquid | Unit price display |

### Card Components

| File | Purpose |
|------|---------|
| card-product.liquid | Product card |
| card-collection.liquid | Collection card |
| article-card.liquid | Blog article card |

### Cart Components

| File | Purpose |
|------|---------|
| cart-drawer.liquid | Drawer content |
| cart-notification.liquid | Success message |
| cart-notification-product.liquid | Added item |
| cart-notification-button.liquid | View cart button |

### UI Components

| File | Purpose |
|------|---------|
| swatch.liquid | Color swatch |
| swatch-input.liquid | Swatch input |
| price-facet.liquid | Price filter |
| facets.liquid | Filter UI |
| pagination.liquid | Page navigation |
| share-button.liquid | Social sharing |
| progress-bar.liquid | Loading progress |

### Navigation Components

| File | Purpose |
|------|---------|
| header-mega-menu.liquid | Mega menu |
| header-dropdown-menu.liquid | Dropdown menu |
| header-search.liquid | Search box |
| header-drawer.liquid | Mobile nav |

### Utility Snippets

| File | Purpose |
|------|---------|
| icon-accordion.liquid | Accordion icon |
| icon-with-text.liquid | Icon + text |
| meta-tags.liquid | SEO meta tags |
| social-icons.liquid | Social links |
| loading-spinner.liquid | Loading spinner |

## Usage Patterns

### Section Rendering

```liquid
{% sections 'header-group' %}
```

### Snippet Inclusion

```liquid
{% render 'buy-buttons', product: product %}
```

### Section Registration

Sections are registered in the theme editor via blocks in `sections/*.liquid`:

```liquid
{% schema %}
{
  "name": "t:sections.main-product.name",
  "blocks": [...]
}
{% endschema %}
```