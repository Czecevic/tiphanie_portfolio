import { Section } from "./Section";

const MODIFICATIONS = [
  "Enlèvement d’éléments non pertinents : le live et les commentaires",
  "Génération de la page selon les parties",
  "Suppression des annonces inutiles comme les jeux similaires",
  "Suppression des visuels (GIFs)",
  "Diminution de la qualité des visuels",
  "Arrêt de l’auto play",
  "Raccourcissement de la page",
  "Création de 4 sections pour diminuer la taille de la page afin de générer moins de chargement directement sur la page",
];

export function SteamModifications() {
  return (
    <Section title="Modifications">
      <ul className="list-disc pl-5 space-y-1">
        {MODIFICATIONS.map((modification) => (
          <li key={modification}>{modification}</li>
        ))}
      </ul>
    </Section>
  );
}
