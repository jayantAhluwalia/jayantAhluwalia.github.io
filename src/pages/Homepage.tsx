import { useEffect, useState } from "react";
import FloatingText from "../components/FloatingText";
import "../index.css";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touch, setTouch] = useState(false);
  const [touchOnText, setTouchOnText] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Change the breakpoint as needed
  };

  const handleTouch = () => {
    if (touchOnText && touch) {
      setTouch(false);
    }

    if (touch && !touchOnText) {
      setTouch(false);
    }
  };

  useEffect(() => {
    handleResize(); // Call it once initially to set the initial state
    handleTouch();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="homepage"
      onTouchEnd={() => (touch ? setTouch(false) : setTouch(true))}
    >
      <div className="float-text" onTouchEnd={() => setTouchOnText(true)}>
        <FloatingText
          introText={"Hello."}
          afterText={"About"}
          isHello={true}
          speed="fast"
          route="/about"
          isMobile={isMobile && touch}
        />
      </div>

      <div className="float-text" onTouchEnd={() => setTouchOnText(true)}>
        <FloatingText
          introText={"I am"}
          afterText={"Work"}
          isHello={false}
          speed="med"
          route="/work"
          isMobile={isMobile && touch}
        />
      </div>
      <div className="float-text" onTouchEnd={() => setTouchOnText(true)}>
        <FloatingText
          introText={"Jayant"}
          afterText={"Contact"}
          isHello={false}
          speed="slow"
          route="/contact"
          isMobile={isMobile && touch}
        />
      </div>
      {isMobile ? <p className="touch">touch anywhere</p> : ""}
    </div>
  );
};

export default Homepage;
