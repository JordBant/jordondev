export interface Section {
  id: string;
  ref: React.RefObject<HTMLElement>;
  label: string;
}

export interface SectionNavigatorProps {
  sections: Section[];
  position?: "left" | "right";
  offset?: number;
  bubbleSize?: number;
  bubbleGap?: number;
  primaryColor?: string;
  bubbleBorderWidth?: number;
}