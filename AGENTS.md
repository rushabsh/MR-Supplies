<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# PROJECT DEVELOPMENT RULES

These rules apply to every development task in this project.

## 1. INSPECT BEFORE CODING

Before making any change:

- Inspect the existing project structure.
- Search for existing components, utilities, hooks, styles, services, and functions.
- Reuse existing code whenever possible.
- Do not create duplicate components or functionality.
- Do not immediately create new files without checking the existing codebase.

---

## 2. SIMPLEST SOLUTION FIRST

For every request, use the simplest solution that correctly satisfies the requirement.

Priority:

1. Existing solution
2. Extend existing solution
3. Simple reusable component/function
4. More advanced architecture only when genuinely necessary

Do NOT over-engineer.

Avoid unnecessary:

- Libraries
- Dependencies
- Abstractions
- Context providers
- Global state
- Hooks
- API layers
- Utility files
- Components
- Architecture
- Animations

If a simple solution works, use the simple solution.

---

## 3. REUSE BEFORE CREATE

Before creating anything new, ask:

"Does this already exist in the project?"

If YES:
- Reuse it.

If it needs a small change:
- Extend it.

Only create a new component/function/file when existing code cannot reasonably solve the requirement.

---

## 4. GLOBAL DESIGN SYSTEM

All common design values must come from centralized design tokens.

Centralize:

- Primary colors
- Secondary colors
- Accent colors
- Background colors
- Text colors
- Border colors
- Success/warning/error colors
- Typography
- Font weights
- Spacing
- Border radius
- Shadows
- Transitions
- Breakpoints

Use the project's global CSS/design-token system.

Never unnecessarily hardcode repeated design values.

Example:

Instead of repeatedly using different primary colors throughout the project, use the global primary color token.

Changing the global primary color should automatically update the entire project.

---

## 5. REUSABLE COMPONENTS

Create reusable components for repeated UI patterns.

Examples:

- Button
- Input
- Select
- Modal
- Card
- Badge
- Tabs
- Accordion
- Dropdown
- Tooltip
- Toast
- Table
- Pagination
- Loading
- Skeleton
- EmptyState
- ErrorState
- Container
- Section
- PageHeader
- Navbar
- Footer

Do not create multiple components for the same purpose.

For example, avoid:

- Button.tsx
- CustomButton.tsx
- BlueButton.tsx
- PrimaryButton.tsx

when one configurable Button component can handle the requirement.

---

## 6. REUSABLE SECTIONS

Repeated website sections should be reusable.

Examples:

- HeroSection
- AboutSection
- ServicesSection
- FeaturesSection
- StatsSection
- TestimonialsSection
- FAQSection
- CTASection
- ContactSection

Content should be passed through props or data.

Do not duplicate the same section markup across pages.

---

## 7. GLOBAL CHANGES MUST BE EASY

If I ask:

"Change the primary button color."

Do NOT manually change every page.

Find the global design token/component and change it there.

The same principle applies to:

- Colors
- Typography
- Border radius
- Shadows
- Spacing
- Button styles
- Form styles

One global change should update the entire project whenever possible.

---

## 8. RESPONSIVE DESIGN

Every UI must work properly on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large screens

Use the existing responsive system.

Prefer mobile-first responsive design.

---

## 9. DESIGN CONSISTENCY

Do not introduce random:

- Colors
- Font sizes
- Spacing
- Border radius
- Shadows
- Icons
- Button styles

Always follow the existing design system.

Before creating a new UI element, check existing components and styles.

---

## 10. DO NOT MODIFY UNRELATED CODE

When implementing a request:

- Change only what is necessary.
- Do not unnecessarily modify unrelated pages.
- Do not rewrite working code without a reason.
- Do not introduce unrelated refactoring.

Preserve existing functionality.

---

## 11. NO UNNECESSARY DEPENDENCIES

Before installing a package, check whether the requirement can be solved using:

- Existing project code
- Existing installed packages
- React
- Next.js
- Browser APIs
- CSS

Only add a dependency when it provides meaningful value.

---

## 12. TYPESCRIPT

Use proper TypeScript.

Avoid `any` unless genuinely necessary.

Reuse existing types before creating new ones.

---

## 13. PERFORMANCE

Prefer simple and performant implementations.

Avoid:

- Unnecessary re-renders
- Duplicate API requests
- Heavy dependencies
- Unnecessary client components
- Unoptimized images
- Excessive state

For Next.js, prefer Server Components unless client-side functionality is required.

---

## 14. ACCESSIBILITY

All UI should have:

- Semantic HTML
- Keyboard support
- Visible focus states
- Accessible labels
- Proper buttons/links
- Meaningful alt text
- Good color contrast

---

## 15. CLEANUP AFTER EVERY TASK

Before completing a task:

- Remove unused imports.
- Remove unused variables.
- Remove dead code.
- Remove unnecessary files.
- Check TypeScript errors.
- Check lint errors.
- Check console errors.
- Check responsive behavior.
- Check that existing functionality still works.

---

## 16. DECISION RULE

For every request follow:

Existing code?
    ↓
Reuse it.

Can existing code be extended?
    ↓
Extend it.

Can a simple component/function solve it?
    ↓
Create one.

Does the requirement genuinely require complexity?
    ↓
Only then introduce a more advanced solution.

---

## 17. GOLDEN RULE

Build the project as ONE coherent design system, not as a collection of independently created pages.

Use:

Global Design Tokens
        ↓
Reusable UI Components
        ↓
Reusable Layout Components
        ↓
Reusable Sections
        ↓
Pages

Always prefer:

SIMPLE + CLEAN + REUSABLE + MAINTAINABLE

over:

COMPLEX + OVER-ENGINEERED