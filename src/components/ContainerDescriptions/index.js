import { useState } from "react";
import { Button } from "../Button";
import "./style.css";

const ContainerDescriptions = ({ descriptions }) => {
  const data = [
    {
      id: 0,
      cast: "RAMI MALEK",
    },
    {
      id: 1,
      cast: "GWILYM LEE",
    },
    {
      id: 2,
      cast: "LUCY BOYNTON",
    },
    {
      id: 3,
      cast: "JOSEPH MAZZELO",
    },
  ];

  const [moreText, setMoreText] = useState(false);

  return (
    <div className="container-section-description">
      <div className="content-section-description">
        <h2 className="title-section-description">Description</h2>
        <p className="description-section">
          {descriptions}
          {moreText ? " mais textos" : "..."}
          {moreText ? (
            <span id="more" onClick={() => setMoreText(false)}>
              {" "}
              Less
            </span>
          ) : (
            <span id="more" onClick={setMoreText}>
              {" "}
              More
            </span>
          )}
        </p>
        <h2 className="title-section-description">Director</h2>
        <div className="container-tags">
          <div className="border-tag">
            <span className="content-tag">BRUAB SINGER</span>
          </div>
        </div>
        <h2 className="title-section-description">Cast</h2>
        <div className="container-tags">
          {data.map(({ id, cast }) => {
            return (
              <div key={id} className="border-tag">
                <span className="content-tag">{cast}</span>
              </div>
            );
          })}
        </div>
        <Button children="Watch movie" />
      </div>
    </div>
  );
};

export { ContainerDescriptions };
