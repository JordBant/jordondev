import React, { FC } from "react";
import "./TitleOverlayCard.scss";

type TitleOverlayCardProps = {
  text: string;
  backgroundColor?: string;
  children: React.ReactElement;
};

export const TitleOverlayCard: FC<TitleOverlayCardProps> = ({
  text,
  // backgroundColor,
  children,
}) => {
  return (
    <div className="opaque-overlay">
      <div className="text-overlay">
        <p className="text">{text}</p>
        {children}
      </div>
    </div>
  );
};

