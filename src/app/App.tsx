import { useEffect, useRef, useState } from "react";
import { About, Contact, Projects } from "../pages";
import { Experince } from "../pages/Experience/Experince";
import { ScrollTraceBeam } from "../components/ScrollTraceBeam/ScrollTraceBeam";
import "./styles/App.scss";
import { LoadingPage } from "../components/LoadingPage/LoadingPage";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    // <Routes>
    //   <Route path="*" element={
    //   } />
    // </Routes>
    // <div style={{minWidth: '100vw'}}>
    <ScrollTraceBeam>
      <LoadingPage isLoaded={isLoaded} />
      <>
        <About id={"about"} ref={aboutRef} />
        <Experince id={"experience"} ref={experienceRef} />
        <Projects />
        <Contact />
      </>
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

