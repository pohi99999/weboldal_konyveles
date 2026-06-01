# Implementation Plan: Weboldal alapstruktúra és MVP felépítése

## Phase 1: Projekt inicializálása [checkpoint: efe7849]
- [x] Task: Next.js projekt létrehozása Tailwind CSS-sel (15aa283)
    - [x] Run `npx create-next-app@latest .` with Tailwind and TypeScript.
    - [x] Configure `next.config.ts`.
- [x] Task: Alapvető mappaszerkezet kialakítása (74a2d48)
    - [x] Hozz létre `components`, `lib`, és `app` mappákat.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Projekt inicializálása' (Protocol in workflow.md) (efe7849)

## Phase 2: UI komponensek és Layout [checkpoint: d34547e]
- [x] Task: Fő layout és navigáció kialakítása (89d10c2)
    - [x] Hozz létre egy Header (navigáció) komponenst.
    - [x] Hozz létre egy Footer komponenst.
    - [x] Integráld a layout.tsx-be.
- [x] Task: Conductor - User Manual Verification 'Phase 2: UI komponensek és Layout' (Protocol in workflow.md) (d34547e)

## Phase 3: Főoldali Szekciók (MVP) [checkpoint: f90f165]
- [x] Task: Hero Szekció implementálása (0d9ef74)
    - [x] CTA gombok és értékajánlat szöveg.
- [x] Task: Szolgáltatások szekció (7d651ed)
    - [x] Kártyás elrendezés a szolgáltatásoknak.
- [x] Task: Rólunk szekció (e4b3637)
    - [x] Kép és bemutatkozó szöveg komponens.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Főoldali Szekciók (MVP)' (Protocol in workflow.md) (f90f165)

## Phase 4: Kapcsolati Űrlap és Backend
- [ ] Task: Kapcsolati Űrlap UI
    - [ ] Név, Email, Telefon, Üzenet mezők létrehozása.
- [ ] Task: Server Action implementálása
    - [ ] Űrlap adatainak fogadása és validálása.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Kapcsolati Űrlap és Backend' (Protocol in workflow.md)