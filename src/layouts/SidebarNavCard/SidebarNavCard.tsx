import { FC, useCallback, useState } from "react";
import { Icon } from "../../components";
import { SidebarNavCardProps } from "./SidebarNavCard.types";
import { SidebarOptions } from "./partials/SidebarOptions";
import "./SidebarNavCard.scss";
/**
 * Card layout with background image of project to
 * display
 */
export const SidebarNavCard: FC<SidebarNavCardProps> = ({
  projectName = "Project Name",
  classNames = "",
  imageUrl = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);
  /**
   * Function signature is undefined because onHover callback
   * returns undefined values
   */
  const isHoveredHandler = useCallback((toggleTo: boolean): undefined => {
    setIsHovered(toggleTo);
  }, []);
  /**
   * Function signature is undefined because onHover callback
   * returns undefined values
   */
  const isTriggerHoveredHandler = useCallback((toggleTo: boolean): undefined => {
    setIsTriggerHovered(toggleTo);
  }, []);
  /**
   * Function signature is undefined because onHover callback
   * returns undefined values
   */
  const isClickedHandler = useCallback((toggleTo: boolean): undefined => {
    setIsClicked(toggleTo);
  }, []);
  const activeMenuClassName: "" | "sidebar-card__active-menu" = isClicked ? "sidebar-card__active-menu" : "";
  /**
   * Trigger mask onHover
   */
  const activeMask: "" | "sidebar-card__active-mask" = isHovered ? "sidebar-card__active-mask" : "";
  /**
   * trigger kobab class on mouse hover
   */
  const triggerIsHovered: "" | "sidebar-card__hover-options-trigger" = isTriggerHovered
    ? "sidebar-card__hover-options-trigger"
    : "";

  return (
    <div
      className={`sidebar-card ${classNames}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        objectPosition: "50% 50%",
      }}
      onMouseEnter={() => isHoveredHandler(true)}
      onMouseLeave={() => {
        isHoveredHandler(false);
        if (isClicked) isClickedHandler(false);
      }}
    >
      <div
        className={`sidebar-card__sidebar ${activeMenuClassName} ${activeMask}`}
        onMouseOver={() => isTriggerHoveredHandler(true)}
        onMouseLeave={() => {
          isTriggerHoveredHandler(false);
          if (isClicked) isClickedHandler(false);
        }}
      >
        <Icon
          classNames={`sidebar-card__options-trigger ${activeMenuClassName} ${triggerIsHovered}`}
          onClick={() => isClickedHandler(!isClicked)}
          iconElement="KOBAB"
        />
        <SidebarOptions isClicked={isClicked} />
        {isHovered && <h2 className="sidebar-card__project-name">{projectName}</h2>}
      </div>
    </div>
  );
};

