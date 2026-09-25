# RTL / Persian Pack

## Purpose

Make Persian-first and bilingual products render correctly across layout, typography, forms, tables, and mixed Persian/Latin text.

## Use when

- Persian is a primary product language
- RTL layout is required
- Persian and English terms appear together
- Persian numerals/dates or localized formatting are required

## Core rules

- set document language and direction intentionally
- use logical CSS properties where possible
- test mixed RTL/LTR text, not only pure Persian
- choose Persian-capable fonts with verified glyph coverage
- do not mirror icons whose meaning is direction-independent
- test forms, tables, breadcrumbs, charts, code, and URLs separately

## Mixed-direction text

Use Unicode bidi controls only where necessary and deliberately. Do not scatter invisible direction marks through stored content as a substitute for correct layout semantics.

## Accessibility

RTL must not break focus order, keyboard navigation, labels, or screen-reader reading order.
