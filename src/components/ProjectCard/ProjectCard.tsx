import { useState } from "react";
import { Card } from "./partials/Card";
import { Badge } from "lucide-react";
import { TProject } from "../../store";
import "./ProjectCard.scss";

// Define props interface
export type ProjectCardProps = { project: TProject };

// Simple icons with TypeScript
const ArrowUpRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const CalendarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [, setIsHovered] = useState<boolean>(false);

  // const isProd =
  console.log({'1':window.location.hostname});
  console.log({'2':window.location.host});
  console.log({'3':window.location.href});
  console.log({'4':window.location.pathname});

  return (
    <Card
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overlay" />

      <div className="image-container">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="project-title">{project.title}</h3>

          <div className="year-container">
            <CalendarIcon />
            <span className="year">{project.year}</span>
          </div>
        </div>

        <div className="card-details">
          <p className="project-description">{project.description}</p>

          <div className="tags-container">
            {project.tags.map((tag, index) => (
              <Badge key={index} className="tag">
                {tag}
              </Badge>
            ))}
          </div>

          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

