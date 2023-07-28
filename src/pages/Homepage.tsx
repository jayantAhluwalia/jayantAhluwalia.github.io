import FloatingText from "../components/FloatingText";
import "../index.css";

const Homepage = () => {
  return (
    <>
      <FloatingText
        introText={"Hello."}
        afterText={"About"}
        isHello={true}
        speed="fast"
        route="/about"
      />
      <FloatingText
        introText={"I am"}
        afterText={"Work"}
        isHello={false}
        speed="med"
        route="/work"
      />
      <FloatingText
        introText={"Jayant"}
        afterText={"Contact"}
        isHello={false}
        speed="slow"
        route="/contact"
      />
    </>
  );
};

export default Homepage;
