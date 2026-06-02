# Implementation Plan: SEO és Teljesítmény optimalizálás

## Phase 1: Meta adatok és Alap SEO
- [x] Task: Dinamikus metaadatok konfigurálása a Next.js Metadata API-val (a1f8e23)
    - [x] Hozz létre egy alapértelmezett SEO konfigurációt a `layout.tsx`-ben.
    - [x] Állítsd be a címeket és leírásokat a `page.tsx`-ben.
- [x] Task: OpenGraph és Social Media tagek beállítása (a1f8e23)
    - [x] Adj hozzá képet, címet és leírást a közösségi megosztásokhoz.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Meta adatok és Alap SEO'

## Phase 2: Technikai SEO (Sitemap & Robots)
- [ ] Task: Sitemap generálás implementálása
    - [ ] Hozz létre `app/sitemap.ts` fájlt.
- [ ] Task: Robots.txt konfigurálása
    - [ ] Hozz létre `app/robots.ts` fájlt.
- [ ] Task: Strukturált adatok (JSON-LD) hozzáadása
    - [ ] Implementálj LocalBusiness sémát a főoldalon.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Technikai SEO'

## Phase 3: Teljesítmény Optimalizálás
- [ ] Task: Képek és betűtípusok felülvizsgálata
    - [ ] Biztosítsd a `next/image` használatát mindenhol.
    - [ ] Optimalizáld a betűtípusok betöltését.
- [ ] Task: Core Web Vitals és LCP javítások
    - [ ] Ellenőrizd a Largest Contentful Paint elemet és optimalizáld (pl. priority flag).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Teljesítmény Optimalizálás'

## Phase 4: Audit és Validálás
- [ ] Task: Lighthouse audit futtatása és hibák javítása
- [ ] Task: Mobil reszponzivitás és sebesség ellenőrzése
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Audit és Validálás'
