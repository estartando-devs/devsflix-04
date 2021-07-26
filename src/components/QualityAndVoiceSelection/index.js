import React from "react";
import "./style.css";
import "../../components/ImageQuality";
import { ImageQuality } from "../../components/ImageQuality";
import { Button } from "../Button";

export const QualityAndVoiceSelection = () => {
  const optionResolution = [
    { resolution: "720" },
    { resolution: "1080" },
    { resolution: "1440" },
    { resolution: "720" },
    { resolution: "1080" },
    { resolution: "1440" },
  ];

  const languageVariations = [
    { language: "Russian" },
    { language: "English" },
    { language: "Spanish" },
  ];

  return (
    <div className="container-master">
      <div className="rectangle"></div>
      <div>
        <p className="title">Bohemian Rhapsody</p>
        <p className="text-quality">Quality</p>
      </div>
      <div className="container-image-quality">
        <div className="content-image-quality">
          {optionResolution.map(({ resolution }, index) => (
            <ImageQuality key={index} resolution={resolution} />
          ))}
        </div>

        <div className="language-container">
          <p className="text-voice-acting">Voice acting</p>
        </div>

        {languageVariations.map(({ language }, index) => {
          return (
            <div className="container-input-language" key={index}>
              <span className="text-language">{language}</span>
              <>
                <input className="input-check" type="checkbox"></input>
              </>
            </div>
          );
        })}
        <div className="container-button">
          <Button size>Download movie</Button>
        </div>
      </div>
    </div>
  );
};
