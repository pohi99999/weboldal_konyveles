# Implementation Plan: Weboldal alapstruktúra és MVP felépítése

## Phase 1: Projekt inicializálása [checkpoint: efe7849]
- [x] Task: Next.js projekt létrehozása Tailwind CSS-sel (15aa283)
    - [x] Run `npx create-next-app@latest .` with Tailwind and TypeScript.
    - [x] Configure `next.config.ts`.
- [x] Task: Alapvető mappaszerkezet kialakítása (74a2d48)
    - [x] Hozz létre `components`, `lib`, és `app` mappákat.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Projekt inicializálása' (Protocol in workflow.md) (efe7849)

## Phase 2: UI komponensek és Layout
- [ ] Task: Fő layout és navigáció kialakítása
    - [ ] Hozz létre egy Header (navigáció) komponenst.
    - [ ] Hozz létre egy Footer komponenst.
    - [ ] Integráld a layout.tsx-be.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: UI komponensek és Layout' (Protocol in workflow.md)

## Phase 3: Főoldali Szekciók (MVP)
- [ ] Task: Hero Szekció implementálása
    - [ ] CTA gombok és értékajánlat szöveg.
- [ ] Task: Szolgáltatások szekció
    - [ ] Kártyás elrendezés a szolgáltatásoknak.
- [ ] Task: Rólunk szekció
    - [ ] Kép és bemutatkozó szöveg komponens.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Főoldali Szekciók (MVP)' (Protocol in workflow.md)

## Phase 4: Kapcsolati Űrlap és Backend
- [ ] Task: Kapcsolati Űrlap UI
    - [ ] Név, Email, Telefon, Üzenet mezők létrehozása.
- [ ] Task: Server Action implementálása
    - [ ] Űrlap adatainak fogadása és validálása.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Kapcsolati Űrlap és Backend' (Protocol in workflow.md)