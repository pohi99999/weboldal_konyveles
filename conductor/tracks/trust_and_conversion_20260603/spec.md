# Specification: Bizalomépítés és Konverzió Optimalizálás

**Cél:** A látogatók ügyféllé konvertálási arányának növelése hitelességi elemek és kényelmi funkciók hozzáadásával.

## 1. Funkcionális követelmények
### 1.1. Munkamenet vizualizáció (WorkProcess)
- Egy 4 lépésből álló folyamat bemutatása: Kapcsolat -> Konzultáció -> Szerződés -> Munka megkezdése.
- Ikonok és rövid leírások minden lépéshez.

### 1.2. Gyakori Kérdések (FAQ)
- Interaktív harmonika komponens.
- Legalább 5 alapvető kérdés és válasz (pl. könyvelőváltás menete, szükséges dokumentumok).

### 1.3. Dedikált Kapcsolat Oldal (`/kapcsolat`)
- Önálló route.
- Interaktív térkép beágyazási hely (Google Maps placeholder).
- Részletes elérhetőségek és az űrlap hangsúlyos megjelenítése.

### 1.4. Kapcsolati Űrlap Frissítése
- "Visszahívást kérek" checkbox hozzáadása.
- Sikeres küldés visszajelzés (UI szinten).

## 2. Design követelmények
- Illeszkedés a meglévő Glassmorphism és Calm Authority stílushoz.
- Framer Motion animációk az FAQ és a folyamatábra elemeihez.
