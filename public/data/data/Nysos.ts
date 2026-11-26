import type {
  FooterCategory,
  IllustrationItem,
  ItemProduct,
} from "@/interfaces";
import tshirtLogo from "@/public/data/img/Nysos/app_Nysos/t-shirt_blanc.jpg";
import sopranos from "@/public/data/img/Nysos/app_Nysos/t-shirt_1.jpg";
import vesteVerte from "@/public/data/img/Nysos/app_Nysos/veste_verte.jpg";
import pantalonGhibli from "@/public/data/img/Nysos/app_Nysos/pantalon_dragon.jpg";
import veste from "@/public/data/img/Nysos/app_Nysos/veste.jpg";
import superNana from "@/public/data/img/Nysos/app_Nysos/polos_nana.jpg";
import tshirtFace from "@/public/data/img/Nysos/app_Nysos/t-shirt_face.png";
import tshirtDos from "@/public/data/img/Nysos/app_Nysos/t-shirt_dos.png";
import tshirtArriere from "@/public/data/img/Nysos/app_Nysos/t-shirt_arriere.png";
import tshirtAvant from "@/public/data/img/Nysos/app_Nysos/t-shirt_avant.png";
import totebagBob from "@/public/data/img/Nysos/app_Nysos/bob_l'eponge_totebag.jpg";
import pantalon from "@/public/data/img/Nysos/app_Nysos/pantalon.jpg";
import tiph from "@/public/data/img/Nysos/app_Nysos/tiph.jpg";
import totebag from "@/public/data/img/Nysos/app_Nysos/totebag_logo.jpg";
import serigraphie1 from "@/public/data/img/Nysos/app_Nysos/serigraphie.png";
import serigraphie2 from "@/public/data/img/Nysos/app_Nysos/serigraphie_2.png";

export const CATEGORIES = ["Vêtements", "Sac - totebag", "Accessoires"];

export const FooterInfo: FooterCategory[] = [
  { id: 0, title: "Collection", links: CATEGORIES },
  {
    id: 1,
    title: "Personnalisation",
    links: ["Faire ma demande", "Discuter avec l'artiste"],
  },
  { id: 2, title: "Sérigraphie", links: CATEGORIES },
  { id: 3, title: "À propos de nous", links: ["Notre histoire", "Contact"] },
  {
    id: 4,
    title: "Informations",
    links: [
      "FAQ",
      "Retouches",
      "Retouches et remboursement",
      "Politique de confidentialité",
    ],
  },
  { id: 5, title: "Nos réseaux", links: ["Instagram", "TikTok", "Pinterest"] },
];

export const FIRST_PRODUCT_ROW: ItemProduct[] = [
  { id: 0, linkImg: sopranos, title: "T shirt - The Sopranos" },
  { id: 1, linkImg: tshirtLogo, title: "Pull - Mask Off" },
];

export const SECOND_PRODUCT_ROW: ItemProduct[] = [
  { id: 0, linkImg: pantalonGhibli, title: "Pantalon - Studio Ghibli" },
  { id: 1, linkImg: veste, title: "Veste - Doberman" },
];

export const FEATURED_VESTE: ItemProduct = {
  id: 2,
  linkImg: vesteVerte,
  title: "Veste - Fleurs d'été",
};

export const FEATURED_POLO: ItemProduct = {
  id: 3,
  linkImg: superNana,
  title: "Polos - Super Nanas",
};

export const SUGGESTIONS = [
  { id: 0, img: totebagBob, title: "Totebag Bob l'éponge" },
  { id: 1, img: veste, title: "Veste" },
  { id: 2, img: vesteVerte, title: "Veste verte" },
];

export const SUGGESTIONS_END = [
  { id: 0, img: pantalon, title: "Personnalisation" },
  { id: 1, img: tiph, title: "Contacter l'artiste" },
];

export const INFO_LINKS = [
  "Guide des tailles et coupe",
  "Matières",
  "Paiement et remboursement",
  "Livraison et retours",
];

export const THUMBNAILS = [
  { src: tshirtFace, alt: "T-shirt face" },
  { src: tshirtDos, alt: "T-shirt dos" },
  { src: tshirtArriere, alt: "T-shirt arrière" },
  { src: tshirtAvant, alt: "T-shirt avant" },
];

export const FIRST_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "totebag - logo",
    link: totebag,
    add: "Collection de vêtements",
  },
  { id: 1, name: "pantalon - logo", link: pantalon, add: "Personnalisation" },
];

export const MIDDLE_ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: 0,
    name: "tshirt - logo",
    link: tshirtLogo,
    add: "Pull - Mask off Price",
  },
  {
    id: 1,
    name: "tshirt - sopranos",
    link: sopranos,
    add: "T shirt - The Sopranos Price",
  },
  { id: 2, name: "pull", link: vesteVerte, add: "Name of the article Price" },
];

export const SERIGRAPHIE_ILLUSTRATIONS: IllustrationItem[] = [
  { id: 0, name: "serigraphie 1", link: serigraphie1, add: "Headache" },
  { id: 1, name: "serigraphie 2", link: serigraphie2, add: "Sad moon" },
];
