import React, { forwardRef, LegacyRef } from "react";
import { IconGrid } from "../../components/IconGrid/IconGrid";
import "./Experience.scss";

export const Experince = forwardRef(({ id }: { id: string }, ref) => {
  return (
    <section id={id} ref={ref as LegacyRef<HTMLElement> | undefined} className="experience-container">
      <IconGrid id="experience" />
    </section>
  );
});

