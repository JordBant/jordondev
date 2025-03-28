import { FC } from "react";
import { SidebarNavCard } from "../../layouts/SidebarNavCard/SidebarNavCard";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import "./Projects.scss";
import { AutoCarousel } from "../../components/AutoCarousel/temp2";
import { CarouselCrawl } from "../../components";
import { PROJECTS } from "../../store";

export const Projects = () => {
  // let compatibleNum = 3;

  return (
    // <main className="projects-container">
    //   {/* <SkillCarouselCrawl /> */}
    //   <section className="project-display-board">
    //     {["Grid container", "Grid container", "Grid container", "Grid container", "Grid container"].map(
    //       (word, idx) => {
    //         const truePosition = idx + 1;
    //         const isIntervaled = truePosition - compatibleNum === 5;
    //         if (isIntervaled || idx + 1 === 3) {
    //           compatibleNum = truePosition;
    //           return <SidebarNavCard classNames="grid-span-column" key={`00${idx}--${word}`} />;
    //         } else {
    //           return <SidebarNavCard key={`00${idx}--${word}`} />;
    //         }
    //       },
    //     )}
    //   </section>
    // </main>
    <section className="projects-container">
      {/* <AutoCarousel /> */}
      <CarouselCrawl>
        {/* <section className="projects-card-container"> */}
        <>
          {PROJECTS.map(({ name }, idx) => {
            return <SidebarNavCard key={`${name}--${idx}`} projectName={name} />;
          })}
        </>
        {/* </section> */}
      </CarouselCrawl>
    </section>
  );
};

