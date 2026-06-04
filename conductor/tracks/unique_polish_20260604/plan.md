# Implementation Plan: Egyedi Karakter és Prémium Polír

## Phase 1: Vizuális Alapok és Bento Grid [checkpoint: d34547e]
- [x] Task: Szolgáltatások szekció átalakítása Bento Grid elrendezéssé (b9a2c1d)
    - [x] Tervezd meg az aszimmetrikus rácsot (1 nagy, 2 kicsi vagy hasonló).
    - [x] Implementáld a `src/app/page.tsx`-ben a Tailwind `grid-cols` és `row-span` segítségével.
- [x] Task: Animált digitális aláírás készítése (e5f6g7h)
    - [x] Készíts egy SVG aláírás komponenst.
    - [x] Animáld meg a `pathLength` tulajdonságot Framer Motion-nel, hogy a görgetéskor "íródjon ki".

## Phase 2: Interaktív Bizalmi Elemek [checkpoint: f90f165]
- [x] Task: "Service Finder" Wizard komponens létrehozása (a3b4c5d)
    - [x] Hozz létre egy `src/components/ServiceWizard.tsx` fájlt.
    - [x] Implementáld a kérdések logikáját (state management).
    - [x] Stílusozd meg üveghatású (glassmorphism) stílusban.
- [x] Task: Wizard integrálása a főoldalra (e6f7g8h)
    - [x] Helyezd el a szolgáltatások és a rólunk szekció közé.

## Phase 3: Mikro-interakciók és Esztétika [checkpoint: a35e9cc]
- [x] Task: Global Layout finomítása (i9j0k1l)
    - [x] Adj hozzá egy lebegő "Vissza a tetejére" gombot.
    - [x] Implementálj egy egyedi, selymes görgetési effektet (Lenis vagy Framer Motion alapú).
- [x] Task: Dark Mode váltó és finomítás (m2n3o4p)
    - [x] Hozz létre egy esztétikus nap/hold váltó gombot a Headerben.
    - [x] Biztosítsd a színek tökéletes harmóniáját sötét módban is (Slate/Blue paletta).

## Phase 4: Végső Tartalmi Polír [checkpoint: efe7849]
- [x] Task: Szövegezés és Micro-copy frissítése (q5r6s7t)
    - [x] Cseréld le a generikus alcímeket érzelemgazdagabb, bizalomépítő szövegekre.
    - [x] Adj hozzá "Tudta-e?" (Did you know?) jellegű apró tippeket a szekciók közé.
- [x] Task: Conductor - Végső Validálás és Checkpoint (efe7849)
