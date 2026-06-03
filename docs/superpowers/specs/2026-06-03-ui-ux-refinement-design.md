# Design Specification: UI/UX Finomhangolás és Reszponzivitás

**Dátum:** 2026.06.03
**Állapot:** Elfogadásra vár
**Téma:** Az aloldalak vizuális finomhangolása, animációk hozzáadása és a mobil-első felhasználói élmény tökéletesítése.

## 1. Célkitűzés
A weboldal teljes vizuális egységének megteremtése a "Service Deep-Dive" koncepció alapján. Az új aloldalak (Könyvelés, Bérszámfejtés, Adótanácsadás) megkapják a főoldal prémium, Glassmorphism stílusát, váltakozó sötét/világos szekciókkal és finom animációkkal.

## 2. Vizuális Irányelvek
- **Stílus:** Calm Authority, Glassmorphism (áttetsző, elmosott rétegek).
- **Színpaletta:** Slate-900 (alap sötét), Slate-50 (alap világos), Blue-600 (CTA és hangsúly).
- **Tipográfia:** Serif (Playfair Display) a főcímekhez, Sans-serif (Inter) a folyószöveghez.

## 3. Komponens Specifikációk
### 3.1. Aloldal Hero Szekció
- Sötét (slate-900) háttér absztrakt gradiens fényekkel.
- Középre zárt Glassmorphism kártya a szolgáltatás nevével és rövid leírásával.
- Beúszó animáció az oldal betöltésekor.

### 3.2. Tartalmi Blokkok
- **Világos blokk:** Fehér kártyák finom árnyékkal a konkrét feladatok listázásához.
- **Sötét blokk:** Slate-900 háttér a szakmai hitvallás és "Miért mi?" érvek kiemeléséhez.
- Ikonok használata minden felsorolásnál a vizuális tájékozódás segítésére.

### 3.3. Animációk (Framer Motion)
- `Fade-in` és `Slide-up` effektusok a szekciók görgetésekor.
- Interaktív hover állapotok a kártyákon (enyhe emelkedés, színváltozás).

### 3.4. Reszponzivitás
- Mobilnézetben a kártyák függőleges elrendezése.
- Megfelelő érintési tartományok (tap targets) a gomboknál.
- Betűméretek optimalizálása kisebb kijelzőkre.

## 4. Navigációs Frissítések
- **Sticky Header:** Marad fixen a tetején, segítve a visszajutást a főoldali szekciókhoz.
- **Footer CTA:** Minden aloldal végén egy hangsúlyos kártya, ami visszavisz a főoldali kapcsolati űrlaphoz.

## 5. Önmegtekintés (Self-Review)
- **Helyőrzők:** Nincsenek, a specifikáció a meglévő technológiai stackre épül.
- **Konzisztencia:** Teljes mértékben illeszkedik a korábbi trackekhez.
- **Hatókör:** Fókuszált, az aloldalak UI/UX javítására és a reszponzivitásra irányul.
