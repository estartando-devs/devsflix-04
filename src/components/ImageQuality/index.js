import React from "react";
import "./style.css";

export const ImageQuality = (props) => {
  const { resolution } = props;
  return (
    <section>
      <div className="quality-container">
        <span className="resolution">{resolution} p</span>
      </div>
    </section>
  );
};
