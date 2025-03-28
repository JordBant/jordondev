import { useRef } from "react";
import { Section } from "../components/SidebarNavBubbles/SidebarNavBubbles.types";
import { About, Projects } from "../pages";
import { Experince } from "../pages/Experience/Experince";
import { ScrollTraceBeam } from "../components/ScrollTraceBeam/ScrollTraceBeam";
import "./styles/App.scss";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const allSections: Section[] = [
    {
      id: "about",
      ref: aboutRef,
      label: "About Me",
    },
    {
      id: "experience",
      ref: experienceRef,
      label: "My Experience",
    },
  ];

  return (
    // <Routes>
    //   <Route path="*" element={
    //   } />
    // </Routes>
    // <div style={{minWidth: '100vw'}}>
    <ScrollTraceBeam>
      <About id={"about"} ref={aboutRef} />
      <Experince id={"experience"} ref={experienceRef} />
      <Projects />
    </ScrollTraceBeam>
    // </div>
    // <>
    //   <SidebarNavBubbles sections={allSections} />
    //   <About id={"about"} ref={aboutRef} />
    //   <Experince id={"experience"} ref={experienceRef} />
    // </>
  );
}

export default App;

