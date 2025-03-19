import { LegacyRef, useRef } from "react";
import { SidebarNavBubbles } from "../components/SidebarNavBubbles";
import { Section } from "../components/SidebarNavBubbles/SidebarNavBubbles.types";
import { About } from "../pages";
import "./styles/App.scss";
import { IconGrid } from "../components/IconGrid/IconGrid";
import { Experince } from "../pages/Experience/Experince";

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
    <>
      <SidebarNavBubbles sections={allSections} />
      <About id={"about"} ref={aboutRef} />
      <Experince id={"experience"} ref={experienceRef} />
    </>
  );
}

export default App;

