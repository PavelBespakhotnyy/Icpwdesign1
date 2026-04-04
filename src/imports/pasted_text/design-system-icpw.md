# Design System Document: High-End Editorial for ICPW

## 1. Overview & Creative North Star: "The Living Canvas"
The North Star for this design system is **"The Living Canvas."** We are moving away from the rigid, boxy constraints of traditional web "templates" to create an experience that feels as fluid and intentional as a curated art gallery or a high-end editorial spread. 

The ICPW brand represents deep, grounded work. To reflect this, the design system utilizes **Asymmetric Harmony**. We avoid centering everything; instead, we use the spacing scale to create "active white space"—where the absence of content is as important as the content itself. Elements should overlap subtly—a headline might bleed slightly over a nature photograph, or a card might sit offset on a tonal background—to create a sense of depth, movement, and human touch.

---

## 2. Colors: The Tonal Landscape
Our palette is rooted in the earth and sky. We use Material Design tokens not as blocks of color, but as "atmospheric layers."

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. We define boundaries through **Background Color Shifts**. 
*   *Example:* A section using `surface-container-low` (#f3f4ee) should sit directly against a `background` (#fafaf5) section. The subtle shift in hex value is enough to cue the eye without cluttering the visual field.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Base:** `surface` (#fafaf5)
*   **Depth:** Use `surface-container-lowest` (#ffffff) for high-importance "hero" cards to make them feel like they are floating toward the user. 
*   **Recess:** Use `surface-container-highest` (#e0e4dc) for footer or utility areas to ground the experience.

### The "Glass & Gradient" Rule
To mimic the dappled light of a forest:
*   **Glassmorphism:** For navigation bars or floating action panels, use `surface` at 80% opacity with a `backdrop-blur` of 12px.
*   **Signature Textures:** Use a linear gradient for primary CTAs transitioning from `primary` (#50662b) to `primary-dim` (#455a20) at a 135-degree angle. This adds a "soulful" weight that flat color lacks.

---

## 3. Typography: Editorial Authority
We utilize a pairing of **Manrope** (Display/Headlines) and **Work Sans** (Body/Labels) to balance modern professionalism with approachable warmth.

*   **Display-LG (Manrope, 3.5rem):** Reserved for hero statements. Use `on-surface` (#2f342e) with a letter-spacing of -0.02em to create a sophisticated, tight-knit editorial look.
*   **Headline-MD (Manrope, 1.75rem):** Used for section breaks. Always pair with generous top-margin (Spacing 16 or 20) to let the "Natural Landscape" breathe.
*   **Body-LG (Work Sans, 1rem):** Our workhorse. Use `on-surface-variant` (#5c605a) for long-form reading to reduce eye strain and maintain the "soft" feel.
*   **Label-MD (Work Sans, 0.75rem):** Set in All Caps with 0.05em tracking when used for category tags to provide a "Grounded" architectural feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital." We use **Ambient Atmosphere**.

*   **The Layering Principle:** Stack `surface-container-lowest` cards on `surface-container-low` backgrounds. The delta between #ffffff and #f3f4ee creates a natural lift.
*   **Ambient Shadows:** For elevated elements (like a "Contact" modal), use a shadow color of `on-surface` at 5% opacity, with a Blur of 32px and a Y-offset of 16px. It should look like a soft shadow cast by a leaf on the ground.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#afb3ac) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Floating navigation must use `surface_bright` with a 10px backdrop-blur to allow the nature photography backgrounds to "bleed through" softly.

---

## 5. Components: Softness and Intent

### Buttons
*   **Primary:** `primary` background, `on-primary` text. Use `Roundedness-lg` (0.5rem) for a modern, softened corner. Never use "pill" shapes for primary actions; they feel too casual for ICPW.
*   **Tertiary:** No background. Underline using `primary-fixed-dim` at 2px height, offset by 4px.

### Cards & Lists
*   **Forbidden:** Divider lines between list items.
*   **Alternative:** Use **Spacing 4** (1.4rem) between items. For lists, use a subtle `surface-variant` background on hover to indicate interactivity.
*   **Card Structure:** Images should occupy 40% of the card area, using a subtle `Roundedness-xl` (0.75rem) to echo organic shapes found in nature.

### Input Fields
*   **State:** Default state uses `surface-container-high` as a background rather than an outline.
*   **Focus:** Transition to a `primary` ghost border (20% opacity) and a subtle 2px bottom border in `primary`.

### Nature Overlays (Custom Component)
*   **The "Vignette" Container:** When text sits over foliage imagery, use a radial gradient mask that transitions from `on-surface` (at 40% opacity) to transparent, ensuring the `Display-LG` typography remains legible while the edges of the image remain clear.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use the Spacing Scale (20 or 24) for vertical margins between major sections. Space is a design element, not "empty" area.
*   **Do** align text to the left for headlines. Centered text feels like a template; left-aligned editorial layouts feel intentional.
*   **Do** use `tertiary` (#0e6781) sparingly for links or info-callouts to represent "Water/Sky" within the "Greenery" of the primary palette.

### Don't:
*   **Don't** use pure black (#000000). Use `on-surface` (#2f342e) for all text to maintain the "Grounded" earth-tone feel.
*   **Don't** use standard Material icons in high-contrast colors. Always use them in `outline` (#787c75) or `secondary` (#516170).
*   **Don't** trap content in boxes. Let images bleed to the edge of the screen where possible to create a "panoramic" feel.