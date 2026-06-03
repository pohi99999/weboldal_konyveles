# UI/UX Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the website's visual quality and user experience by applying consistent Glassmorphism design, adding animations with Framer Motion, and ensuring perfect mobile responsiveness across all pages.

**Architecture:** Create reusable UI components for shared patterns (Hero, Section, CTA). Integrate Framer Motion for scroll-linked and entry animations. Maintain a consistent dark/light section alternating pattern.

**Tech Stack:** Next.js, Tailwind CSS, Framer Motion, Lucide React (or SVG icons).

---

### Task 1: Dependencies & Base Setup

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install Framer Motion**

Run: `npm install framer-motion lucide-react`

- [ ] **Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install framer-motion and lucide-react for UI refinement"
```

---

### Task 2: Reusable UI Components

**Files:**
- Create: `src/components/ServiceHero.tsx`
- Create: `src/components/ContactCTA.tsx`
- Create: `src/components/AnimatedSection.tsx`

- [ ] **Step 1: Create ServiceHero with Glassmorphism**

```tsx
'use client';
import { motion } from 'framer-motion';

export default function ServiceHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-24 px-6 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl opacity-50" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <div className="inline-block p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create ContactCTA**

```tsx
'use client';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl -z-0" />
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 relative z-10">Készen áll a stabil háttérre?</h2>
        <Link 
          href="/#contact" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 relative z-10"
        >
          Kérjen ajánlatot most
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create AnimatedSection**

```tsx
'use client';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ServiceHero.tsx src/components/ContactCTA.tsx src/components/AnimatedSection.tsx
git commit -m "feat: add reusable UI components for service pages"
```

---

### Task 3: Refactor Accounting Page

**Files:**
- Modify: `src/app/szolgaltatasok/konyveles/page.tsx`

- [ ] **Step 1: Apply new design to Accounting page**

```tsx
// Use ServiceHero, AnimatedSection, and ContactCTA
// Alternate between light (slate-50) and dark (slate-900) sections
```

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/konyveles/page.tsx
git commit -m "feat: refactor accounting page with new UI/UX"
```

---

### Task 4: Refactor Payroll Page

**Files:**
- Modify: `src/app/szolgaltatasok/berszamfejtes/page.tsx`

- [ ] **Step 1: Apply new design to Payroll page**

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/berszamfejtes/page.tsx
git commit -m "feat: refactor payroll page with new UI/UX"
```

---

### Task 5: Refactor Tax Advisory Page

**Files:**
- Modify: `src/app/szolgaltatasok/adotanacsadas/page.tsx`

- [ ] **Step 1: Apply new design to Tax Advisory page**

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/adotanacsadas/page.tsx
git commit -m "feat: refactor tax advisory page with new UI/UX"
```

---

### Task 6: Final Polish & Responsiveness Audit

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add smooth scrolling and global transition classes**

```css
/* globals.css */
@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

- [ ] **Step 2: Ensure Header backdrop-blur is consistent across all pages**

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx src/app/globals.css
git commit -m "chore: final UI polish and global styles"
```
