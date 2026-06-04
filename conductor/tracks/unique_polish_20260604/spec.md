# Specification: Egyedi Karakter és Prémium Polír

## 1. Célkitűzés
A weboldal vizuális és funkcionális szintjének emelése, hogy kiemelkedjen a tömegkönyvelői oldalaktól. A cél egy prémium, "nyugodt erőt" sugárzó digitális élmény, amely ötvözi a klasszikus szakértelmet a modern technológiával.

## 2. Javasolt Fejlesztések

### A. Vizuális Modernizáció (Bento Grid Layout)
- A jelenlegi 3 kártyás szolgáltatás szekció lecserélése egy aszimmetrikus, modern "Bento Grid" elrendezésre.
- Különböző méretű kártyák, amelyek vizuális hierarchiát teremtenek.

### B. Személyes Hitelesség (Digitális Aláírás & Személyes üzenet)
- Pohánka Józsefné (Piroska) bemutatkozó szekciójához egy animált, SVG digitális aláírás hozzáadása.
- Egy "Szakmai hitvallás" blokk, amely egyedibbé teszi a szövegezést.

### C. Interaktív Szolgáltatásválasztó (Wizard)
- Egy "Melyik csomagra van szükségem?" interaktív modul. 
- Egyszerű kérdések (Cégforma, Munkavállalók száma, ÁFA kör), aminek a végén a rendszer javaslatot tesz a szolgáltatásra.

### D. Mikro-interakciók és Finomhangolás
- Egyedi, finom "lebegő" elemek az üres területeken.
- Selymesen puha görgetési animációk (Framer Motion).
- Refinált sötét mód (Dark Mode) támogatás és váltó.

## 3. Technikai Megvalósítás
- **Framer Motion:** Komplexebb sorrendi (staggered) animációk.
- **Lucide Icons:** Ikonkészlet konzisztens használata.
- **Custom SVG:** Az aláíráshoz és dekorációs elemekhez.
- **React State:** A választó modul logikájához.

## 4. Sikerkritériumok
- Lighthouse "Performance" és "Accessibility" mutatók 95+ felett maradnak.
- Az oldal egyediségi faktora érezhetően nő (nem "még egy könyvelő oldal" érzet).
- A konverziós útvonal (ajánlatkérés) vonzóbbá válik.
