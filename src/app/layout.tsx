// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
// import Script from "next/script"; // Importa o Script para carregar scripts externos

// // Fonte personalizada
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadados da página
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// // ID de rastreamento do Google Analytics
// const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Verifica e insere o script do Google Analytics */}
//         {GA_TRACKING_ID && (
//           <>
//             <Script
//               src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//               strategy="afterInteractive"
//             />
//             <Script id="google-analytics" strategy="afterInteractive">
//               {`
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${GA_TRACKING_ID}', {
//                   page_path: window.location.pathname,
//                 });
//               `}
//             </Script>
//           </>
//         )}
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {/* Renderiza o cursor animado apenas no client-side */}
//         <ClientAnimatedCursor />
//         {children}
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
// app/layout.tsx

// pages/_app.tsx

// Adiciona a diretiva "use client" para tornar este arquivo um Client Component
"use client";

import "./globals.css"; // Mantém o CSS global
import type { Metadata } from "next";
import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Substitui useRouter por usePathname
import { pageview } from "@/lib/gtag";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// Remova a exportação direta de metadata, pois Client Components não podem exportá-lo
// Mova os metadados para uso no layout, sem exportá-los diretamente
const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Obtém o caminho atual da URL

  useEffect(() => {
    if (pathname) {
      pageview(pathname); // Registra a visualização de página para o Google Analytics
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        {/* Script do Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased">
        <ClientAnimatedCursor />
        {children}
      </body>
    </html>
  );
}
