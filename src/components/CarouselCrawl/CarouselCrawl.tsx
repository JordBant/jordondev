import React, { FC, 
  // useState 
} from "react";
import { SkillCards } from "./partials/SkillCards/SkillCards";
import "./CarouselCrawl.scss";

export const CarouselCrawl: FC = (): React.ReactElement => {
  const mapComponentsByClassName = ["ticker__initial", "ticker__next", "ticker__next"];
  // TODO; const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="ticker__wrapper">
      <div className="ticker">
        {mapComponentsByClassName.map((className, idx) => (
          <div className={`${className}`} key={`${idx}--card`}>
            <SkillCards />
          </div>
        ))}
      </div>
    </div>
  );
};

