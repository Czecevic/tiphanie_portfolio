import type {
  BundleItem,
  DlcItem,
  FeatureItem,
  ReviewItem,
  SimilarGame,
  BundleItemBefore,
} from "@/interfaces";
import { ChartColumn, Cloud, Globe, Sparkles, User2Icon } from "lucide-react";
import imgJeu from "@/public/data/img/steam/header.jpg";

export const NAV_LINKS = [
  "Your Store",
  "New & Noteworthy",
  "Categories",
  "Points Shop",
  "News",
  "Labs",
];

export const BUNDLES: BundleItem[] = [
  {
    id: 1,
    title: "Buy Iratus: Necromancer Edition",
    description: "Buy this bundle to save 5% off all 3 items!",
    discount: "-82%",
    oldPrice: "$54.97",
    newPrice: "$9.86",
    images: [imgJeu, imgJeu, imgJeu],
  },
  {
    id: 2,
    title: "Buy Strategy Bundle",
    description: "Buy this bundle to save 25% off all 5 items!",
    discount: "-78%",
    oldPrice: "$141.95",
    newPrice: "$30.56",
    images: [imgJeu, imgJeu, imgJeu],
  },
  {
    id: 3,
    title: "Buy Iratus Supporter Bundle",
    description:
      "Includes 2 items: Iratus: Lord of the Dead, Iratus: Lord of the Dead - Supporter Pack",
    discount: "-86%",
    oldPrice: "$39.98",
    newPrice: "$5.59",
    images: [],
  },
];

export const BUNDLESBefore: BundleItemBefore[] = [
  {
    id: 1,
    title: "Buy Iratus: Necromancer Edition",
    discountText: "Save 5% off all 3 items!",
  },
  {
    id: 2,
    title: "Buy Strategy Bundle",
    discountText: "Save 25% off all 5 items!",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    label: "Steam Deck Compatibility",
    value: "Playable",
    valueColor: "text-[#20cf20] font-semibold",
  },
  {
    label: "Languages",
    value: "English and 11 more",
    valueColor: "text-white",
  },
  { label: "Player Modes", value: "Single-player", valueColor: "text-white" },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: "Ruein",
    recommended: "Not Recommended",
    content:
      "“I should have heeded that other review which said that groups of enemies can suddenly do enormous damage for no perceivable reason. There's the core of a fun game here but it's completely ruined by very inconsistent explanations of combat mechanics.”",
    date: "October 24",
    hours: "3.5 hrs on record",
  },
  {
    id: 2,
    author: "Kreacher",
    recommended: "Recommended",
    content:
      "“did the tutorial. after that restarted on a higher difficulty since it couldn't be worse than darkest dungeon. and ended up finishing the game in 1 sitting..... it's a lot of fun a laid back experience and you can make it as hard as you want it with difficulty and units you use.”",
    date: "October 19",
    hours: "10.6 hrs on record",
  },
  {
    id: 3,
    author: "Hannibal",
    recommended: "Recommended",
    content:
      "“This is a must for the turn-based indie dark fantasy dungeon crawler lovers!”",
    date: "October 24",
    hours: "44.9 hrs on record",
  },
  {
    id: 4,
    author: "Doctor Murder",
    recommended: "Recommended",
    content:
      "“Pure fun. It's fun building different parties and builds. It's fun finding just the right items and artifacts. Game too slow? Just speed it up to 5 times speed. You like Darkest dungeons than you will like this.”",
    date: "October 20",
    hours: "113.2 hrs on record",
  },
  {
    id: 5,
    author: "sebsal",
    recommended: "Recommended",
    content:
      "“Made a party of screaming women which instantly drive all the men they come across to insanity and death with their wailing and nagging. I cannot commend this game enough for its realism”",
    date: "October 24",
    hours: "7.9 hrs on record",
  },
  {
    id: 6,
    author: "REY",
    recommended: "Recommended",
    content:
      "“Not as amazing as Darkest Dungeon but still a great game in the genre, Great visuals, satisfying combat, good music and a thrilling atmosphere.”",
    date: "October 10",
    hours: "25.3 hrs on record",
  },
  {
    id: 7,
    author: "Guardfather",
    recommended: "Recommended",
    content:
      "“This game is fantastic. And it runs great on Linux. I've had a lot of fun figuring out different party configurations to take on various situations. The sanity system wasn't clear to me at first...”",
    date: "October 9",
    hours: "65.8 hrs on record",
  },
  {
    id: 8,
    author: "TheGreatR",
    recommended: "Recommended",
    content:
      "“Darkest Dungeon clone but you're the bad guy. The narrator here is equally iconic if you ask me. It's very short though so please keep that in mind when buying it.”",
    date: "October 1",
    hours: "28.4 hrs on record",
  },
  {
    id: 9,
    author: "Theoreocook",
    recommended: "Recommended",
    content:
      "“Played for 3 hours and I really like this game, it has a darkest dungeon type of style to it. My favorite part about the game is your a necromancer spawning your minions on the world.”",
    date: "October 24",
    hours: "3.7 hrs on record",
  },
  {
    id: 10,
    author: "Swajius",
    recommended: "Recommended",
    content:
      "“Reminds me of Deeper Darkness, but seems to be easier to understand the mechanics. I like the game and you cannot beat the price right now”",
    date: "October 23",
    hours: "6.5 hrs on record",
  },
  {
    id: 11,
    author: "Ratspike",
    recommended: "Review",
    content:
      "“Darkest dungeon clone that is easier, with less creativity in all areas ( dungeon map, talents specs mechanics etc). It's alright if you want more of the genre”",
    date: "October 25",
    hours: "13.3 hrs on record",
  },
  {
    id: 12,
    author: "giantshorty",
    recommended: "Recommended",
    content: "“Absolutely phenomenal”",
    date: "October 24",
    hours: "26.0 hrs on record",
  },
  {
    id: 13,
    author: "E-beksi",
    recommended: "Recommended",
    content:
      "“if you like turn based strategies like darkest dungeon, but with a more masochistic difficulty level”",
    date: "October 24",
    hours: "15.7 hrs on record",
  },
];

export const GAME_FEATURES = [
  { label: "Single-player", icon: User2Icon },
  { label: "Steam Achievements", icon: Sparkles },
  { label: "Steam Cloud", icon: Cloud },
  { label: "Stats", icon: ChartColumn },
  { label: "Visit the game website", icon: Globe, external: true },
];

export const GAME_TAGS = [
  "RPG",
  "Strategy",
  "Indie",
  "Turn-Based Combat",
  "2D",
];

const SKIN_SALE = { discount: "-50%", oldPrice: "$2.99" } as const;

export const GAME_DLCS: DlcItem[] = [
  { name: "Iratus: Lord of the Dead - Supporter Pack", price: "N/A" },
  {
    name: "Iratus: Wrath of the Necromancer",
    price: "$4.49",
    discount: "-70%",
    oldPrice: "$14.99",
  },
  { name: "Iratus - Summer Skin Set", price: "$2.99" },
  { name: "Iratus - Halloween Skin Set", price: "$1.49", ...SKIN_SALE },
  { name: "Iratus - Holidays Skin Set", price: "$1.49", ...SKIN_SALE },
];

const DEFAULT_SALE = {
  price: "$4.49",
  discount: "-70%",
  oldPrice: "$14.99",
  image: imgJeu,
};

export const SIMILAR_GAMES: SimilarGame[] = [
  { title: "Hidden Deep", ...DEFAULT_SALE },
  { title: "War Pips", ...DEFAULT_SALE },
  { title: "Partisans 1941", ...DEFAULT_SALE },
];
