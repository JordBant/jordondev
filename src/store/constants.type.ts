import { ICON_MAP } from "./constants";

export type SkillIcon = {
    name: string,
    fontColor: string,
};

// export type TProject = {
//     name: string;
//     image: string;
// };

export type TProject = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    year?: string;
  }

export type IconMapping = Record<Icons, React.ReactElement> & IconMapIndexSignature;

export type IconMapIndexSignature = {
    [ key: string ]: JSX.Element;
};

export type Icons = keyof typeof ICON_MAP;
export type PageTitle = 'About' | 'Projects' | 'Contact';