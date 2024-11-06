// pages/_app.tsx

import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { pageview } from "@/lib/gtag"; // Importa a função pageview
import "../app/globals.css"; // Importa estilos globais, se aplicável

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url); // Chama o pageview para cada mudança de rota
    };

    // Adiciona o evento de mudança de rota
    router.events.on("routeChangeComplete", handleRouteChange);

    // Remove o evento na desmontagem do componente
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
