import { useEffect, useState } from "react";
import { About, Contact, Projects } from "../pages";
import { Experience } from "../pages/Experience/Experince";
import { ScrollTraceBeam } from "../components/ScrollTraceBeam/ScrollTraceBeam";
import { LoadingPage } from "../components/LoadingPage/LoadingPage";
import "./styles/App.scss";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <ScrollTraceBeam>
      <LoadingPage isLoaded={isLoaded} />
      <>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </>
    </ScrollTraceBeam>
  );
}

export default App;

