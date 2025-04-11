import { Section } from "../components/SidebarNavBubbles/SidebarNavBubbles.types";
import { PageTitle, SkillIcon, TProject } from "./constants.type";

/**
 * Page titles being used
 * ids and the page titles
 */
export const PAGE_TITLES: Readonly<PageTitle[]> = [ "About", "Projects", "Contact" ] as const;
/**
 * All Project Info
 */
// export const PROJECTS: TProject[] = [
//   {
//     name: "MediaM",
//     image: '/project_images/frpro.jpeg',
//   },
//   {
//     name: "The Blu's Clue",
//     image: '/project_images/bmi.jpg',
//   },
//   {
//     name: "Pixie URL",
//     image: '/project_images/frpro.jepg',
//   },
//   {
//     name: "Fitch Connect",
//     image: '/project_images/fc.jpeg',
//   },
//   {
//     name: "Fitch Ratings Pro",
//     image: '/project_images/bmi.jpg',
//   },
//   {
//     name: "Business Mutual International",
//     image: '/project_images/bmi.jpg',
//   },
//   {
//     name: "Neighbors Restock",
//     image: '/project_images/bmi.jpg',
//   },
//   {
//     name: "Asfaw Consultancy",
//     image: '/project_images/bmi.jpg',
//   },
// ];
export const PROJECTS: TProject[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    image: "https://placehold.co/600x400",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/project1",
    year: "2023",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode and animations.",
    image: "https://placehold.co/600x400",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/project2",
    year: "2023",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://placehold.co/600x400",
    tags: ["React", "Firebase", "TypeScript"],
    link: "https://example.com/project3",
    year: "2022",
  },
]

/**
 * Icons for sidebar section of each project-display card
 */
export const SIDEBAR_ICONS = [ "VIDEO", "GITHUB", "SPECTACLES" ] as const;

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

