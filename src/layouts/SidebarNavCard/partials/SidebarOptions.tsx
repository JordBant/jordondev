import { FC } from "react";
import { Icon } from "../../../components";
import { SIDEBAR_ICONS } from "../../../store/constants";
import { SidebarOptionsProps } from "../SidebarNavCard.types";

export const SidebarOptions: FC<SidebarOptionsProps> = ({ isClicked }) => {
  const activeOptionListClassName: "" | "sidebar-card__active-options-list" = isClicked
    ? "sidebar-card__active-options-list"
    : "";

  return (
    <div className={`sidebar-card__options-list ${activeOptionListClassName}`}>
      {SIDEBAR_ICONS.map((option, idx) => (
        <Icon key={`${idx}--option-icon`} iconElement={option} classNames="sidebar-card__options-btn" />
      ))}
    </div>
  );
};

