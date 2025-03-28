import React, {
  FC,
  // useState
} from "react";
import { SkillCards } from "./partials/SkillCards/SkillCards";
import "./CarouselCrawl.scss";

export const CarouselCrawl: FC<{ children: React.ReactElement }> = ({ children }): React.ReactElement => {
  const mapComponentsByClassName = ["ticker__initial", "ticker__next", "ticker__next"];
  // TODO; const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        {mapComponentsByClassName.map((byClassName, idx) => (
          <div className={`${byClassName} ticker__content`} key={`${idx}--card`}>
            {children}
            {/* <SkillCards /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

