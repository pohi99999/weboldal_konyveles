# Final UI Polish & Responsiveness Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finalize the UI with global styles, smooth scrolling, and header consistency.

**Architecture:** Surgical updates to global CSS and Header component to ensure a polished look across all devices and smooth navigation.

**Tech Stack:** Next.js (App Router), Tailwind CSS (v4 inline), React, TypeScript.

---

### Task 1: Add Global Smooth Scrolling

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add smooth scrolling to the base layer**

```css
@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

- [ ] **Step 2: Commit changes**

```bash
git add src/app/globals.css
git commit -m "style: add global smooth scrolling"
```

### Task 2: Refine Header Consistency and Responsiveness

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Ensure consistent backdrop-blur and background**

Update the header class to use `bg-white/70 dark:bg-slate-900/70` for better dark mode support if applicable, although current `bg-white/70` is the target for light theme focus.

- [ ] **Step 2: Review mobile menu interaction and alignment**

Ensure the mobile dropdown has proper padding and shadow.

- [ ] **Step 3: Commit changes**

```bash
git add src/components/Header.tsx
git commit -m "ui: refine header consistency and mobile responsiveness"
```

### Task 3: Verification and Final Audit

- [ ] **Step 1: Run lint and build check**

Run: `npm run lint` and `npm run build`
Expected: 0 errors.

- [ ] **Step 2: Final visual check (conceptual)**

Verify that all service links in the header point to the correct sections or pages.
