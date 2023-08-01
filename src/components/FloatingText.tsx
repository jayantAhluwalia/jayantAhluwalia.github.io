import { useEffect, useState } from "react";
import FloatingTextType from "../constant";
import { Link } from "react-router-dom";

const FloatingText = (props: FloatingTextType) => {
  const { introText, afterText, isHello, speed, route, isHomeLink, isMobile } =
    props;
  const [text, setText] = useState(introText);
  const handleHover = (e: any) => {
    e.target.classList.add("slide");
    setText(afterText);
  };

  const handleSpeed = (speed: string) => {
    switch (speed) {
      case "fast":
        return "animate-fast";
      case "med":
        return "animate-med";
      case "slow":
        return "animate-slow";
      default:
        break;
    }
  };

  useEffect(() => {
    if (isMobile) {
      setText(afterText);
    }
    if (!isMobile) {
      setText(introText);
    }
  }, [isMobile]);

  return (
    <div className={isHomeLink ? "home-link" : "hello-text"}>
      <h1
        className={handleSpeed(speed) + (isHello ? " no-red-text" : "")}
        onMouseOver={handleHover}
        onMouseLeave={() => setText(introText)}
      >
        <Link
          to={route as string}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {text}
        </Link>
      </h1>
    </div>
  );
};

export default FloatingText;
