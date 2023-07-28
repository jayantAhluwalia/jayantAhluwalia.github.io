import FloatingText from "../components/FloatingText";

const Homepage = () => {
  return (
    <>
      <FloatingText introText={"Hello."} afterText={"About"} isHello={true} speed="fast"/>
      <FloatingText introText={"I am"} afterText={"Work"} isHello={false} speed="med"/>
      <FloatingText introText={"Jayant"} afterText={"Contact"} isHello={false} speed="slow"/>
    </>
  );
};

export default Homepage;
