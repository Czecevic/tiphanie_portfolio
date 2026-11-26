import type { OtherProject, Project } from "@/interfaces";
import { assetPath, numbered, toImages } from "./Helper";

const tf1 = assetPath("TF1");
const nysos = assetPath("Nysos");
const ratp = assetPath("RATP");
const steam = assetPath("steam");
const barquette = assetPath("Barquette");
const greenLab = assetPath("greenLab");

export const listProject: Project[] = [
  {
    id: 0,
    title: "TF1 - Backoffice",
    descTitle:
      "Refondre un outil interne utilisé par différentes typologies d’utilisateurs",
    imgPres: tf1("tf1.png"),
    titleBackoffice: "Backoffice avant la refonte",
    descBackoffice: "Reconstitution du visuel du backoffice avant sa refonte.",
    backoffice: tf1("backoffice.png"),
    desc: "Réaliser la refonte du Backoffice interne de TF1 afin de le rendre plus accessible aux nouveaux utilisateurs.",
    typeProject: "UX / UI / product Owners",
    role: "UX / UI designer",
    objectif:
      "Adapter le backoffice interne aux utilisateurs, le simplifier et le rendre plus accessible aux nouveaux utilisateurs.",
    date: "6 mois - sep 2024 / fev 2025",
    rechercheUtilisateur:
      "J’ai réalisé des personas au total, correspondant aux profils de tous les utilisateurs. À la suite de ces personas, nous avons réalisé des shadowings ainsi que des interviews :",
    suiteRechercheUtilisateur:
      "À la suite de cette recherche, on a pu retravailler les personas et valider ou non nos hypothèses. Les résultats de la recherche utilisateur ont été présentés aux équipes et supérieurs à travers un atelier de restitution.",
    recherche: numbered(tf1, "recherche", 2),
    recherche_2: tf1("recherche_3.png"),
    wireframes: numbered(tf1, "wireframe", 5),
    wireframesDesc:
      "Grâce à la recherche utilisateur et à l’atelier de facilitation, nous avons pu recréer l’écran et proposer des wireframes aux différentes parties prenantes en réalisant des tests d’utilisabilité.",
    wireframesDescSuite:
      "Maquettes et Wireframes réalisés à partir de la bibliothèque Ant Design.",
    UI: toImages([tf1("UI.png")]),
  },
  {
    id: 1,
    title: "Nysos",
    descTitle:
      "Réalisation d’un projet entrepreneurial (mémoire de fin de master) dont nous devions réaliser la solution numérique proposée",
    imgPres: nysos("nysos.png"),
    backoffice: nysos("recherche_1.png"),
    titleBackoffice: "Parcours utilisateur",
    descBackoffice:
      "À partir du persona principal j’ai pu réaliser une user journey map de ce persona en décrivant les différentes étapes de son parcours de la recherche internet jusqu’à la réception du produit.",
    rechercheUtilisateur:
      "J’ai commencé par trouver l’idée puis déterminer si cela pouvait intéresser des personnes en faisant des recherches internet puis un questionnaire sur ma cible envisagée. Les résultats sortant de ces études m’ont permis de dresser deux personas ainsi que de définir la cible principale et de savoir qu’il y avait bel et bien un marché pour ma proposition.",
    desc: "Créer une solution numérique innovante (e-commerce) qui répond à des besoins réels.",
    typeProject: "UX / UI / product Owners",
    role: "Product designer",
    objectif:
      "Créer une solution numérique innovante qui répond à des besoins réels",
    date: "janvier 2024 - août 2025",
    recherche: numbered(nysos, "utilisateur", 2),
    ciblePrincipale:
      "18 – 25 ans, citadines, femmes ; désireuses d’avoir des pièces uniques, attirées par la mode, achetant actuellement principalement en seconde main ou petit créateur, étudiantes ou jeunes diplômées avec forte dépense pour la mode.",
    ciblePrincipaleSuite:
      "Les personnes entre 18 et 25 ans dépensent en moyenne plus pour leur budget mode : 116 €/mois contre 82 €/mois. Ce qui donne environ 1 392 €/an (Republik Retail). Une autre étude évoque que les femmes de 18-25 ans dépensent en moyenne 1 280 €/an (étude de l’application Joko).",
    wireframes: [nysos("wireframe_1.png")],
    wireframesDesc:
      "Le site internet étant un site e-commerce qui a donc pour objectif de vendre des produits mais également de permettre aux personnes de prendre contact avec l’artiste, j’ai décidé de créer une version mobile et desktop. La version mobile est privilégiée et c’est une PWA réalisée sur Shopify.",
    charteGraphiqueTitle: "Charte Graphique",
    CGDesc_1:
      "J’ai d’abord réalisé un moodboard pour avoir une idée de l’esthétique que pourrait arborer mon site internet pour transmettre le côté premium de la marque.",
    CGDesc_2:
      "Ensuite je me suis inspirée des couleurs déjà choisies de mon logo pour réaliser la charte graphique. J’ai décidé de mixer une couleur vive telle que l’orange afin de trancher avec le reste et donner ce côté créatif à mon site internet tout en arborant des couleurs plus neutres.",
    CGDesc_3:
      "J’ai décidé de partir sur la font Inter pour les textes et titres parce qu’elle est open source et accessible. Pour le logo j’ai choisi la font Nori Regular pour un effet calligraphie élégant.",
    CGImage: [nysos("charte_graphique_1.png"), nysos("charte_graphique_3.png")],
    logo: nysos("logo.svg"),
    logoEcrit: nysos("logo_ecrit.png"),
    UI: toImages([nysos("UI_2.png"), nysos("UI_3.png")]),
    TU: toImages(numbered(nysos, "TU", 3)),
    TU_2: toImages(numbered(nysos, "TU", 2, "png", 4)),
  },
  {
    id: 2,
    title: "RATP",
    descTitle:
      "Amélioration de l’expérience utilisateur dans les transports franciliens",
    imgPres: ratp("ratp.png"),
    desc: "Vous êtes chargés d’explorer les transports parisiens en utilisant des méthodes ethnographiques, sociologiques, recherche et d’audit UX. L’objectif principal est d’identifier les problèmes, les besoins et les comportements des utilisateurs, ainsi que de créer des scénarios d’utilisateurs pour améliorer l’expérience globale.",
    typeProject: "UX",
    role: "UX designer",
    objectif:
      "Réaliser une exploration ethnographique avec une approche d’éco-conception.",
    date: "1 mois - nov 2023",
    explication:
      "4 thèmes d’hypothèses : signalisation, accessibilité, circulation et services. Nous avons réalisé 2 personas et 2 user journey maps.",
    explicationIllu: toImages(numbered(ratp, "explication", 2)),
    explicationDesc:
      "Puis nous avons réalisé une recherche utilisateur : nous avons interrogé des personnes via un guide d’entretien via une ressource présente sur DONUT PANIC. Les questions s’appuient sur nos hypothèses. Nous avons ensuite analysé ces entretiens grâce à la méthode de Design Thinking : ROSE - THORN - BUD. Nous avons ensuite regroupé nos verbatims par sujets communs puis nous avons organisé des groupes d’idées en fonction de nos grands thèmes d’hypothèses.",
    explicationDescSuite:
      "Afin de mieux comprendre notre analyse, nous avons étudié les différents biais cognitifs qui peuvent s’appliquer à nos personas ou bien aux personnes interviewées. À travers nos interviews nous avons remarqué une nouvelle catégorie : émotion et nous avons décidé de nous orienter vers cela pour notre solution.",
    userFlow: toImages([ratp("userFlow.png")]),
    reponseWireframes: [
      {
        id: 0,
        imglink: ratp("page_zenway.png"),
        title: "Page d'accueil du Zenway",
      },
      {
        id: 1,
        imglink: ratp("page_trajet.png"),
        title: "Page trajet",
      },
    ],
    reponseWireframeDesc:
      "Nous avons donc décidé de travailler sur l’interface existante des bornes interactives « Zenway » présentes en station. Notre objectif : créer une expérience dont l’utilisateur se souviendra en s’appuyant sur le biais émotionnel. Notre idée est donc la suivante : apporter une réelle dimension zen à ces bornes Zenway et faire vivre une expérience inédite dans les transports tout en nous appuyant sur des règles d’écoconception. Nous avons donc repensé l’interface de ces bornes avec une approche unique, sensorielle et inclusive où la personnalisation et le bien-être se rencontrent pour donner une expérience mémorable à chacun. Pour cela nous avons décidé de rajouter une enceinte directionnelle au-dessus des bornes.",
    UI: toImages([ratp("UI.png")]),
  },
  {
    id: 3,
    title: "Steam",
    descTitle: "Transformer une interface mobile en interface éco-conçue",
    desc: "Après avoir regardé le score d’éco-conception de sites internet, nous avons décidé de partir sur l’un avec un mauvais score afin de le transformer en site davantage respectueux des règles d’éco-conception",
    imgPres: steam("steam.png"),
    typeProject: "UX",
    role: "UX designer",
    objectif:
      "Concevoir une interface éco-conçue à partir d’un site mobile qui ne l’est pas",
    date: "mars 2023",
    methodologieDesc:
      "Nous avons décidé de partir sur Steam, qui a un éco-index de G et un score Green IT de E, ce qui est très faible. Nous avons pris plus précisément la page du jeu « Iratus : Lord of the Dead ». Nous avons ensuite réalisé un atelier H.O.R.S.E. : Hide, Organize, Reduce, Standardize, Eliminate. Réalisation de wireframes sur papier.",
    methodologieImg: toImages(numbered(steam, "metho", 2)),
  },
  {
    id: 4,
    title: "Bienvenue à Barquette",
    desc: "Nous étions chargés de créer un design system qui allait nous aider à réaliser un projet fictif en 5 écrans.",
    descTitle:
      "Création et intégration d’un design système dans une interface mobile",
    moodBoardDesc:
      "Afin de réaliser au mieux ce projet j’ai d’abord réalisé un moodboard sur des ambiances qui m’intéressaient ici les jeux en pixel arts. J’ai décidé de combiner des ambiances pixel art afin de réaliser une application comme un tamagochi.",
    moodBoardImg: toImages([barquette("moodboard.png")]),
    wireframes: [barquette("wireframe.png")],
    wireframesDesc:
      "Création du parcours de création de compte  de la personne lors de sa première arrivée dans le jeu",
    UI: toImages([barquette("UI.png")]),
    charteGraphiqueTitle: "Charte Graphique",
    CGDesc_1:
      "Afin de recréer l’atmosphère Tamagotchi et nostalgique j’ai décidé de partir des éléments de typographie et visuels pixélisé pour rappeler d’anciens jeux. L’ensemble des dessins a été réalisé par moi-même et les couleurs de la charte graphique s’appuie sur les couleurs utilisées dans les illustrations.",
    CGDesc_2:
      "Ainsi, je suis parti sur des couleurs chaleureuses pour transmettre une ambiance joyeuse, positive et calme. De plus les touches de vert contrastes et permet de retranscrire également le coté calme et serein. L’utilisation du bleu et violet n’est présent que dans de rares illustrations et non pour l’interface en lui-même.",
    CGImage_diff: numbered(barquette, "charte_graphique", 3),
    DesignSystemImg: barquette("Design_System.png"),
    DesignSystemDesc: [
      "Dans le design system on retrouve l’ensemble des composants utilisés dans les maquettes. On y retrouve :",
      "le formulaire d’inscription",
      "les différents personnages choisissable",
      "les différentes actions possibles avec le personnage",
      "les différents statues du boutons",
    ],
    imgPres: barquette("barquette.png"),
    typeProject: "UI",
    role: "UI designer",
    objectif:
      "Réaliser un design système de l’application de notre choix (réelle ou fictive)",
    date: "2 semaines - mai 2025",
  },
  {
    id: 5,
    title: "The GreenLab",
    descTitle:
      "Refonte d’un site internet vitrine afin de le rendre plus agréable à lire et attractif",
    desc: "Afin d’augmenter le trafic du site nous avons décider de procéder à une refonte ainsi que de retravailler le SEO. Notre objectif était également d’avoir un taux de conversion plus élevé grâce à un parcours plus fluide.",
    AuditTitle: "Audit",
    AuditDesc: [
      "Réalisation d’une audit du site internet afin de déterminer les points à améliorer et à prendre en compte pour la refonte du site internet : un problème de hiérarchisation des informations, beaucoup de textes non attractifs, incohérences entre les différentes pages notamment pour les boutons.",
      "Le site internet étant réalisé sur Wix, nous avions des informations sur les performances du sites internet notamment pour le SEO, ce qui a été une aide pour déterminer ce qu’il fallait améliorer mais également pour définir des KPI avec des outils de tracking directement intégrés.",
    ],
    SAM_title: "Site Avant modifications",
    SAM: "Présentation sommaire de quelques pages essentiels du site avant la refonte. Il y avait beaucoup de textes et d’images qui allongé beaucoup les pages surtout la pages d’accueil et donc presque personnes n’allait jusqu’au bout et le taux de rebond était très élevé.",
    SAM_img: toImages(numbered(greenLab, "SAM", 4)),
    moodBoardDesc: [
      "J’ai réalisé 4 moodboard afin de définir quelle allait être l’ambiance ainsi que la nouvelle graphique du site internet pour mieux correspondre à notre cible : les personnes qui organisent les teams buildings (principalement des femmes).",
      "Le premier moodboard a été celui retenue ce qui a permis de créer la charte graphique.",
      "Nous sommes donc parti sur des teintes roses et oranges qui contrastent bien avec le vert (surtout foncé) afin de faire un rappel à l’entête de la page d’accueil sur toutes les pages. Nous avons décider de prendre la font Poppin pour les textes et Helvetica pour les titres parce que ce sont des polices douces (surtout pour Poppin) qui tranchent bien entre elles.",
    ],
    UI: toImages(numbered(greenLab, "UI", 4)),
    imgPres: greenLab("greenLab.png"),
    typeProject: "UI",
    role: "UI designer",
    objectif:
      "Rendre plus attractif le site et convertir les visiteurs en clients tout en appliquant une nouvelle charte graphique",
    date: "sept 2023 - août 2024",
  },
];

export const otherProject: OtherProject[] = [
  {
    id: 0,
    title: "Photos",
    desc: "Je souhaite vous présenter mes projets photos : argentique (portrait et paysage) et numérique avec retouches.",
  },
  {
    id: 1,
    title: "Dessins et peintures",
    desc: "Je souhaite vous montrer mon côté créatif à travers des dessins et peintures sur toile et vêtements.",
  },
  {
    id: 2,
    title: "Marque de vêtements",
    desc: "Nysos est une marque de custom de vêtements à la peinture que j’ai pu créer pour mon mémoire de Master.",
  },
];
