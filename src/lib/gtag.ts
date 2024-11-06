// src/lib/gtag.ts

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

// Função de visualização de página
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Interface para os eventos do Google Analytics
interface GtagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

// Função para eventos personalizados
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
