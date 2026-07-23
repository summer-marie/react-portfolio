# Design System

## Philosophy

The interface should feel alive, but never distracting.

Every interaction should reinforce confidence, craftsmanship, and responsiveness.

Motion should communicate hierarchy and feedback—not decoration.

If an animation doesn't improve usability or delight, it shouldn't exist.

---

# Motion Principles

## Fast

Animations should never make the interface feel slower.

Prefer:

* 150–250ms for hover interactions
* 250–400ms for page transitions
* 400–600ms for entrance animations

Avoid long cinematic animations.

---

## Natural

Movement should accelerate and decelerate naturally.

Avoid linear animations whenever possible.

---

## Layered

Different UI elements should move independently.

Examples:

* Background moves slower than foreground.
* Text appears slightly after its container.
* Decorative elements drift independently.

---

## Subtle

Motion should reward interaction.

The goal is polish—not spectacle.

---

# Hover Behavior

Hover interactions should feel tactile.

Examples:

* Slight elevation
* Softer shadow
* Tiny upward movement
* Gentle lighting shift
* Cursor feedback

Avoid:

* Large scaling
* Aggressive rotation
* Oversized glow effects

---

# Page Transitions

Transitions between pages should feel seamless.

Preferred effects:

* Fade
* Small upward movement
* Blur reduction
* Shared layout transitions where appropriate

Navigation should always feel immediate.

---

# Scroll Behavior

Scrolling should reveal content naturally.

Preferred:

* Fade-in
* Small translateY
* Staggered children

Avoid:

* Overly dramatic parallax
* Spinning objects
* Long chained animations

---

# Ambient Effects

Ambient effects create atmosphere.

Examples:

* Slow gradient movement
* Soft blurred lighting
* Floating decorative shapes
* Gentle opacity shifts

These should run slowly enough that users barely notice them.

---

# Buttons

Buttons should feel clean and intentional.

States:

* Default
* Hover
* Active
* Focus
* Disabled

Hover behavior:

* Slight lift
* Slight shadow increase
* Smooth color transition

---

# Cards

Cards should be the primary layout building block.

Characteristics:

* Soft radius
* Spacious padding
* Subtle border
* Light shadow

Hover behavior:

* Lift slightly
* Shadow deepens
* Border becomes more visible
* Optional ambient glow

---

# Navigation

Navigation should feel lightweight.

Behavior:

* Transparent near the top
* Gains background while scrolling
* Smooth active-state transitions
* Theme toggle animates smoothly

---

# Section Transitions

Sections should flow naturally into one another.

Possible techniques:

* Soft gradients
* Background tone shifts
* Increased spacing
* Decorative lighting

Avoid hard visual breaks.

---

# Icons

Icons should remain consistent.

Guidelines:

* Outline style
* Rounded corners where appropriate
* Similar stroke widths
* Minimal animation

---

# Microinteractions

Good opportunities include:

* Theme switching
* Copy-to-clipboard actions
* External link indicators
* Button presses
* Navigation
* Project filtering
* Contact interactions

Keep feedback immediate.

---

# Accessibility

Motion should never reduce usability.

Requirements:

* Respect prefers-reduced-motion
* Preserve keyboard navigation
* Maintain visible focus states
* Never hide essential information behind animation

---

# Component Principles

Every reusable component should follow these rules:

1. Simple by default.
2. Consistent spacing.
3. Responsive from the start.
4. Accessible.
5. Easy to reuse.
6. Easy to extend.

---

# Version 1 Components

Build only:

* Button
* Card
* Section
* Container
* Navigation
* Footer
* Theme Toggle
* Badge
* Project Card
* CTA Banner

Everything else should be composed from these primitives.

---

# Future Components

Possible Version 2 additions:

* Command Palette
* Timeline
* Interactive Architecture Viewer
* Animated Statistics
* Project Filters
* Blog Components
* Case Study Gallery

These should not delay Version 1.
