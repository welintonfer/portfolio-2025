  import Link from "next/link";
  import europcarCover from "../assets/video/animated-mockup-i-phone-14-pro.webm";
  import eirCover from "../assets/img/eir/cover-casestudy-eir.png";
  import helenCover from "../assets/img/helen/helen-turkington-cover.png";
  import habitusCover from "../assets/video/habitushealth.webm";

  interface TemplateCaseStudyProps {
    isLightMode: boolean;
  }

  export default function TemplateCaseStudy({ isLightMode }: TemplateCaseStudyProps) {
    return (
      <section className="flex flex-col gap-4 w-full pb-8">
        <div className="max-w-9xl mx-auto">
          <h3 className="richtext h1__500 h3 inline-block text-pretty py-8">
            Latest projects
          </h3>

          {/* Container dos Projetos */}
          <div className="flex flex-wrap project-container md:flex-row justify-between">
            <ProjectLink
              href="/work/eir"
              bgClass="theme__bg-soap hoverable"
              mediaType="image"
              mediaSrc={eirCover.src}
              poster="https://cdn.shopify.com/b/shopify-brochure2-assets/5da0487c841eaac5914a2c5ffbe47302.png"
            />
            <ProjectLink
              href="/work/habitushealth"
              bgClass="hh-temp hoverable"
              mediaType="video"
              mediaSrc={habitusCover}
              poster="https://cdn.shopify.com/b/shopify-brochure2-assets/5da0487c841eaac5914a2c5ffbe47302.png"
            />
            <ProjectLink
              href="/work/europcar"
              bgClass="theme__bg-calamansi hoverable"
              mediaType="video"
              mediaSrc={europcarCover}
              poster="https://cdn.shopify.com/b/shopify-brochure2-assets/5da0487c841eaac5914a2c5ffbe47302.png"
            />
            <ProjectLink
              href="/work/helenturkington"
              bgClass="theme__bg-vivid-red-tangelo hoverable"
              mediaType="image"
              mediaSrc={helenCover.src}
              poster="https://cdn.shopify.com/b/shopify-brochure2-assets/5da0487c841eaac5914a2c5ffbe47302.png"
            />
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            {isLightMode ? (
              <Link
                href="/work"
                className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-950 hover:bg-slate-100 font-semibold hoverable"
              >
                View Projects
              </Link>
            ) : (
              <Link
                href="/work"
                className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-950 text-white hover:bg-gray-800 font-semibold hoverable"
              >
                View Projects
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Componente de Projeto Individual
  interface ProjectLinkProps {
    href: string;
    bgClass: string;
    mediaType: "video" | "image";
    mediaSrc: string;
    poster?: string; // opcional para vídeos
  }

  function ProjectLink({ href, bgClass, mediaType, mediaSrc, poster }: ProjectLinkProps) {
    return (
      <a
        href={href}
        className="hover:scale-95 transition-transform duration-300 ease-in-out block hoverable"
        style={{
          flex: "1 1 calc(50% - 16px)",
          width: "100%",
        }}
      >
        <div
          className={`relative rounded-xl overflow-hidden flex flex-col h-[400px] sm:h-auto justify-between border-t border-hairline-green shadow-card bg-deep-green ${bgClass}`}
        >
          <div className="absolute top-0 left-0 z-0 glow-0 w-full h-full bg-deep-green"></div>
          <div className="z-10 grow relative">
            <div className="h-full">
              <div className="relative h-full">
                <div className="media-container h-full absolute w-full sm:static">
                  {mediaType === "video" ? (
                    <video
                      className="transition-opacity ease-out-cubic duration-300 opacity-100 h-full mx-auto sm:h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster={poster}
                    >
                      <source src={mediaSrc} type="video/webm" />
                      <p>Your browser does not support the video tag.</p>
                    </video>
                  ) : (
                    <img
                      src={mediaSrc}
                      alt="Project Media"
                      className="transition-opacity ease-out-cubic duration-300 opacity-100 h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
