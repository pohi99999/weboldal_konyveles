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
- Az MVP (Minimum Viable Product) UI elkészült (Hero szekció, Szolgáltatások, Rólunk, Kapcsolat).
- A Server Action a kapcsolati űrlaphoz implementálva lett (mock).
- A kód 100%-ban átment az alapvető teszteken.

## Fejlesztési Irányelvek
- **TDD (Test-Driven Development):** Minden új funkcióhoz tesztet írunk a kódolás előtt.
- **Folyamatos mentés és tesztelés:** `npm test` használata minden nagyobb változás után.
- **Commit üzenetek:** Conventional Commits formátum használata (`feat:`, `fix:`, `chore:`, stb.).

## Jövőbeli tervek (Következő Trackek)
1. SEO és Teljesítmény optimalizálás (Meta tagek, sitemap, LCP javítások).
2. UI/UX finomhangolás, Animációk és Mobil-első reszponzivitás ellenőrzése.
3. Vercel deployment, Domain beállítás és élesítés (Production).