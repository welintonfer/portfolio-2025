
"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";

import caroPresentation from "../../../assets/img/caro/caro-presentation@2x.png"
import navigation from "../../../assets/img/caro/navigation@2x.png"
import colours from "../../../assets/img/caro/colours.png"
import typography from "../../../assets/img/caro/typography.png"
import photographyStyle from "../../../assets/img/caro/photography-style.png"
import homepage from "../../../assets/img/caro/homepage.png"
import trainingEvents from "../../../assets/img/caro/Training-Events.png"
import aboutUs from "../../../assets/img/caro/about-us.png"
import contactUs from "../../../assets/img/caro/contact-us.png"





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
        titlePage="CARO - Climate Action Regional Offices Website"
        descriptionProject="🎯 Objective: To design a modern and functional interface for the CARO website, focusing on accessibility, usability, and raising awareness about climate change a pressing issue of our time. The goal was not only to create a visually appealing design but also to effectively convey the critical importance of climate action."
        toggleDarkMode={toggleDarkMode} 
        isLightMode={!isDarkMode} 
        toggleForm={toggleForm} // Passa a função para o header
      />

      <TemplateMain>
        <section className="flex flex-col gap-4 w-full pb-8 pt-12 single-project">
          <article className="w-full sm:w-full md:w-full lg:max-w-5xl xl:max-w-5xl px-4 mx-auto">


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Project Introduction 🖋️</h2>
              <h3 className="h4 h4__400 pb-6">Overview:</h3>
              <p>The project focused on developing a modern, functional interface for the CARO website, with a strong emphasis on accessibility and usability, guided by Jakob Nielsen's principles. Beyond aesthetics, the design aimed to foster awareness about climate change, encouraging users to engage with this critical issue.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h5 className="h5 h5__400 pb-6"><em><strong>Role</strong>: UI Designer</em></h5>
              <h3 className="h4 h4__400 pb-6">Notable Outcomes:</h3>
              <p>While the project was not selected, it was praised for its innovative, simple design and its alignment with CARO’s brand identity. Due to budget constraints and a short timeline, the client opted for another submission. However, the project was recognized as a successful example of premium design work within the context of climate action.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Challenges and Objectives 🎯</h2>
              <p><strong>Key Challenges:</strong></p>
              <div className="list pb-8">
                <ul>
                  <li><p><strong>1</strong> - Designing an interface accessible and compliant with WCAG standards.</p></li>
                  <li><p><strong>2</strong> - Selecting imagery that matched the theme of climate action while aligning with CARO’s branding.</p></li>
                  <li><p><strong>3</strong> - Conducting in-depth research on the current climate scenario to ensure an authentic representation that captivates users.</p></li>
                </ul>
              </div>
            </div>

            <Image
                src={caroPresentation}
                alt={`CARO Presentation`}
                className="w-full h-auto max-w-full rounded__16 my-12"
            />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <p><strong>Primary Objectives:</strong></p>
              <p><strong>1</strong> - Develop an intuitive navigation system.</p>
              <Image
                src={navigation}
                alt={`CARO Navigation`}
                className="w-full h-auto max-w-full  my-12"
              />   
             </div>


            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Design Process 🛠️</h2>
              <p><em><strong>Research:</strong></em> <br />
                The project adhered to Jakob Nielsen's 10 Usability Heuristics to create a seamless user experience:
              </p>
              <div className="list pb-8">
                <ul>
                  <li><p><strong>1</strong> - Visibility of System Status.</p></li>
                  <li><p><strong>2</strong> - Match Between the System and the Real World.</p></li>
                  <li><p><strong>3</strong> - User Control and Freedom.</p></li>
                  <li><p><strong>4</strong> - Consistency and Standards.</p></li>
                  <li><p><strong>5</strong> - Error Prevention.</p></li>
                  <li><p><strong>6</strong> - Recognition Rather Than Recall.</p></li>
                  <li><p><strong>7</strong> - Flexibility and Efficiency of Use.</p></li>
                  <li><p><strong>8</strong> - Aesthetic and Minimalist Design.</p></li>
                  <li><p><strong>9</strong> - Help Users Recognize, Diagnose, and Recover from Errors.</p></li>
                  <li><p><strong>10</strong> - Help and Documentation.</p></li>
                  
                </ul>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Visual Design:</h2>
              <p><strong>Color Palette: </strong>Leveraged CARO’s branding, focusing on blue tones and neutrals for a clean, professional look.</p>
              <Image
                src={colours}
                alt={`CARO’s brand identity guidelines`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              <p><strong>Typography: </strong>Employed Source Sans Pro for clarity and accessibility.</p>
              <Image
                src={typography}
                alt={`Typography`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              <p><strong>Graphic Elements: </strong>Incorporated minimalist elements to maintain focus on content and climate-related messaging.</p>
              <Image
                src={photographyStyle}
                alt={`Photography Approach for Authenticity`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Visual Presentation 🎨</h2>
              <p><em><strong>Screens Developed:</strong></em> 
              </p>
            </div>
            <p><strong>Homepage: </strong></p>
              <Image
                src={homepage}
                alt={`CARO’s Homepage`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              <p><strong>Training-Events: </strong></p>
              <Image
                src={trainingEvents}
                alt={`Training & Events`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              <p><strong>About us page: </strong></p>
              <Image
                src={aboutUs}
                alt={`CARO’s About us page`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />
              <p><strong>Contact us page: </strong></p>
              <Image
                src={contactUs}
                alt={`CARO’s Contact us page`}
                className="w-full h-auto max-w-full rounded__16 my-12"
              />

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Lessons Learned and Impact 📘</h2>
              <p><em>This project underscored the importance of aligning client expectations with modern usability and aesthetic principles. The focus on climate issues also emphasized the role of design in fostering awareness and action on critical global challenges.</em> 
              </p>
              
              <p><strong>Key Takeaways:</strong></p>

              <div className="list pb-8">
                <ul>
                  <li>
                  <p>Thorough research can drive authentic and impactful designs.</p>
                  
                  </li>
                  <li>
                    <p>Effective communication of an important topic (climate change) can enhance user engagement.</p>
                    
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* text here */}
              <h2 className="h3 h3__400 pb-6">Visual Considerations</h2>
              <p><em>This project underscored the importance of aligning client expectations with modern usability and aesthetic principles. The focus on climate issues also emphasized the role of design in fostering awareness and action on critical global challenges.</em> 
              </p>
              <div className="list pb-8">
                <ul>
                  <li>
                  <p><strong>Realistic Mockups:</strong> Use Figma to simulate final designs in a desktop setting.</p>
                  </li>
                  <li>
                    <p><strong>Presentation Style:</strong> Keep layouts clean and consistent with the project’s aesthetic.</p>
                  </li>
                </ul>
              </div>
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


