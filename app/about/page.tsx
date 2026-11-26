import Link from "next/link";
import Image from "next/image";
import { EmploiCard } from "./components/EmploiCard";
import { DiplomeTimeline } from "./components/DiplomeTimeline";
import { FooterBar } from "../components/FooterBar";
import { LIST_ABOUT, EMPLOIS, ETUDES, OUTILS } from "@/public/about/data-about";

const TYPES_EMPLOI = ["Stage", "Alternance", "Associatif"] as const;

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-8 space-y-12">
      <header className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-heading">
            Product Designer
          </h1>
          <p className="text-base md:text-xl text-[#7e1114] leading-relaxed">
            Diplômée d’un Master en tant qu’Expert en Stratégie Digitale
            (spécialité Lead UX / Product Designer), je recherche ma prochaine
            opportunité professionnelle pour exprimer ma créativité et concevoir
            des expériences utilisateurs d’exception.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-72 sm:h-80 rounded-lg overflow-hidden shrink-0">
          <Image
            src="/data/img/Nysos/app_Nysos/tiph.jpg"
            alt="Portrait de la Product Designer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </header>

      <section aria-label="Navigation rapide" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LIST_ABOUT.map(({ id, title, desc }) => (
          <article
            key={id}
            className="p-5 rounded-xl flex flex-col justify-between gap-4"
          >
            <div>
              <h2 className="text-xl font-heading font-bold mb-2">{title}</h2>
              <p className="text-sm leading-relaxed">{desc}</p>
            </div>
            <a
              href={`#${title.toLowerCase()}`}
              className="text-[#7e1114] hover:underline text-base font-semibold w-fit"
            >
              Voir plus
            </a>
          </article>
        ))}
      </section>

      <section aria-label="Outils maîtrisés" className="flex flex-row flex-wrap justify-between items-center gap-4">
        {OUTILS.map(({ id, img }) => (
          <div key={id} className="relative w-20 h-20 p-2 rounded-xl">
            <Image
              src={img}
              alt={`Outil ${id}`}
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>
        ))}
      </section>

      <section id="emplois" className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <h2 className="uppercase text-4xl font-heading md:w-1/4 shrink-0">
          Emplois
        </h2>
        <div className="flex-1 space-y-6">
          {TYPES_EMPLOI.map((type) => (
            <EmploiCard key={type} emploi={EMPLOIS} type={type} />
          ))}
        </div>
      </section>

      <section id="diplomes" className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <h2 className="uppercase text-4xl font-heading md:w-1/4 shrink-0">
          Diplômes
        </h2>
        <div className="flex-1">
          <DiplomeTimeline etudes={ETUDES} />
        </div>
      </section>

      <section className="bg-[#7e1114] text-white p-8 rounded-xl flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Contactez-moi pour vos projets
        </h2>
        <p className="text-lg font-normal tracking-wide max-w-xl">
          Création de tous types de produits avec les méthodes UX/UI les plus
          adaptées.
        </p>
        <Link
          href="/contact"
          className="border-2 border-white px-6 py-2.5 rounded-lg font-medium hover:bg-white hover:text-[#7e1114] transition-colors text-sm"
        >
          Me contacter
        </Link>
      </section>

      <FooterBar />
    </div>
  );
}