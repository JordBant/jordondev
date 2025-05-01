import { PROJECTS } from "../../store";
import "./Projects.scss";
import { CarouselAutoCrawl } from "../../components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
      <CarouselAutoCrawl>
        <>
          {/* {PROJECTS.map(({ name, image }, idx) => {
            return <SidebarNavCard key={`${name}--${idx}`} imageUrl={image} projectName={name} />;
          })} */}
          {PROJECTS.map((project, idx) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </>
      </CarouselAutoCrawl>
      {/* {PROJECTS.map((project, idx) => {
        return <ProjectCard key={project.id} project={project} />;
      })} */}
    </section>
  );
};

