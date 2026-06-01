# Technológiai Stack (Tech Stack)

A projekt egy gyors, SEO-barát és modern társweboldal, amelyet a Vercel-en fogunk publikálni. Ennek megfelelően a következő modern webes technológiákat javasoljuk:

## 1. Frontend keretrendszer
- **Next.js (App Router):** Erőteljes React keretrendszer, amely kiváló SEO-t, szerveroldali renderelést (SSR) és statikus generálást (SSG) biztosít, és tökéletesen integrálódik a Vercellel.
- **TypeScript:** A JavaScript szigorúan típusos változata, amely robusztusabb, hibamentes kódírást tesz lehetővé.

## 2. Megjelenés és UI (Stílus)
- **Tailwind CSS:** Utility-first CSS keretrendszer, amellyel gyorsan és egységesen lehet modern, reszponzív felületeket építeni.
- **Shadcn UI (opcionális):** Hozzáférhető és testreszabható React komponensek a gyorsabb, minőségi UI építéshez.

## 3. Backend és Adatkezelés
- **Next.js Server Actions / API Routes:** A kapcsolatfelvételi űrlapok és ajánlatkérések feldolgozásához (nincs szükség különálló backend szerverre).
- **Email integráció (pl. Resend vagy Nodemailer):** Az űrlapokról érkező üzenetek e-mailbe történő biztonságos továbbítására.

## 4. Kódminőség és Eszközök
- **ESLint & Prettier:** A kód minőségének és formátumának automatikus ellenőrzésére.
- **Git / GitHub:** Verziókövetés.

## 5. Hosting és Deployment
- **Vercel:** Automatikus CI/CD folyamat a GitHub tárolóból, gyors és biztonságos működés.