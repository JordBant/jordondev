import { FC } from "react";
import {
  Icon,
  // SkillCarouselCrawl
} from "../../components";
import { SideTitlePage } from "../../layouts/SideTitlePage/SideTitlePage";
import "./About.scss";
// import { MyParticles } from "../../components/MyParticles/MyParticles";
import { Navbar } from "../../components/Navbar/Navbar";
import { ActivePageName } from "../SamePageLayout.types";
import { BackgroundBoxes } from "../../components/BackgroundBoxes/BackgroundBoxes";

// type Props = {};

export const About: FC<{
  setActivePage: (activePage: ActivePageName) => void;
  activePage: ActivePageName;
  isTopOfPage: boolean;
}> = (props) => {
  return (
    <SideTitlePage pageTitle="About" pageId="about" classNames="about-body-container">
      <>
        <Navbar {...props} />
        <BackgroundBoxes />
        <div className="about_body">
          {/* <MyParticles /> */}
          <h1 className="about_salutations">
            {" "}
            I'm <span>Jordon</span>
          </h1>
          <p className="about_body_text">
            I'm a Web Developer with a Bachelors of Science in Computer Science. I build robust & performant
            web applications for businesses, corporations and other organizations.
          </p>
          <div className="calls-to-action">
            <button
              className="contact-now"
              onClick={() => {
                document.getElementById(`#contact`)?.scrollIntoView({ behavior: "smooth", block: "end" });
              }}
            >
              Contact Now
            </button>
            <a target="_blank" href="https://github.com/JordBant">
              <Icon classNames="offsite-button" iconElement={"GITHUB"} />
            </a>
            <a target="_blank" href="https://linkedin.com/in/jbantin">
              <Icon classNames="offsite-button" iconElement={"LINKEDIN"} />
            </a>
          </div>
        </div>
      </>
    </SideTitlePage>
  );
};

