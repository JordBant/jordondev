import { FC, forwardRef, LegacyRef } from "react";
import { BackgroundBoxes } from "../../components/BackgroundBoxes/BackgroundBoxes";
import "./About.scss";

export const About = forwardRef(({id}: { id: string }, ref) => {
  return (
    <section className="about-body-container" id={id} ref={ref as LegacyRef<HTMLElement> | undefined}>
      {/* <Navbar {...props} /> */}
      <section className="about_body">
        <BackgroundBoxes />
        {/* <MyParticles /> */}
        <h1 className="about_salutations">
          <span>I'm</span>
          <span>Jordon</span>
        </h1>
        <p className="about_body_text">Full Stack Software Engineer</p>
        <div className="calls-to-action">
          <button
            className="contact-now"
            onClick={() => {
              document.getElementById(`#contact`)?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}
          >
            Contact Now
          </button>
        </div>
      </section>
    </section>
  );
});

