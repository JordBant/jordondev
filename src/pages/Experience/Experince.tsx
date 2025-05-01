import { forwardRef, LegacyRef } from "react";
import { IconGrid } from "../../components/IconGrid/IconGrid";
import { Timeline } from "../../components/Timeline/Timeline";
import "./Experience.scss";

export const Experince = forwardRef(({ id }: { id: string }, ref) => {
  return (
    <section id={id} ref={ref as LegacyRef<HTMLElement> | undefined} className="experience-container">
      <section className="timeline-scroll-container">
        <Timeline />
      </section>
      <IconGrid id="experience" />
    </section>
  );
});

