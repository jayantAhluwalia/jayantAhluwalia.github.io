import { Link } from "react-router-dom";
import HomeLink from "../components/HomeLink";
import Para from "../components/Para";
import { aboutPageContent } from "../constant";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">
        I Build Modern <br /> Digital Products.
      </h1>
      <h2 className="about-sub-title">
        I'm a software engineer with great expertise in backend development and
        frontend development as well. I had an experience with working diverse
        technology and languages such as Golang, TypeScript, Ruby on Rails,
        React, Redux, and Material UI. I am strongly focused on writing clean
        and scalable code.
      </h2>

      {aboutPageContent.map((content, idx) => {
        return <Para content={content} first={idx === 0} />;
      })}
      <HomeLink />
      <div className="download-link">
        <a
          href="public/Full stack developer - Jayant Ahluwalia.pdf"
          download={"Full stack developer - Jayant Ahluwalia"}
          className="download-link"
        >
          Click to download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
