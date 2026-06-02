# Implementation Plan: SEO és Teljesítmény optimalizálás

## Phase 1: Meta adatok és Alap SEO
- [x] Task: Dinamikus metaadatok konfigurálása a Next.js Metadata API-val (a1f8e23)
    - [x] Hozz létre egy alapértelmezett SEO konfigurációt a `layout.tsx`-ben.
    - [x] Állítsd be a címeket és leírásokat a `page.tsx`-ben.
- [x] Task: OpenGraph és Social Media tagek beállítása (a1f8e23)
    - [x] Adj hozzá képet, címet és leírást a közösségi megosztásokhoz.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Meta adatok és Alap SEO'

## Phase 2: Technikai SEO (Sitemap & Robots)
- [x] Task: Sitemap generálás implementálása (b8a9c2d)
    - [x] Hozz létre `app/sitemap.ts` fájlt.
- [x] Task: Robots.txt konfigurálása (b8a9c2d)
    - [x] Hozz létre `app/robots.ts` fájlt.
- [x] Task: Strukturált adatok (JSON-LD) hozzáadása (b8a9c2d)
    - [x] Implementálj LocalBusiness sémát a főoldalon.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Technikai SEO'

## Phase 3: Teljesítmény Optimalizálás
- [x] Task: Képek és betűtípusok felülvizsgálata (2f7466b)
    - [x] Biztosítsd a `next/image` használatát mindenhol.
    - [x] Optimalizáld a betűtípusok betöltését.
- [x] Task: Core Web Vitals és LCP javítások (76c8d1a)
    - [x] Ellenőrizd a Largest Contentful Paint elemet és optimalizáld (pl. priority flag).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Teljesítmény Optimalizálás'

## Phase 4: Audit és Validálás
- [ ] Task: Lighthouse audit futtatása és hibák javítása
- [ ] Task: Mobil reszponzivitás és sebesség ellenőrzése
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Audit és Validálás'
