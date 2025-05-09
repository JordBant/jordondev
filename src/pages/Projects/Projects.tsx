import { PROJECTS } from "../../store";
import "./Projects.scss";
import { CarouselAutoCrawl } from "../../components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export const Projects = () => {

  return (
    <section className="projects-container">
      <CarouselAutoCrawl>
        <>
          {PROJECTS.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </>
      </CarouselAutoCrawl>
    </section>
  );
};

