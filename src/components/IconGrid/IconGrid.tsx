import { FC, forwardRef, LegacyRef } from "react";
import { Icons, SKILL_ICONS } from "../../store";
import { Icon } from "../IconContainer/Icon";
import { PinCard } from "../PinCard/PinCard";
import "./IconGrid.scss";

export const IconGrid = forwardRef(({ id }: { id: string }, ref) => {
  return (
    <div ref={ref as LegacyRef<HTMLDivElement> | undefined} className="icon-grid" id={id}>
      {SKILL_ICONS.map((icon) => {
        return (
          <PinCard>
            <Icon iconElement={icon.name as Icons} classNames="skill-in-grid" />;
          </PinCard>
        );
      })}
    </div>
  );
});

