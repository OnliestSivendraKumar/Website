# Project colors (Onliest / Oasis REX)

All colors used in this project, from `src/oasis-rex.css` and design tokens.

---

## Design tokens (from CSS header)

- **Burgundy** `#5A0B34`
- **Black** `#0B0B0F`
- **Platinum** `#F4F4F4`
- **Soft Gold** `#C6A75E`

---

## CSS variables — `:root` (dark theme)

### Base palette

| Variable        | Value                        | Usage                    |
|----------------|------------------------------|--------------------------|
| `--burgundy`   | `#5A0B34`                    | Primary burgundy         |
| `--black`      | `#0B0B0F`                    | Near-black               |
| `--platinum`   | `#F4F4F4`                    | Primary light / text     |
| `--gold`       | `#C6A75E`                    | Primary gold accent      |

### Gold variants

| Variable        | Value                           | Usage                    |
|----------------|----------------------------------|--------------------------|
| `--gold-dim`   | `rgba(230, 210, 150, 0.96)`      | Eyebrows, labels, secondary gold |
| `--gold-muted` | `#927A45`                        | Muted gold               |
| `--gold-glow`  | `rgba(198, 167, 94, 0.18)`       | Soft glow                |
| `--gold-border`| `rgba(198, 167, 94, 0.28)`       | Borders, focus rings     |

### Platinum (white) opacity variants

| Variable     | Value                        | Usage                    |
|-------------|------------------------------|--------------------------|
| `--plat-70` | `rgba(244, 244, 244, 0.88)`   | Body/secondary text      |
| `--plat-45` | `rgba(244, 244, 244, 0.72)`   | Muted text               |
| `--plat-20` | `rgba(244, 244, 244, 0.42)`   | Very subtle text         |

*Note: `--plat-50`, `--plat-55`, `--plat-60`, `--plat-65`, `--plat-85` are used in the CSS but not defined in `:root`; they may resolve via inheritance or need to be added to `:root` for consistency.*

### Burgundy opacity variants

| Variable        | Value                        | Usage                    |
|----------------|------------------------------|--------------------------|
| `--burg-strong`| `rgba(90, 11, 52, 0.78)`      | Strong burgundy          |
| `--burg-mid`   | `rgba(90, 11, 52, 0.38)`      | Mid burgundy             |
| `--burg-soft`  | `rgba(90, 11, 52, 0.16)`      | Soft tint                |

### Glass / UI

| Variable        | Value                        | Usage                    |
|----------------|------------------------------|--------------------------|
| `--glass-bg`   | `rgba(255, 255, 255, 0.05)`   | Glass background         |
| `--glass-border`| `rgba(255, 255, 255, 0.09)`   | Glass border             |

### Backgrounds (gradients)

- **`--header-scrolled`** — Header blur: `linear-gradient(90deg, rgba(70, 11, 47, 0.32) 0%, rgba(70, 11, 47, 0.18) 50%, rgba(11, 11, 15, 0.32) 100%)`
- **`--bg-burgundy`** — Main burgundy gradient (hero/panels)
- **`--bg-burgundy-deep`** — Deeper burgundy + gold tint
- **`--bg-footer-dark`** — Footer dark gradient
- **`--chrome-glass`** — `rgba(70, 11, 47, 0.35)` (chrome bar)

---

## Body background (dark theme)

```css
background: linear-gradient(180deg, #0B0B0F 0%, #120810 35%, #1A0612 100%);
```

- `#0B0B0F` — black
- `#120810` — dark purple-black
- `#1A0612` — dark burgundy-black

---

## Common hardcoded colors in the project

| Color / context        | Value / example |
|------------------------|-----------------|
| Dark card/surface      | `#050308`, `rgba(5, 3, 8, 0.9)`, `rgba(11, 7, 14, 0.96)` |
| Gold (inline)          | `#C6A75E` |
| Burgundy (inline)      | `#5A0B34` |
| Dark text on gold      | `#1a1018` |
| Gold gradient (buttons)| `linear-gradient(135deg, #F5E7C8 0%, #E9CF8A 35%, #C6A75E 100%)` |
| Mobile menu dark bg    | `linear-gradient(180deg, #120810 0%, #0f0a0c 40%, #0B0B0F 100%)` |
| REX panel gradient     | `linear-gradient(160deg, #5A0B34 0%, #2A0618 38%, #0B0B0F 100%)` |
| Light theme ivory     | `#F5EEE9` |
| Light theme dark text | `#1A0A12` |

---

## Light theme — `body[data-theme="light"]`

| Variable        | Light theme value                  |
|----------------|-------------------------------------|
| `--black`      | `#F5EEE9` (ivory)                   |
| `--platinum`   | `#1A0A12` (dark text)              |
| `--plat-70`    | `rgba(26, 10, 18, 0.82)`            |
| `--plat-45`    | `rgba(26, 10, 18, 0.62)`            |
| `--plat-20`    | `rgba(26, 10, 18, 0.42)`            |
| `--burg-strong`| `rgba(90, 11, 52, 0.13)`            |
| `--burg-mid`   | `rgba(90, 11, 52, 0.07)`            |
| `--burg-soft`  | `rgba(90, 11, 52, 0.04)`            |
| `--glass-bg`   | `rgba(255, 255, 255, 0.72)`        |
| `--glass-border` | `rgba(0, 0, 0, 0.10)`            |
| `--gold`       | `#8C6820`                           |
| `--gold-dim`   | `rgba(140, 104, 32, 0.80)`          |
| `--gold-glow`  | `rgba(140, 104, 32, 0.18)`          |
| `--gold-border`| `rgba(140, 104, 32, 0.32)`          |

Body: `background: #F5EEE9`, `color: #1A0A12`.

---

## Summary (hex quick reference)

| Name      | Hex        | RGB (approx)     |
|-----------|------------|-------------------|
| Burgundy  | `#5A0B34`  | 90, 11, 52        |
| Black     | `#0B0B0F`  | 11, 11, 15        |
| Platinum  | `#F4F4F4`  | 244, 244, 244     |
| Gold      | `#C6A75E`  | 198, 167, 94      |
| Gold muted| `#927A45`  | 146, 122, 69      |
| Dark 1    | `#050308`  | 5, 3, 8           |
| Dark 2    | `#120810`  | 18, 8, 16         |
| Dark 3    | `#1A0612`  | 26, 6, 18         |
| Ivory     | `#F5EEE9`  | 245, 238, 233     |
| Light text| `#1A0A12`  | 26, 10, 18        |
| Gold (light theme) | `#8C6820` | 140, 104, 32 |
