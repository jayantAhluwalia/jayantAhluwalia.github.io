import FloatingText from "../components/FloatingText";
import HomeLink from "../components/HomeLink";
import WorkCard from "../components/WorkCard";
import { workContent } from "../constant";

const Work = () => {
  return (
    <div className="work-page">
      <h1 className="work-page-title">Work</h1>
      <div className="work-page-cont">
        {workContent.map((content, idx) => {
          return (
            <WorkCard
              title={content.title}
              projectName={content.projectName}
              keyPoints={content.keyPoints}
            />
          );
        })}
      </div>
      <HomeLink />
    </div>
  );
};

export default Work;
