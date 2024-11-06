// types.d.ts

// Declaração para arquivos de vídeo .mp4 e .webm
declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

// Declaração para arquivos SVG
declare module "*.svg" {
  const content: string;
  export default content;
}

// Declarações para imagens estáticas, usando o tipo StaticImageData do Next.js
declare module "*.png" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: StaticImageData;
  export default value;
}

declare module "*.gif" {
  const value: StaticImageData;
  export default value;
}

declare module "*.webp" {
  const value: StaticImageData;
  export default value;
}

// Declaração do tipo StaticImageData para suportar importações de imagens estáticas
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

// Declaração global para gtag no window
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
