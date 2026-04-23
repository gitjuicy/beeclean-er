# Schema Configuration

Theme settings and customization options.

## Settings Schema

The theme editor settings are defined in `config/settings_schema.json`.

### Setting Groups

| Group | ID | Description |
|-------|-----|-------------|
| Theme Info | theme_info | Theme metadata |
| Logo | logo | Logo image and size |
| Colors | colors | Color schemes |
| Typography | typography | Font settings |
| Layout | layout | Page layout settings |
| Search | predictive_search | Search settings |
| Cart | cart | Cart behavior |
| Animations | animations | Animation options |

### Color Schemes

Up to 4 color schemes can be defined for the theme:

- Scheme 1 (default)
- Scheme 2
- Scheme 3
- Scheme 4

Each scheme supports:

- Background (solid + gradient)
- Text
- Button background
- Button label
- Secondary button label
- Shadow

## Settings Data

Default values in `config/settings_data.json`:

```json
{
  "current": {
    "sections": {...},
    "content_for_index": [...],
    "blocks": {...}
  }
}
```

## Template Mapping

Templates map to sections in JSON files:

| Template | Section Mapping |
|----------|------------------|
| index.json | Homepage sections |
| product.json | Product page |
| collection.json | Collection page |
| blog.json | Blog listing |
| article.json | Blog post |
| page.json | Static page |
| cart.json | Cart page |

## Section Reference

### Header Group

```json
{
  "name": "header",
  "type": "section",
  "blocks": [
    {
      "type": "header",
      "settings": {...}
    }
  ]
}
```

### Footer Group

```json
{
  "name": "footer",
  "type": "section",
  "blocks": [
    {
      "type": "footer",
      "settings": {...}
    },
    {
      "type": "footer",
      "settings": {...}
    }
  ]
}
```

## Localization Keys

### Translation Files

Locale files in `locales/*.json`:

- `en.default.json` - English (default)
- `de.json` - German
- `fr.json` - French
- `es.json` - Spanish
- `it.json` - Italian
- Plus 30+ more languages

### Key Namespaces

| Namespace | Usage |
|-----------|-------|
| general | General text |
| accessbility | A11y text |
| products | Product pages |
| collections | Collection pages |
| blog | Blog pages |
| customer | Account pages |
| sections | Section labels |
| form | Form labels |