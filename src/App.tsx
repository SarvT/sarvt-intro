import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Services } from "./components/Services";
import IntroText from "./components/IntroText";
import { Contact } from "./components/Contact";
import DotRing from "./components/cursor-ring/dot.ring";

function App() {
  const [color, setColor] = useState("white");

  const listenScrollEvent = () => {
    if (
      (window.scrollY > 600 && window.scrollY < 1500) ||
      (window.scrollY > 3300 && window.scrollY < 4000)
    ) {
      setColor("black");
    } else if (
      window.scrollY < 500 ||
      (window.scrollY > 1900 && window.scrollY < 3100) ||
      (window.scrollY > 3800 && window.scrollY < 4100)
    ) {
      setColor("white");
    }
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <>
      {/* <h1 className="scrollw">Scroll Position: {scrollPosition}px</h1> */}
      <div className="scroll-w"></div>

      {/* <div className="custom-cursor"></div> */}
      <DotRing/>

      <div className="heading ">
        <h2 className="h-dark">I'm Sarvesh</h2>
        <h2 className="h-light">Developer x Designer</h2>
      </div>

      <div className="home" >
          <IntroText />
        <h3 className="ser-head">Services</h3>
        <Services colour={color} />
        <h3 className="pr-head">Projects</h3>
        <div className="main-pr">
          <div className="tabs">
            <Card title="Muzzer" link="https://github.com/SarvT/muzica" />
            <Card title="Muzzer" link="https://github.com/SarvT/muzica" />
            <Card title="Muzzer" link="https://github.com/SarvT/muzica" />
          </div>
          <div className="tabs">
            <Card title="Muzzer" link="https://github.com/SarvT/muzica" />
            <Card title="Muzzer" link="https://github.com/SarvT/muzica" />
            <Card title="Muzzer" link="https://github.com/SarvT/muzica" />
          </div>
        </div>
        <h3 className="cnt-head">Contact Me</h3>
        <Contact />
      </div>
    </>
  );
}

export default App;
