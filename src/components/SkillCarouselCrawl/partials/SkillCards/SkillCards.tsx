import { Icons } from "../../../../store/constants.type";
import { SKILL_ICONS } from "../../../../store/constants";
import { SkillCard } from "../SkillCard/SkillCard";
import "./SkillCards.scss";

export const SkillCards = () => {
  return (
    <div className="skill-card-container">
      {SKILL_ICONS.map((icon, idx) => {
        return (
          <SkillCard
            key={`00${idx}--icon`}
            iconName={icon.name}
            fontColor={icon.fontColor}
            iconElement={icon.name as Icons}
          />
        );
      })}
    </div>
  );
};

