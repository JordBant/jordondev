import { FC } from "react";
import { Icon } from "../../../IconContainer/Icon";
import { SkillCardProps } from "../../CarouselCrawl.types";
import "./SkillCard.scss";
import { TitleOverlayCard } from "../../../../layouts/TitleOverlayCard/TitleOverlayCard";

export const SkillCard: FC<SkillCardProps> = ({
  // TODO iconName, fontColor,
  iconElement,
}) => {
  return (
    <TitleOverlayCard text={"Test overlay"}>
      {/* <FlippableCard title={iconName} colorTheme={fontColor}> */}
      <div className={`skill-card`}>
        <Icon classNames="skill-icon" iconElement={iconElement} />
        {/* <hr className="y-line" style = {{ background: `${fontColor}` }}/> */}
        {/* <p className ="side-text"> {iconName} </p> */}
      </div>
      {/* </FlippableCard> */}
    </TitleOverlayCard>
  );
};

