import React, { useState } from "react";
import { PinPerspective } from "./partials/PinPerspective";
import "./PinCard.scss";

export const PinCard = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  // const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");
  const [transform, setTransform] = useState("rotateX(0deg)");

  const onMouseEnter = () => {
    // setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setTransform("rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    // setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    // <div>{children}</div>
    <div
      className={`pin-hover pin-card-container ${containerClassName ?? ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="pin-card-outer">
        <div
          style={{
            transform: transform,
            transition: "450ms",
          }}
          className="pin-card-inner"
        >
          <div className={`pin-content ${className ?? ""}`}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title ?? "Test 1"} href={href} />
    </div>
  );
};

