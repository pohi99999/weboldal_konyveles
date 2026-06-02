# Specification: SEO és Teljesítmény optimalizálás

## 1. Célkitűzés
A weboldal keresőmotorok számára való optimalizálása (SEO) és a betöltési sebesség javítása a kiváló felhasználói élmény és a Core Web Vitals pontszámok elérése érdekében.

## 2. Funkcionális Követelmények

### 2.1 Metaadatok és SEO
- Egyedi `title` és `description` minden oldalhoz.
- OpenGraph (Facebook) és Twitter Card meta tagek beállítása.
- `canonical` tag-ek kezelése.
- Favicon és App ikonok megfelelő konfigurálása.

### 2.2 Tartalmi SEO
- Megfelelő címsor (H1-H6) hierarchia ellenőrzése.
- Képek `alt` szövegeinek pótlása/ellenőrzése.

### 2.3 Technikai SEO
- `sitemap.xml` automatikus generálása.
- `robots.txt` konfigurálása.
- Strukturált adatok (JSON-LD) hozzáadása (LocalBusiness, ProfessionalService).

## 3. Nem Funkcionális Követelmények (Teljesítmény)
- Képek optimalizálása a `next/image` komponenssel (WebP formátum, lazy loading).
- Betűtípusok optimalizálása (Next.js Font Optimization).
- Bundle méret minimalizálása.
- Lighthouse pontszámok: >90 minden kategóriában (Performance, Accessibility, Best Practices, SEO).

## 4. Sikerkritériumok
- A weboldal hibátlanul átmegy egy Lighthouse auditen.
- A sitemap és robots.txt fájlok elérhetőek.
- A közösségi média megosztásoknál a helyes előnézet jelenik meg.
