import { useEffect, useState } from "react";
import FloatingText from "../components/FloatingText";
import "../index.css";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touch, setTouch] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Change the breakpoint as needed
  };

  const handleTouch = () => {
    if (touch) {
      setTouch(false);
      return;
    }
    setTouch(true);
  };

  useEffect(() => {
    handleResize(); // Call it once initially to set the initial state

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="homepage" onTouchStart={handleTouch}>
      <FloatingText
        introText={"Hello."}
        afterText={"About"}
        isHello={true}
        speed="fast"
        route="/about"
        isMobile={isMobile && touch}
      />
      <FloatingText
        introText={"I am"}
        afterText={"Work"}
        isHello={false}
        speed="med"
        route="/work"
        isMobile={isMobile && touch}
      />
      <FloatingText
        introText={"Jayant"}
        afterText={"Contact"}
        isHello={false}
        speed="slow"
        route="/contact"
        isMobile={isMobile && touch}
      />
      {isMobile ? <p className="touch">touch anywhere</p> : ""}
    </div>
  );
};

export default Homepage;
