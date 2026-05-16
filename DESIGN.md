---
name: Island Transit Harmony
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#404945'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#707974'
  outline-variant: '#c0c9c3'
  surface-tint: '#376757'
  primary: '#003629'
  on-primary: '#ffffff'
  primary-container: '#1b4d3e'
  on-primary-container: '#8abda9'
  inverse-primary: '#9ed1bd'
  secondary: '#00677d'
  on-secondary: '#ffffff'
  secondary-container: '#50d9fe'
  on-secondary-container: '#005c70'
  tertiary: '#002f5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b4678'
  on-tertiary-container: '#8fb5ed'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#baeed9'
  primary-fixed-dim: '#9ed1bd'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#1d4f40'
  secondary-fixed: '#b3ebff'
  secondary-fixed-dim: '#4cd6fb'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#1e4879'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  timetable-num:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  edge-margin: 20px
  gutter: 12px
---

## Brand & Style

The design system is built upon the concept of "Tropical Utility"—a harmonious blend of high-efficiency transit information and the serene, organic beauty of Amami Oshima. The UI aims to reduce the stress of travel by evoking the island’s natural landscape: the deep silence of the ancient forests and the vibrant energy of the coral seas.

The style is **Modern Organic**. It prioritizes extreme legibility for bus routes and arrival times while using soft geometry and nature-inspired textures to create a welcoming, approachable atmosphere. It avoids the cold, clinical nature of typical transit apps, opting instead for a "vacation-ready" aesthetic that feels like a concierge service rather than a utility tool.

## Colors

The palette is derived directly from the Amami landscape to provide a sense of place.

*   **Primary (Forest Green):** Used for navigation bars, primary actions, and key transit lines. It represents the mountainous heart of the island.
*   **Secondary (Turquoise):** Used for highlights, active states, and real-time "live" indicators. It represents the shallow reefs.
*   **Tertiary (Ocean Blue):** Used for heavy text elements and evening schedule modes. It provides high-contrast legibility against light backgrounds.
*   **Neutral (Sand & White):** The background is a soft, warm sand-white to reduce glare under the bright island sun, offering a more comfortable reading experience than pure digital white.

## Typography

This design system utilizes **Plus Jakarta Sans** for all brand and display elements to maintain a friendly, rounded personality. For data-intensive components—specifically the bus timetables and GPS coordinates—**Inter** is employed. Inter’s systematic, neutral structure ensures that numbers and kanji remain legible even when viewed on a moving bus or in direct sunlight.

*   **Hierarchy:** Use `display-lg` for destination names.
*   **Data Entry:** Use `timetable-num` for arrival and departure times to ensure high visibility.
*   **Captions:** Use `label-caps` for secondary metadata like "Bus Stop ID" or "Distance."

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on thumb-friendly touch targets. Because users are often checking schedules while walking or boarding, the system uses generous "safe areas" and internal padding.

*   **Mobile:** A 4-column grid with 20px outside margins.
*   **Touch Targets:** All interactive elements (bus stops, schedule rows) must have a minimum height of 48px.
*   **Visual Rhythm:** Content is grouped into "Islands" (cards) that float on the sand-colored background, creating a clear vertical rhythm.

## Elevation & Depth

To maintain the "Modern Organic" feel, depth is communicated through **Ambient Shadows** and **Tonal Layers** rather than harsh borders.

1.  **Base Layer:** The `neutral` sand background.
2.  **Card Layer:** Pure white surfaces with a very soft, diffused shadow (12px blur, 4% opacity, tinted with Ocean Blue).
3.  **Floating Layer:** Primary action buttons use a more pronounced shadow to indicate they are the highest point in the hierarchy.
4.  **Interactive States:** On press, elements should visually "sink" into the surface using a slight scale reduction (98%) and shadow removal to provide tactile feedback.

## Shapes

The shape language is defined by soft, continuous curves. There are no sharp 90-degree corners in the design system.

*   **Cards and Containers:** Use `rounded-lg` (16px) to create a soft, friendly container for timetable data.
*   **Buttons:** Primary buttons use a full pill shape (999px) to contrast against the rectangular cards and invite interaction.
*   **Icons:** Use a consistent 2px stroke weight with rounded terminals and junctions. Icons should be "Nature-Inspired," incorporating slight organic irregularities rather than perfect geometric shapes.

## Components

### Buttons
*   **Primary:** High-contrast Forest Green with white text. Pill-shaped.
*   **Secondary:** Vibrant Turquoise with white text. Used for "Current Location" or "Live Updates."
*   **Ghost:** Transparent with a 1.5px Forest Green border. Used for "View Full Map."

### Timetable Cards
*   White background, 16px corner radius.
*   A vertical "Line Indicator" on the left side of the card uses the specific route color.
*   Arrival times are positioned on the right, using `timetable-num` for maximum prominence.

### Chips & Status Indicators
*   **Live Status:** A Turquoise chip with a pulsing dot icon to indicate the bus is currently moving.
*   **Delay Warning:** A soft coral-tinted neutral chip (avoiding harsh reds) to indicate delays while remaining calm.

### Inputs
*   Search bars should be oversized (56px height) with a soft shadow and a prominent "leaf" or "magnifying glass" icon.
*   Placeholder text should use the Ocean Blue at 50% opacity.

### Navigation
*   A bottom navigation bar with a subtle glassmorphism effect (backdrop blur: 10px) to allow the island-inspired background colors to peak through, maintaining the sense of transparency and light.