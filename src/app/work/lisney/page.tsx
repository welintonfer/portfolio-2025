"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";

import theBrief from "../../../assets/img/lisney/the-brief@2x.png"
import finalDeliverables from "../../../assets/img/lisney/final-deliverables@2x.png"
import customIconography from "../../../assets/img/lisney/custom-iconography@2x.png"
import photographicDirection from "../../../assets/img/lisney/photographic-direction@2x.png"

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Adiciona um estado para verificar se o componente foi montado
  const contactFormRef = useRef<HTMLDivElement>(null);

  // Modo escuro, só no cliente
  const toggleDarkMode = () => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.classList.toggle("dark", !isDarkMode);
      setIsDarkMode(!isDarkMode);
    }
  };

  // Efeito para aplicar o tema escuro ao montar o componente no cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      setMounted(true); // Marca o componente como montado
    }
  }, []);

  // Função para rolar até o formulário
  const toggleForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      <HeaderSubpage 
        titlePage="Project Overview of Lisney Website Redesign"
        descriptionProject="In 2020, Matrix Internet initiated a comprehensive redesign project with Lisney, a name synonymous with luxury and high-calibre property services in Ireland. Our aim was to reflect Lisney’s prestigious status through an elevated, user-centric website that resonates with their target audience while future-proofing their online presence. This large-scale project was crafted to embody Lisney’s values of trustworthiness, expertise, and modernity across every digital touchpoint."
        toggleDarkMode={toggleDarkMode} 
        isLightMode={!isDarkMode} 
        toggleForm={toggleForm} // Passa a função para o header
      />

      <TemplateMain>
        <section className="flex flex-col gap-4 w-full pb-8 pt-12 single-project">
          <article className="w-full sm:w-full md:w-full lg:max-w-5xl xl:max-w-5xl px-4 mx-auto">


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">My Role</h2>
                <p>As the designated UI Designer for this initiative, I was entrusted with key creative responsibilities that shaped the visual and functional essence of the website:</p>
                <div className="list pb-8">
                <ul>
                  <li><p>1. <strong>UI Mockups and Prototypes</strong> I developed high-fidelity mockups that formed the backbone of the website’s aesthetic and functional structure, presenting a seamless user experience that aligns with Lisney’s premium brand identity. By employing a mobile-first approach, each design phase was meticulously planned to ensure optimal navigation and user engagement across devices.</p></li>
                  <li><p>2. <strong>Iconography</strong> To further enhance the brand’s identity, I crafted a unique set of icons exclusively for Lisney. These icons were designed to align with the brand’s distinctive tone, providing intuitive and visually coherent navigation elements that enrich the user journey while reinforcing Lisney’s professional ethos.</p></li>
                  <li><p>3. <strong>Photographic Direction</strong> Leveraging my experience in photography, I directed photoshoots across key Lisney properties and offices. This bespoke imagery was essential in capturing Lisney’s human and professional qualities, imbuing the website with an authentic sense of place and brand personality. Each photograph was curated to resonate with the values Lisney upholds: expertise, trust, and a warm, human touch.</p></li>
                </ul>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">The Brief</h2>
              <p>In collaboration with Lisney’s leadership, Matrix Internet embarked on an in-depth UX and brand strategy phase to shape a digital experience that would distinguish Lisney within the competitive real estate market. The brief highlighted several core objectives:</p>
              <div className="list pb-8">
                <ul>
                  <li><p><strong>A Bold Design Approach</strong> Prioritising simplicity and modernity to distinguish Lisney from competitors.</p></li>
                  <li><p><strong>Client-Focused Navigation</strong> Creating a fluid and intuitive structure that allows users to access property services and market insights effortlessly.</p></li>
                </ul>
              </div>
            </div>

            <Image
                src={theBrief}
                alt={`The Brief`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />



            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">The Design Process</h2>
              <p>
                Matrix Internet adhered to a structured Design Thinking methodology, engaging Lisney’s senior team at every stage. This involved:
              </p>
              <div className="list pb-8">
                <ul>
                  <li><p><strong>UX Workshops and Audits</strong> Conducted detailed workshops with key stakeholders to define the desired user experience and benchmark design preferences.</p></li>
                  <li><p><strong>Wireframing and Content Strategy</strong> Created over 25 wireframes for key landing pages, supplemented by an extensive content strategy tailored to the needs of Lisney’s audience.</p></li>
                  <li><p><strong>Iterative Feedback and Development</strong> Incorporated stakeholder feedback throughout the design and development stages, ensuring every element was aligned with Lisney’s brand vision.</p></li>
                </ul>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Final Deliverables</h2>
              <p><strong>1. UI Mockups and Prototypes</strong> These designs encapsulate the seamless user experience Lisney envisions, with a strategic focus on simplifying property searches and enabling easy access to essential resources. Each mockup was refined based on user testing and Lisney’s unique requirements.</p>
            </div>

            <Image
                src={finalDeliverables}
                alt={`Final Deliverables`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <p><strong>2. Custom Iconography</strong> A suite of bespoke icons was designed specifically for Lisney, enhancing navigation and providing clear visual cues throughout the site. Each icon aligns with the brand’s tone, reinforcing Lisney’s refined yet approachable image.</p>
            </div>

            <Image
                src={customIconography}
                alt={`Custom Iconography`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <p><strong>3. Photographic Direction</strong> High-quality imagery was a pivotal aspect of this project. As the photography director, I ensured each shot conveyed Lisney’s premium standing in the real estate market, from office environments to luxury properties. These visuals play a critical role in connecting Lisney’s brand story to its clients, adding depth to the user experience.</p>
            </div>

            <Image
                src={photographicDirection}
                alt={`Photographic Direction`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Project Outcome</h2>
              <p>The redesigned website for Lisney serves as a sophisticated and functional digital asset that strengthens the brand’s online presence and aligns with its long-established reputation for excellence. The site’s intuitive navigation, custom visuals, and engaging user experience affirm Lisney’s place at the forefront of Ireland’s property market.</p>
            </div>
          </article>
        </section>

        {/* Formulário de Contato */}
        <div ref={contactFormRef}>
          <ContactForm />
        </div>

        <CopyRight />
      </TemplateMain>
    </div>
  );
}


