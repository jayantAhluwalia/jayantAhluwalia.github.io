import { useState } from "react";
import FloatingTextType from "../constant";

const FloatingText = (props: FloatingTextType) => {
  const { introText, afterText, isHello, speed} = props;
  const [text, setText] = useState(introText);
  const handleHover = (e: any) => {
    e.target.classList.add("slide");
    setText(afterText);
  };

  const handleSpeed = (speed: string) => {
    switch (speed) {
      case "fast":
        return "animate-fast"
        break;
      case "med":
        return "animate-med"
        break
      case "slow":
        return "animate-slow"
        break
      default:
        break;
    }
  }

  return (
    <div className="hello-text">
      <h1
        className={handleSpeed(speed) + (isHello ? " no-red-text" : "")}
        onMouseOver={handleHover}
        onMouseLeave={() => setText(introText)}
      >
        {text}
      </h1>
    </div>
  );
};

export default FloatingText;
