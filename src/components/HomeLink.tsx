import FloatingText from "./FloatingText";

const HomeLink = () => {
  return (
    <div className="fixedButton">
      <FloatingText
        introText="Jayant"
        afterText="Jayant.Ahluwalia"
        isHello={false}
        speed="fast"
        route="/"
        isHomeLink={true}
      />
    </div>
  );
};

export default HomeLink;
