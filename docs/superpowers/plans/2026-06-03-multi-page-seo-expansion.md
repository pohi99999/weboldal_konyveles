# Multi-page SEO Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the single-page website into a multi-page structure with dedicated service pages to maximize SEO relevance and professional depth.

**Architecture:** Use Next.js App Router for new static routes under `/szolgaltatasok/`. Update navigation components to support deep linking and enhance internal linking strategy.

**Tech Stack:** Next.js (App Router), Tailwind CSS, TypeScript, Framer Motion (for transitions).

---

### Task 1: Navigation Update (Header & Footer)

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update Header to use Next.js Link and support deep linking**

```tsx
import Link from 'next/link';

// Update desktop and mobile nav links to use Link:
// <Link href="/#services" className="...">Szolgáltatások</Link>
// <Link href="/#about" className="...">Rólunk</Link>
// <Link href="/#contact" className="...">Kapcsolat</Link>
```

- [ ] **Step 2: Update Footer links**

```tsx
import Link from 'next/link';

// Update Footer links to use Link:
// <Link href="/#services" className="...">Szolgáltatások</Link>
```

- [ ] **Step 3: Verify navigation works across pages**

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat: update navigation to support multi-page structure"
```

---

### Task 2: Service Pages Shared Layout

**Files:**
- Create: `src/app/szolgaltatasok/layout.tsx`

- [ ] **Step 1: Create a shared layout for service pages with Breadcrumbs**

```tsx
import Link from 'next/link';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
        <Link href="/" className="hover:text-blue-600">Kezdőlap</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Szolgáltatások</span>
      </nav>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/layout.tsx
git commit -m "feat: add shared layout for services aloldalak"
```

---

### Task 3: Accounting Service Page (Könyvelés)

**Files:**
- Create: `src/app/szolgaltatasok/konyveles/page.tsx`

- [ ] **Step 1: Write the service page component with specialized SEO**

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Könyvelés és Számviteli Szolgáltatások Zalaegerszeg',
  description: 'Teljes körű könyvelés, kettős könyvvitel és pénzügyi beszámolók készítése KKV-k részére Zalaegerszegen.',
};

export default function AccountingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Könyvelési Szolgáltatás - Pohánka és Társa",
    "description": "Precíz és megbízható könyvelés mikro- és kisvállalkozásoknak.",
    "areaServed": "Zalaegerszeg"
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
        Könyvelés és Számvitel
      </h1>
      <div className="prose prose-slate lg:prose-xl max-w-none">
        <p className="lead text-xl text-slate-600 mb-12 italic border-l-4 border-blue-600 pl-6">
          Vállalkozása pénzügyi stabilitásának alapja a precíz és naprakész könyvelés.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-serif font-bold mb-4">Mivel segítünk?</h2>
            <ul className="space-y-3 text-slate-600 list-disc pl-5">
              <li>Kettős könyvvitel vezetése</li>
              <li>ÁFA, SZJA, Társasági adó bevallások</li>
              <li>Éves beszámolók, mérlegek készítése</li>
              <li>Képviselet a hatóságok előtt</li>
            </ul>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-serif font-bold mb-4">Miért minket?</h2>
            <p className="text-slate-300">Több mint 25 év tapasztalatával nem csak adatokat rögzítünk, hanem értelmezzük is azokat az Ön üzleti sikere érdekében.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/konyveles/page.tsx
git commit -m "feat: add dedicated Accounting (Könyvelés) page"
```

---

### Task 4: Payroll Service Page (Bérszámfejtés)

**Files:**
- Create: `src/app/szolgaltatasok/berszamfejtes/page.tsx`

- [ ] **Step 1: Write the payroll page component**

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bérszámfejtés és Munkaügyi Ügyintézés | Pohánka és Társa',
  description: 'Profi bérszámfejtés, TB ügyintézés és munkaügyi nyilvántartások vezetése vállalkozások számára.',
};

export default function PayrollPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
        Bérszámfejtés és Munkaügy
      </h1>
      <div className="prose prose-slate lg:prose-xl max-w-none">
        <p className="lead text-xl text-slate-600 mb-12">
          Hatékony bérügyintézés, hogy Önnek csak a növekedésre kelljen figyelnie.
        </p>
        {/* Content similar to Task 3 */}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/berszamfejtes/page.tsx
git commit -m "feat: add dedicated Payroll (Bérszámfejtés) page"
```

---

### Task 5: Tax Advisory Service Page (Adótanácsadás)

**Files:**
- Create: `src/app/szolgaltatasok/adotanacsadas/page.tsx`

- [ ] **Step 1: Write the tax advisory page component**

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adótanácsadás és Optimalizálás | Pohánka és Társa',
  description: 'Személyre szabott adótanácsadás és stratégiai tervezés induló és működő vállalkozásoknak.',
};

export default function TaxAdvisoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
        Adótanácsadás
      </h1>
      <div className="prose prose-slate lg:prose-xl max-w-none">
        <p className="lead text-xl text-slate-600 mb-12">
          Szakértő segítség az adódzsungelben: biztonság és megtakarítás.
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/szolgaltatasok/adotanacsadas/page.tsx
git commit -m "feat: add dedicated Tax Advisory (Adótanácsadás) page"
```

---

### Task 6: Main Page Integration

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Link service cards to their respective pages**

```tsx
// Update the services array to include hrefs:
const services = [
  {
    title: "Teljes körű könyvelés",
    href: "/szolgaltatasok/konyveles",
    // ...
  },
  {
    title: "Bérszámfejtés",
    href: "/szolgaltatasok/berszamfejtes",
    // ...
  },
  {
    title: "Adótanácsadás",
    href: "/szolgaltatasok/adotanacsadas",
    // ...
  }
];

// In the services.map loop, wrap the card or add a link:
<Link href={service.href} className="mt-6 inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
  Részletek <span className="ml-1">→</span>
</Link>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: link service cards to dedicated subpages"
```

---

### Task 7: SEO Finalization (Sitemap)

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Update sitemap to include new routes**

```tsx
// Add the new routes to the returned array:
{ url: `${baseUrl}/szolgaltatasok/konyveles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/szolgaltatasok/berszamfejtes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/szolgaltatasok/adotanacsadas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
```

- [ ] **Step 2: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "chore: update sitemap with new service pages"
```
