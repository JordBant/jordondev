import { IconGrid } from "../../components/IconGrid/IconGrid";
import { Timeline } from "../../components/Timeline/Timeline";
import "./Experience.scss";

export const Experience = () => {
  return (
    <section className="experience-container">
      <section className="timeline-scroll-container">
        <Timeline />
      </section>
      <IconGrid id="experience" />
    </section>
  );
};
