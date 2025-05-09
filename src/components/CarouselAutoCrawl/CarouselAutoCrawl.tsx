import React, {
  FC,
} from "react";
import "./CarouselAutoCrawl.scss";

export const CarouselAutoCrawl: FC<{ children: React.ReactElement }> = ({ children }): React.ReactElement => {
  const mapComponentsByClassName = ["ticker__initial", "ticker__next", "ticker__next"];

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        {mapComponentsByClassName.map((byClassName, idx) => (
          <div className={`${byClassName} ticker__content`} key={`${idx}--card`}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

