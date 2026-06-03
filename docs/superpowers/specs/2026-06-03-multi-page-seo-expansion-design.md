# Design Specification: Többoldalas SEO és Szolgáltatás Bővítés

**Dátum:** 2026.06.03
**Állapot:** Elfogadásra vár
**Téma:** A weboldal átalakítása többoldalas struktúrára a SEO hatékonyság növelése érdekében.

## 1. Célkitűzés
A jelenlegi egyoldalas (SPA) felépítés bővítése dedikált aloldalakkal a főbb szolgáltatások számára. Ez lehetővé teszi a specifikus kulcsszavakra való optimalizálást, javítja a felhasználói élményt és növeli a szakmai hitelességet.

## 2. Architektúra és Útvonalak
A Next.js App Router struktúráját használva az alábbi új útvonalakat hozzuk létre:

- `/` (Főoldal): Megtartja a jelenlegi designt, de navigációs pontként szolgál az aloldalakhoz.
- `/szolgaltatasok/konyveles`: Dedikált oldal a könyvelési szolgáltatásoknak.
- `/szolgaltatasok/berszamfejtes`: Dedikált oldal a bérszámfejtésnek.
- `/szolgaltatasok/adotanacsadas`: Dedikált oldal az adótanácsadásnak.

## 3. Tartalmi Felépítés (Aloldalak)
Minden aloldal az alábbi modulokat tartalmazza:
- **Szakmai Hero:** Az adott szolgáltatás címe és egy rövid, bizalomépítő alcím.
- **Részletes Ismertető:** Bővebb kifejtés a munkafolyamatról és előnyökről.
- **Célcsoport szekció:** Kiknek szól a szolgáltatás (pl. KKV, egyéni vállalkozó).
- **Konkrét Tevékenységek:** Ikonos vagy listás felsorolás a feladatokról.
- **Helyi Relevancia:** Zalaegerszeg és környéke említése a lokális SEO miatt.
- **Belső navigáció:** Vissza gomb a főoldalra és gyors link a kapcsolatfelvételhez.

## 4. SEO és Technikai Követelmények
- **Metadata API:** Minden oldal saját `title` és `description` taggel rendelkezik.
- **JSON-LD:** A főoldali `AccountingService` séma kiterjesztése az aloldalakon specifikus szolgáltatás típusokkal.
- **Sitemap:** Automatikus frissítés az új útvonalakkal.
- **Navigáció:** A `Header` komponens frissítése egy "Szolgáltatások" legördülő menüvel.
- **Belső linkelés:** A főoldali szolgáltatás-kártyák összekötése az aloldalakkal.

## 5. UI/UX Irányelvek
- Meglévő "Calm Authority" és "Glassmorphism" stílus megtartása.
- Reszponzív felépítés (mobil-első szemlélet).
- Gyors betöltési sebesség (LCP optimalizálás).

## 6. Önmegtekintés (Self-Review)
- **Helyőrzők:** Nincsenek, minden útvonal és modul definiálva van.
- **Konzisztencia:** A stílus és a SEO stratégia összhangban van a korábbi trackekkel.
- **Hatókör:** A feladat világosan körülhatárolt és végrehajtható.
