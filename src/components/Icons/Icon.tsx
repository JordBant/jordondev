import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { IconProps } from "./Icon.types";
import "./Icon.scss";
import { ICON_MAP } from "../../store/icons.constants";

export const Icon: FC<
  IconProps & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">
> = ({ classNames = "", iconElement, ...props }) => {
  return (
    <div className={`icon-container ${classNames}`} {...props}>
      {ICON_MAP[iconElement]}
    </div>
  );
};

