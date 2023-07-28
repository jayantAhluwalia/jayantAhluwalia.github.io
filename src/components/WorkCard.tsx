import { useState } from "react";
import { workDetail } from "../constant";

const WorkCard = (props: workDetail) => {
  const { title, projectName, keyPoints } = props;
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="work-card"
    >
      <h1>{title}</h1>
      <p>{projectName}</p>
      {show && (
        <ul>
          {keyPoints.map((points, idx) => {
            return <li>{points}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default WorkCard;
