import { About, Contact, Projects } from ".";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SkillCarouselCrawl } from "../components";
// import { CustomCursor } from "../components/CustomCursor/CustomCursor";
import { ActivePageName } from "./SamePageLayout.types";

export const SamePageLayout = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const goToSection = useNavigate();

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [activePage, setActivePage] = useState<ActivePageName>(location.pathname.slice(1) as ActivePageName);

  useEffect(() => {
    /**
     * When accessing the site, extract the pathname and navigate to
     * that section via its ref
     *
     * Remove the leading '/'
     */
    const section = location.pathname.slice(1);
    const targetRef = getSectionRef(section);

    if (targetRef) {
      targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
    /**
     * Update and navigate to a given "route"
     * depending on your scroll position
     */
    const handleScroll = () => {
      /**
       * Instantiating variables for ref's
       * offsets and scroll position
       */
      const scrollPosition = window.scrollY;
      const aboutRefOffset = aboutRef.current!.offsetTop;
      const projectsRefOffset = projectsRef.current!.offsetTop;
      const contactRefOffset = contactRef.current!.offsetTop;

      if (scrollPosition >= aboutRefOffset && scrollPosition < projectsRefOffset) {
        setActivePage("about");
        goToSection("/jordondev/about");
      } else if (scrollPosition >= projectsRefOffset && scrollPosition < contactRefOffset) {
        setActivePage("projects");
        goToSection("/jordondev/projects");
      } else if (scrollPosition > contactRefOffset) {
        setActivePage("contact");
        goToSection("/jordondev/contact");
      }
    };

    window.addEventListener("scroll", () => {
      // const offset = aboutRef.current!.offsetTop + 300;
      /**
       * Using 250 since its always going
       * to be near the top of the page
       * (aboutRef.current!.offsetTop + 250 = 250)
       */
      if (window.scrollY <= 250) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
      handleScroll();
    });

    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY <= aboutRef.current!.offsetTop + 300) {
          setIsTopOfPage(true);
        } else {
          setIsTopOfPage(false);
        }
        handleScroll();
      });
    };
  }, []);
  /**
   * Get section ref depending on pathname
   */
  const getSectionRef = (section: string) => {
    switch (section) {
      case "projects":
        return projectsRef;
      case "contact":
        return contactRef;
      case "about":
        return aboutRef;
    }
  };

  return (
    <>
      {/* <CustomCursor /> */}
      <section ref={aboutRef}>
        <About isTopOfPage={isTopOfPage} activePage={activePage} setActivePage={setActivePage} />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <SkillCarouselCrawl />
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
};

