import { Section } from "../components/SidebarNavBubbles/SidebarNavBubbles.types";
import { PageTitle, SkillIcon } from "./constants.type";

/**
 * Page titles being used
 * ids and the page titles
 */
export const PAGE_TITLES: Readonly<PageTitle[]> = ["About", "Projects", "Contact"] as const;

/**
 * Icons for sidebar section of each project-display card
 */
export const SIDEBAR_ICONS = ["VIDEO", "GITHUB", "SPECTACLES"] as const;

/**
 * All Icons used in skill carousel
 */
export const SKILL_ICONS: SkillIcon[] = [
  {
    name: "REACT",
    fontColor: "#00d9ff",
  },
  {
    name: "WEBPACK",
    fontColor: "#00d9ff",
  },
  {
    name: "VUE",
    fontColor: "#cf6399",
  },
  {
    name: "GRAPHQL",
    fontColor: "#cf6399",
  },
  {
    name: "SASS",
    fontColor: "#cf6399",
  },
  {
    name: "CSS",
    fontColor: "#2062af",
  },
  {
    name: "HTML",
    fontColor: "#e44b25",
  },
  {
    name: "NODE",
    fontColor: "#3c873a",
  },
  {
    name: "GIT",
    fontColor: "#f05233",
  },
  {
    name: "EXPRESS",
    fontColor: "#3c9cd7",
  },
  {
    name: "GULP",
    fontColor: "#da4446",
  },
  {
    name: "JAVASCRIPT",
    fontColor: "#f7dd1d",
  },
];

