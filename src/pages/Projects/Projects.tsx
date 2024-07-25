import { FC } from "react";
import { SidebarNavCard } from "../../layouts/SidebarNavCard/SidebarNavCard";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import "./Projects.scss";
// import { SkillCarouselCrawl } from "../../components";

export const Projects: FC = () => {
  let compatibleNum = 3;

  return (
    <SideTitlePage pageTitle="Projects" pageId="projects" classNames="projects-container">
      {/* <SkillCarouselCrawl /> */}
      <section className="project-display-board">
        {["Grid container", "Grid container", "Grid container", "Grid container", "Grid container"].map(
          (word, idx) => {
            const truePosition = idx + 1;
            const isIntervaled = truePosition - compatibleNum === 5;
            if (isIntervaled || idx + 1 === 3) {
              compatibleNum = truePosition;
              return <SidebarNavCard classNames="grid-span-column" key={`00${idx}--${word}`} />;
            } else {
              return <SidebarNavCard key={`00${idx}--${word}`} />;
            }
          },
        )}
      </section>
    </SideTitlePage>
  );
};

