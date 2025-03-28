import { FC } from "react";
import { Icon } from "../../../Icons/Icon";
import { SkillCardProps } from "../../CarouselAutoCrawl.types";
import "./SkillCard.scss";

export const SkillCard: FC<SkillCardProps> = ({
  // TODO iconName, fontColor,
  iconElement,
}) => {
  return (
    <div className={`skill-card`}>
      {/* <FlippableCard title={iconName} colorTheme={fontColor}> */}
      <Icon classNames="skill-icon" iconElement={iconElement} />
      {/* <hr className="y-line" style = {{ background: `${fontColor}` }}/> */}
      {/* <p className ="side-text"> {iconName} </p> */}
      {/* </FlippableCard> */}
    </div>
  );
};

