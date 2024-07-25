import { FC } from "react";

import { FlippableCardProps } from "./FlippableCard.types";
import "./FlippableCard.scss";

export const FlippableCard: FC<FlippableCardProps> = ({
  children,
  // classNames,
  colorTheme = "#fa9595",
  title = "Technology",
}) => {
  return (
    <div className="scene">
      <div className="card">
        <div className="card-face front">{children}</div>
        <div className="card-face back">
          <h1 className="card-text" style={{ color: `${colorTheme}` }}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
