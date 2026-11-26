import Image from "next/image";
import type { Project } from "@/interfaces";
import { Section } from "./Section";
import { SteamAvant } from "./sous-composant/SteamAvant";
import { SteamApres } from "./sous-composant/SteamApres";
import { MVHomePage } from "./MVHomePage";
import { MVArticle } from "./MVArticle";
import { MVVetements } from "./MVVetements";

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/97ZTuyvZXPs7PCOtZfvfw3/Portfolio?page-id=1%3A4&node-id=652-12733";

type UISectionProps = {
  project: Project;
};

export function UISection({ project }: UISectionProps) {
  const { UI, title } = project;
  if (!UI) return null;

  return (
    <Section title="UI">
      <div className="w-full mx-auto place-items-center">
        {title === "Steam" && (
          <div className="flex gap-2 flex-wrap">
            <SteamAvant />
            <SteamApres />
          </div>
        )}

        {title === "Nysos" && (
          <>
            <div className="flex flex-col md:flex-row gap-5 items-center w-full">
              <MVHomePage />
              <MVArticle />
              <MVVetements />
            </div>
            <div className="flex flex-wrap flex-col md:flex-row gap-5 mt-5 justify-center">
              {UI.map(({ id, imglink }) => (
                <div
                  key={id}
                  className="relative border-2 border-[#7E1114] rounded text-black h-137 flex flex-col justify-between overflow-x-auto md:w-[48%] w-full"
                >
                  <Image
                    src={imglink}
                    alt={`Maquette UI ${id + 1}`}
                    width={2000}
                    height={2000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {title !== "The GreenLab" && (
          <Image
            src={UI[0].imglink}
            alt={`Maquette UI ${UI[0].id + 1}`}
            width={2000}
            height={2000}
            className="w-4/5 h-auto object-contain border border-[#7E1114]"
          />
        )}

        {title == "The GreenLab" && (
          <div className="flex w-full">
            {project.UI?.map(({ id, imglink }) => {
              return (
                <Image
                  key={id}
                  src={imglink}
                  alt={`Maquette UI ${id + 1}`}
                  width={2000}
                  height={2000}
                  className="w-full h-auto sm:h-full m-5 border border-[#7E1114] sm:w-auto min-w-0 sm:shrink object-contain object-top rounded"
                />
              );
            })}
          </div>
        )}
      </div>

      <h3 className="text-lg md:text-xl font-body text-center mt-6">
        Version retenue
      </h3>
      <a
        href={FIGMA_PROTOTYPE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#7e1114] hover:underline font-medium inline-block mt-2 w-full text-center text-sm md:text-base"
      >
        Lien prototype Figma
      </a>
    </Section>
  );
}
