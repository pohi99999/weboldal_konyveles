# Projekt: Pohánka és Társa Kft. - Könyvelési Társweboldal

## Célunk
A Pohánka és Társa Kft. jelenlegi weboldala (pohankaestarsa.com) elsősorban az AI és webfejlesztési szolgáltatásokra fókuszál. A célunk egy önálló, professzionális **könyvelési társweboldal** létrehozása, amely kifejezetten a cég könyvelési és adótanácsadási szolgáltatásait (Pohánka Józsefné szakmai vezetésével) mutatja be és népszerűsíti. Az oldal célja a bizalomépítés és az ügyfélszerzés (lead generation) a mikro-, kis- és középvállalkozások körében.

## Technológiai Stack
- **Frontend:** Next.js (App Router), React, TypeScript
- **Stílus:** Tailwind CSS, kiegészítve esetleg Shadcn UI komponensekkel
- **Backend:** Next.js Server Actions (kapcsolati űrlap kezelésére)
- **Hosting:** Vercel (CI/CD a GitHub tárolóból)
- **Tesztelés:** Vitest, React Testing Library

## Állapot
- A projekt alapstruktúrája elkészült.
- Az MVP (Minimum Viable Product) UI elkészült és modernizálva lett (2026-os design trendek: Calm Authority, Glassmorphism).
- A profilkép beillesztésre került és a tartalom személyesebbé, emberközelibbé vált.
- A SEO és Teljesítmény optimalizálás track befejeződött (Metadata API, OpenGraph, Sitemap, Robots.txt, JSON-LD).
- Többoldalas SEO struktúra kialakítva (dedikált szolgáltatás aloldalak).
- A UI/UX finomhangolás, Animációk és Mobil-első reszponzivitás track befejeződött (Framer Motion, újrahasznosítható komponensek).
- **Deployment:** Az oldal automatikusan élesedik a Vercel-en a GitHub tárolóból.
  - **GitHub:** `https://github.com/pohi99999/weboldal_konyveles.git`
  - **URL:** `https://weboldal-konyveles.vercel.app/`
- A kód 100%-ban átment a teszteken.

## Fejlesztési Irányelvek
- **TDD (Test-Driven Development):** Minden új funkcióhoz tesztet írunk a kódolás előtt.
- **Folyamatos mentés és tesztelés:** `npm test` használata minden nagyobb változás után.
- **Commit üzenetek:** Conventional Commits formátum használata (`feat:`, `fix:`, `chore:`, stb.).

## Befejezett Trackek
1. **Weboldal alapstruktúra és MVP felépítése** (2026.06.01)
2. **SEO és Teljesítmény optimalizálás** (2026.06.02)
3. **UI/UX finomhangolás és Reszponzivitás** (2026.06.03)

## Jövőbeli tervek (Következő Trackek)
1. Élesítés, Domain beállítás és végső tesztelés (Production).