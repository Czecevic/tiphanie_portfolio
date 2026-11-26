import Image from "next/image";
import { notFound } from "next/navigation";

import { listProject } from "@/public/data/data";
import type { PageProps } from "@/interfaces";

import { CharteGraphique } from "./components/CharteGraphique";
import { ImgPres } from "./components/ImgPres";
import { ProjectInfo } from "./components/ProjectInfo";
import { Section } from "./components/Section";
import { SimilarProjects } from "./components/SimiliarProject";
import { SteamModifications } from "./components/Steammodifications";
import { UISection } from "./components/UIsection";
import { VisiteTU } from "./components/VisiteTU";
import { Wireframes } from "./components/Wireframe";
import WireframeMobile from "./components/WireFrameMobile";
import { DesignSystem } from "./components/DesignSystem";

const SIMILAR_PROJECTS_COUNT = 2;

export default async function ProjectDetail({ params }: PageProps) {
  const { projectDetail } = await params;

  const project = listProject.find((p) => p.id === Number(projectDetail));
  if (!project) notFound();

  const projectInfo = [
    { id: 0, title: "Rôle", value: project.role },
    { id: 1, title: "Objectif du Projet", value: project.objectif },
    { id: 2, title: "Maquettes", value: project.typeProject },
    { id: 3, title: "Date", value: project.date },
  ];
  const similarProjects = listProject
    .filter((p) => p.id !== project.id)
    .slice(0, SIMILAR_PROJECTS_COUNT);

  return (
    <main className="flex flex-col items-center p-4 md:p-6 max-w-6xl mx-auto overflow-x-hidden w-full">
      {/* Présentation */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full items-center md:items-start">
        {project.imgPres && (
          <ImgPres imgPres={project.imgPres} title={project.title} />
        )}
        <ProjectInfo title={project.title} projectInfo={projectInfo} />
      </div>

      <Divider />

      {project.desc && (
        <section className="w-full text-center">
          <h2 className="text-xl md:text-2xl font-heading my-4">
            {project.descTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base px-2">
            {project.desc}
          </p>
        </section>
      )}

      {/* Explications (RATP) */}
      {project.explication && (
        <Section title="Explications">
          <p className="mb-4">{project.explication}</p>
          <div className="flex flex-row gap-5 p-3">
            {project.explicationIllu?.map(({ imglink, id }) => (
              <div key={id} className="w-full">
                <Image
                  src={imglink}
                  alt={`Illustration ${id + 1}`}
                  width={2000}
                  height={2000}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="py-3">{project.explicationDesc}</p>
          <p>{project.explicationDescSuite}</p>
          {project.userFlow?.[0] && (
            <Image
              src={project.userFlow[0].imglink}
              alt="User flow"
              width={2000}
              height={2000}
              className="object-contain"
            />
          )}
        </Section>
      )}
      {project.reponseWireframes && (
        <Section title="Réponse via des wireframes">
          <p>{project.reponseWireframeDesc}</p>
          <div className="flex flex-row gap-5 p-3">
            {project.reponseWireframes.map(({ imglink, title, id }) => (
              <div key={id} className="w-full">
                <Image
                  src={imglink}
                  alt={title}
                  width={2000}
                  height={2000}
                  className="object-contain"
                />
                <h3 className="font-bold text-center">{title}</h3>
              </div>
            ))}
          </div>
          {project.prototypeUrl && (
            <div className="text-center">
              <h3 className="font-bold uppercase font-heading">Parcours</h3>
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Lien prototype
              </a>
            </div>
          )}
        </Section>
      )}

      {project.recherche && project.recherche.length > 0 && (
        <Section title="Recherche Utilisateur">
          <p className="mb-4 text-base md:text-lg">
            {project.rechercheUtilisateur}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {project.recherche.map((img, index) => (
              <div
                key={img}
                className="w-full relative aspect-video rounded overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Recherche utilisateur ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {project.suiteRechercheUtilisateur && (
            <p className="my-4 text-sm md:text-base">
              {project.suiteRechercheUtilisateur}
            </p>
          )}
        </Section>
      )}

      {project.ciblePrincipale && (
        <Section title="Cible Principale">
          <p className="mb-4 text-base md:text-lg">{project.ciblePrincipale}</p>
          {project.ciblePrincipaleSuite && (
            <p className="mb-4 text-base md:text-lg">
              {project.ciblePrincipaleSuite}
            </p>
          )}
        </Section>
      )}

      {project.recherche_2 && (
        <Section>
          {project.recherche2Desc && (
            <p className="my-4 text-sm md:text-base">
              {project.recherche2Desc}
            </p>
          )}
          <div className="w-full md:w-2/3 relative aspect-video mx-auto">
            <Image
              src={project.recherche_2}
              alt="Atelier de tri de cartes"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain"
            />
          </div>
        </Section>
      )}

      {project.backoffice && (
        <Section title={project.titleBackoffice || "Backoffice"}>
          <p className="text-left w-full mb-4 text-sm md:text-base">
            {project.descBackoffice}
          </p>
          <div className="w-full md:w-2/3 relative aspect-video mx-auto">
            <Image
              src={project.backoffice}
              alt={project.titleBackoffice || "Backoffice"}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain"
            />
          </div>
        </Section>
      )}
      {project.methodologieImg && (
        <Section title="Méthodologie">
          <p>{project.methodologieDesc}</p>
          <div className="flex items-end">
            {project.methodologieImg.map(({ imglink, id }) => (
              <Image
                key={id}
                src={imglink}
                alt={`Méthodologie ${id + 1}`}
                width={2000}
                height={2000}
                loading="eager"
                className="w-1/2 object-contain p-5"
              />
            ))}
          </div>
        </Section>
      )}

      {project.moodBoardImg && (
        <Section title="MoodBoard">
          <p>{project.moodBoardDesc}</p>
          <div className="flex items-end">
            {project.moodBoardImg.map(({ id, imglink }) => {
              return (
                <Image
                  key={id}
                  src={imglink}
                  alt={`moodboard`}
                  width={2000}
                  height={2000}
                  loading="eager"
                  className="w-full object-contain p-5"
                />
              );
            })}
          </div>
        </Section>
      )}

      {project.title === "Steam" && <SteamModifications />}

      {project.wireframes && (
        <Wireframes
          wireframes={project.wireframes}
          wireframesDesc={project.wireframesDesc}
          wireframesDescSuite={project.wireframesDescSuite}
          title={project.title}
        >
          {project.title === "Nysos" && <WireframeMobile />}
        </Wireframes>
      )}

      {project.charteGraphiqueTitle && (
        <CharteGraphique
          title={project.charteGraphiqueTitle}
          desc_1={project.CGDesc_1}
          desc_2={project.CGDesc_2}
          desc_3={project.CGDesc_3}
          imgCG={project.CGImage?.[0]}
          imgCG_2={project.CGImage?.[1]}
          imgCG_diff={project.CGImage_diff}
          logo={project.logo}
          logoEcrit={project.logoEcrit}
        />
      )}
      {project.DesignSystemDesc && project.DesignSystemImg && (
        <DesignSystem
          desc={project.DesignSystemDesc}
          img={project.DesignSystemImg}
        />
      )}

      {project.AuditTitle && (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading mb-3 uppercase">
            {project.AuditTitle}
          </h1>
          <p>{project.AuditDesc?.[0]}</p>
          <p>{project.AuditDesc?.[1]}</p>
        </div>
      )}

      {project.SAM && (
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading mb-3 uppercase">
            {project.SAM_title}
          </h1>
          <p>{project.SAM}</p>
          <div className="flex">
            {project.SAM_img?.map(({ id, imglink }) => {
              return (
                <Image
                  key={id}
                  src={imglink}
                  alt={`SAM`}
                  width={2000}
                  height={2000}
                  className="w-full h-auto sm:h-full m-5 border border-[#7E1114] sm:w-auto min-w-0 sm:shrink object-contain object-top rounded"
                />
              );
            })}
          </div>
        </div>
      )}

      {(project.UI || project.title === "Steam") && <UISection project={project} />}

      {project.TU && <VisiteTU TU={project.TU} TU_2={project.TU_2} />}

      {!project.hideSimilarProjects && (
        <>
          <Divider />
          <SimilarProjects Projects={similarProjects} />
        </>
      )}
    </main>
  );
}

function Divider() {
  return <hr className="w-full my-6 md:my-8 border-gray-200" />;
}
