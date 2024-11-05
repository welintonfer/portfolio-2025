"use client";

import { useState, useEffect, useRef } from "react";
import TemplateMain from "@/components/TemplateMain";
import ContactForm from "@/components/ContactForm";
import CopyRight from "@/components/CopyRight";
import HeaderSubpage from "@/components/HeaderSubpage";
import Image, { StaticImageData } from "next/image";

import europcarCover from "../../assets/video/animated-mockup-i-phone-14-pro.webm";
import eirCover from "../../assets/img/eir/cover-casestudy-eir.png";
import helenCover from "../../assets/img/helen/helen-turkington-cover.png";
import habitusCover from "../../assets/video/habitushealth.webm";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !isDarkMode);
      setIsDarkMode(!isDarkMode);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      setMounted(true);
    }
  }, []);

  const toggleForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  const projects = [
    {
      id: 1,
      href: "/work/eir",
      bgClass: "theme__bg-soap",
      categories: ["Case Study", "UX Design", "UI Design", "Interaction Design", "UX Research", "Information Architecture"],
      media: { type: "image", src: eirCover },
    },
    {
      id: 2,
      href: "/work/habitushealth",
      bgClass: "hh-temp",
      categories: ["Case Study", "UX Design", "UI Design", "Interaction Design", "UX Research", "Information Architecture"],
      media: { type: "video", src: habitusCover },
    },
    {
      id: 3,
      href: "/work/europcar",
      bgClass: "theme__bg-calamansi",
      categories: ["Case Study", "UX Design", "UI Design", "Interaction Design", "UX Research", "Information Architecture", "Service Design"],
      media: { type: "video", src: europcarCover },
    },
    {
      id: 4,
      href: "/work/helenturkington",
      bgClass: "theme__bg-vivid-red-tangelo",
      categories: ["Information Architecture", "UX Design"],
      media: { type: "image", src: helenCover },
    },
  ];

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.categories.includes(activeFilter));

  if (!mounted) return null;

  return (
    <div className="overflow-hidden">
      <HeaderSubpage
        titlePage="Peek into my latest design projects"
        toggleDarkMode={toggleDarkMode}
        isLightMode={!isDarkMode}
        toggleForm={toggleForm}
        descriptionProject=""
      />

      <TemplateMain>
        <section className="flex flex-col gap-4 w-full pb-8 pt-12">
          <div className="max-w-9xl mx-auto">
            <div className="flex flex-row flex-wrap rounded-lg gap-3">
              {[
                "All",
                "Case Study",
                "UI Design",
                "Interaction Design",
                "UX Research",
                "Content Strategy",
                "Information Architecture",
                "UX Design",
                "Service Design",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`hidden lg:inline-flex px-4 py-2 rounded-full border-2 font-semibold shadow-md transition-colors duration-300 ${
                    activeFilter === category
                      ? isDarkMode
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-900 border-white"
                      : isDarkMode
                      ? "bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white"
                      : "bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap project-container md:flex-row justify-between pt-12">
              {filteredProjects.map((project) => (
                <ProjectLink
                  key={project.id}
                  href={project.href}
                  bgClass={project.bgClass}
                  media={project.media}
                />
              ))}
            </div>
          </div>
        </section>

        <div ref={contactFormRef}>
          <ContactForm />
        </div>

        <CopyRight />
      </TemplateMain>
    </div>
  );
}

interface ProjectLinkProps {
  href: string;
  bgClass: string;
  media: { type: string; src: string | StaticImageData };
}

function ProjectLink({ href, bgClass, media }: ProjectLinkProps) {
  return (
    <a
      href={href}
      className="hover:scale-95 transition-transform duration-300 ease-in-out block hoverable"
      style={{ flex: "1 1 calc(50% - 16px)", width: "100%" }}
    >
      <div className={`relative rounded-xl overflow-hidden flex flex-col h-[400px] sm:h-auto justify-between ${bgClass}`}>
        <div className="absolute top-0 left-0 z-0 w-full h-full"></div>
        <div className="z-10 grow relative">
          <div className="h-full">
            <div className="media-container h-full absolute w-full sm:static">
              {media.type === "video" ? (
                <video
                  className="transition-opacity duration-300 opacity-100 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/fallback-poster.png"
                >
                  <source src={media.src as string} type="video/webm" />
                </video>
              ) : (
                <Image
                  src={media.src}
                  alt="Project Media"
                  className="transition-opacity duration-300 opacity-100 h-full w-full object-cover"
                  width={800} // ajuste o tamanho como necessário
                  height={600}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
