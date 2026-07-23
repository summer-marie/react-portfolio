# Engineering Standards

## Purpose

This document defines the implementation standards for the portfolio.

The goal is to build a responsive, maintainable, and scalable application that adapts naturally across devices while minimizing hard-coded values.

Every implementation decision should prioritize flexibility over fixed layouts.

---

# Core Philosophy

The interface should be fluid.

Layouts should adapt naturally to screen size instead of relying on numerous breakpoint-specific overrides.

Whenever possible, use values that scale with the viewport, typography, or parent container rather than fixed pixel measurements.

---

# Responsive Design

Design mobile-first.

Layouts should progressively enhance as screen space increases.

Favor flexible layouts over rigid positioning.

---

# Preferred Units

## Typography

Use:

* `rem`

Avoid:

* `px`

Typography should scale from the root font size.

---

## Spacing

Prefer:

* `rem`
* `em`
* `clamp()`

Avoid fixed pixel spacing unless absolutely necessary.

Example:

```css
padding: clamp(1rem, 2vw, 2rem);
```

---

## Width

Prefer:

* `%`
* `vw`
* `min()`
* `max()`
* `clamp()`

Avoid fixed widths.

Example:

```css
width: min(90%, 1200px);
```

---

## Height

Avoid fixed heights whenever possible.

Allow content to determine height.

Use `min-height` when appropriate.

---

## Images

Images should:

* Scale with their containers
* Preserve aspect ratios
* Use responsive sizing
* Avoid fixed dimensions

---

## Border Radius

Use `rem`.

Example:

```css
border-radius: 1rem;
```

---

## Shadows

Use consistent shadow tokens.

Avoid creating new shadows for individual components.

---

# CSS Functions

Prefer modern CSS functions whenever possible.

Use:

* `clamp()`
* `min()`
* `max()`
* `calc()`

These create layouts that respond naturally across screen sizes.

---

# Layout

Use:

* CSS Grid
* Flexbox

Avoid positioning with absolute values unless required for decorative elements.

---

# Containers

Use responsive container widths.

Example:

```css
width: min(90%, 80rem);
margin-inline: auto;
```

Avoid hard-coded page widths.

---

# Breakpoints

Design for content—not devices.

Only introduce breakpoints when the layout requires them.

Minimize the total number of breakpoints.

---

# Component Sizing

Components should grow and shrink naturally.

Avoid component-specific media queries whenever possible.

Use intrinsic sizing and modern layout techniques.

---

# Design Tokens

All reusable values should come from centralized tokens.

Examples:

* Colors
* Typography
* Spacing
* Shadows
* Border radius
* Animation durations
* Z-index
* Breakpoints

Avoid magic numbers.

---

# Accessibility

Use relative units so users who increase browser font sizes receive an improved experience without breaking layouts.

---

# Performance

Prioritize CSS solutions before JavaScript.

Avoid layout thrashing.

Use hardware-accelerated animations when possible.

Animate:

* opacity
* transform
* filter (sparingly)

Avoid animating:

* width
* height
* top
* left

unless absolutely necessary.

---

# Maintainability

Every new component should be:

* Responsive by default
* Theme-aware
* Accessible
* Reusable
* Built using existing design tokens

If a value is repeated more than twice, consider creating a reusable token or utility.

---

# Guiding Principle

When faced with multiple implementation options, choose the solution that is:

1. More responsive
2. More maintainable
3. More reusable
4. More accessible
5. Simpler to understand

The portfolio should feel fluid across all screen sizes without relying on excessive breakpoint-specific styling.

## Examples

Instead of this: 

```
padding: 1.5rem;
border-radius: 16px;
box-shadow: 0 8px 30px rgba(...);

```
use this:

```
padding: var(--space-6);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);

```

---

# Component Philosophy

Build small, composable components.

Prefer creating reusable primitives over page-specific components.

Recommended hierarchy:

```text
Primitive Components
↓
Shared Components
↓
Section Components
↓
Page Components
```

Example:

```text
Button
Card
Container
Badge

↓

ProjectCard
SectionHeader
ThemeToggle

↓

FeaturedProjectsSection
HeroSection
ContactSection

↓

HomePage
WorkPage
AboutPage
```

This keeps components reusable, maintainable, and easy to test.