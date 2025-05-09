import { BackgroundBoxes } from "../../components/BackgroundBoxes/BackgroundBoxes";
import "./About.scss";

export const About = () => {
  return (
    <section className="about-body-container">
      <section className="about_body">
        <BackgroundBoxes />
        <h1 className="about_salutations">
          <span>I'm</span>
          <span>Jordon</span>
        </h1>
        <p className="about_body_text">Full Stack Software Engineer</p>
        <div className="calls-to-action">
          <button
            className="contact-now"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            Contact Now
          </button>
        </div>
      </section>
    </section>
  );
};

