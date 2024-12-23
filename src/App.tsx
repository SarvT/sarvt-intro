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
            <Card title="PoojaBox" link="https://pooja-box.vercel.app/" img="/assets/poojabox-img.png"/>
            <Card title="ZueCare" link="https://zuecare.vercel.app/" img="/assets/zue-img.png"/>
            <Card title="Squenner" link="https://squenner-sarvts-projects.vercel.app/" img="/assets/squenner-img.png"/>
          </div>
          <div className="tabs">
            <Card title="Labily" link="https://labily.vercel.app/" img="/assets/labily-img.png"/>
            <Card title="VizzyFy" link="https://vizzyfy.vercel.app/" img="/assets/vizzfy-img.png"/>
            <Card title="Muzica" link="https://github.com/SarvT/muzica" img="/assets/muzica-img.png"/>
          </div>
        </div>
        <h3 className="cnt-head">Contact Me</h3>
        <Contact />
      </div>
    </>
  );
}

export default App;
