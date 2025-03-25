import { forwardRef, LegacyRef } from "react";
import { IconGrid } from "../../components/IconGrid/IconGrid";
import { Timeline } from "../../components/Timeline/Timeline";
import "./Experience.scss";

export const Experince = forwardRef(({ id }: { id: string }, ref) => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="timeline-content-text">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="timeline-image-grid">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="timeline-content-text">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="timeline-content-text">
            Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more
            example of beautiful designs I built.
          </p>
          <div className="timeline-image-grid">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="timeline-content-text-small">Deployed 5 new components on Aceternity today</p>
          <div className="timeline-checklist-container">
            <div className="timeline-checklist-item">✅ Card grid component</div>
            <div className="timeline-checklist-item">✅ Startup template Aceternity</div>
            <div className="timeline-checklist-item">✅ Random file upload lol</div>
            <div className="timeline-checklist-item">✅ Himesh Reshammiya Music CD</div>
            <div className="timeline-checklist-item">✅ Salman Bhai Fan Club registrations open</div>
          </div>
          <div className="timeline-image-grid">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              loading="lazy"
              className="timeline-image"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id={id} ref={ref as LegacyRef<HTMLElement> | undefined} className="experience-container">
      <section className="timeline-scroll-container">
        <Timeline data={data} />
      </section>
      <IconGrid id="experience" />
    </section>
  );
});

