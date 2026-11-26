import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

/* -------------------------------------------------------------------------- */
/*  Types communs                                                             */
/* -------------------------------------------------------------------------- */

type ImageSource = StaticImageData | string;

export interface ImageItem {
  id: number;
  imglink: string;
}

export interface TitledImageItem extends ImageItem {
  title: string;
}

/* -------------------------------------------------------------------------- */
/*  Pages                                                                     */
/* -------------------------------------------------------------------------- */

export interface PageProps {
  params: Promise<{ projectDetail: string }>;
}

/* -------------------------------------------------------------------------- */
/*  Projets                                                                   */
/* -------------------------------------------------------------------------- */

export interface Project {
  // Présentation
  id: number;
  title: string;
  imgPres: string;
  desc?: string;
  descTitle?: string;
  typeProject: string;
  role: string;
  objectif: string;
  date: string;
  hideSimilarProjects?: boolean;

  // Explications (RATP)
  explication?: string;
  explicationIllu?: ImageItem[];
  explicationDesc?: string;
  explicationDescSuite?: string;
  userFlow?: ImageItem[];

  // Réponse via wireframes (RATP)
  reponseWireframes?: TitledImageItem[];
  reponseWireframeDesc?: string;
  prototypeUrl?: string;

  // Recherche utilisateur
  rechercheUtilisateur?: string;
  suiteRechercheUtilisateur?: string;
  recherche?: string[];
  recherche_2?: string;
  recherche2Desc?: string;
  ciblePrincipale?: string;
  ciblePrincipaleSuite?: string;

  // Backoffice
  titleBackoffice?: string;
  descBackoffice?: string;
  backoffice?: string;

  // Méthodologie (Steam)
  methodologieDesc?: string;
  methodologieImg?: ImageItem[];

  // Wireframes
  wireframes?: string[];
  wireframesDesc?: string;
  wireframesDescSuite?: string;

  // Charte graphique
  charteGraphiqueTitle?: string;
  CGDesc_1?: string;
  CGDesc_2?: string;
  CGDesc_3?: string;
  CGImage?: string[];
  logo?: string;
  logoEcrit?: string;

  // Moodboard
  moodBoardDesc?: string | string[];
  moodBoardImg?: ImageItem[];

  // Design system
  CGImage_diff?: string[];
  DesignSystemDesc?: string[];
  DesignSystemImg?: string;

  // Audit et site avant refonte (GreenLab)
  AuditTitle?: string;
  AuditDesc?: string[];
  SAM_title?: string;
  SAM?: string;
  SAM_img?: ImageItem[];

  // UI et tests utilisateurs
  UI?: ImageItem[];
  TU?: ImageItem[];
  TU_2?: ImageItem[];
}

export interface OtherProject {
  id: number;
  title: string;
  desc: string;
}

export interface ProjectInfoItem {
  id: number;
  title: string;
  value: string;
}

export interface ProjectInfoProps {
  title: string;
  projectInfo: ProjectInfoItem[];
}

export interface ImgPresProps {
  imgPres: string;
  title?: string;
}

export interface WireframesProps {
  wireframes?: string[];
  wireframesDesc?: string;
  wireframesDescSuite?: string;
  /** Contenu additionnel affiché à la fin du carrousel (ex. wireframe mobile) */
  children?: ReactNode;
  title: string;
}

export interface CharteGraphiqueProps {
  title?: string;
  desc_1?: string;
  desc_2?: string;
  desc_3?: string;
  imgCG?: string;
  imgCG_2?: string;
  imgCG_diff?: string[];
  logo?: string;
  logoEcrit?: string;
}

/* -------------------------------------------------------------------------- */
/*  Nysos (maquettes)                                                         */
/* -------------------------------------------------------------------------- */

export interface PhoneViewerProps {
  images: ImageItem[];
  currentIndex: number;
  onNext: () => void;
  getHighlightStyle: (index: number) => string;
}

export interface TopNavBarSimulationProps {
  nysos: ImageSource;
}

export interface FooterWireFrameProps {
  nysos: ImageSource;
}

export interface CollectionProps {
  title: string;
}

export interface ItemProduct {
  id: number;
  linkImg: StaticImageData;
  title: string;
}

export interface ProductCardProps {
  item: ItemProduct;
  className?: string;
  imageClassName?: string;
}

export interface IllustrationItem {
  id: number;
  name: string;
  link: StaticImageData;
  add: string;
}

export interface CollectionCarouselProps {
  title: ReactNode;
  items: IllustrationItem[];
}

export interface FooterCategory {
  id: number;
  title: string;
  links: string[];
}

/* -------------------------------------------------------------------------- */
/*  Steam (maquettes)                                                         */
/* -------------------------------------------------------------------------- */

export interface BundleItem {
  id: number;
  title: string;
  description: string;
  discount: string;
  oldPrice: string;
  newPrice: string;
  images: StaticImageData[];
}

export interface BundleItemBefore {
  id: number;
  title: string;
  discountText: string;
}

export interface DlcItem {
  name: string;
  price: string;
  discount?: string;
  oldPrice?: string;
}

export interface SimilarGame {
  title: string;
  price: string;
  discount: string;
  oldPrice: string;
  image: ImageSource;
}

export interface FeatureItem {
  label: string;
  value: string;
  valueColor?: string;
}

export interface ReviewItem {
  id: number;
  author: string;
  recommended: "Recommended" | "Not Recommended" | "Review";
  content: string;
  date: string;
  hours: string;
}

/* -------------------------------------------------------------------------- */
/*  Emploi                                                                    */
/* -------------------------------------------------------------------------- */

export interface Emploi {
  id: number;
  title: string;
  desc: string[];
  type: string;
}

export interface EmploiCardProps {
  emploi: Emploi[];
  type: string;
}

/* -------------------------------------------------------------------------- */
/*  Études / Diplômes                                                         */
/* -------------------------------------------------------------------------- */

export interface Etude {
  id: number;
  date?: string;
  year?: string;
  title: string;
  subTitle: string;
  desc: string;
  img?: string;
  logo?: string;
  logoAlt?: string;
}

export interface DiplomeTimelineProps {
  etudes: Etude[];
}
