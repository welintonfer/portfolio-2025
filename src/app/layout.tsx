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

import "./globals.css"; // Certifique-se de que este caminho está correto e o arquivo existe
import type { Metadata } from "next";
import ClientAnimatedCursor from "@/components/ClientAnimatedCursor";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Inclua o script do Google Analytics */}
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
      <body className="antialiased"> {/* Adicione aqui a classe desejada */}
        <ClientAnimatedCursor />
        {children}
      </body>
    </html>
  );
}
