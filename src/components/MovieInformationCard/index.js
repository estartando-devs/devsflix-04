import React from "react";
import "./style.css";

export const MovieInformationCard = () => {
  return (
    <div className="container-main">
      <div className="container-movie-info">
        <div className="container-content">
          <img id="icons" src="/assets/svg/icon-calendar.svg" alt="icons" />
          <span className="text-icon">2018</span>
        </div>

        <div className="container-content">
          <img id="icons" src="/assets/svg/icon-clock.svg" alt="icons" />
          <span className="text-icon">USA</span>
        </div>

        <div className="container-content">
          <img id="icons" src="/assets/svg/icon-sound.svg" alt="icons" />
          <span className="text-icon">125 Мин</span>
        </div>

        <div className="container-content">
          <img id="icons" src="/assets/svg/icon-world.svg" alt="icons" />
          <span className="text-icon">Rus | En</span>
        </div>
        <div className="container-icons-footer">
          <img
            className="icons-footer"
            src="/assets/svg/icon-ultra-footer.svg"
            alt="icons"
          />
          <img
            className="icons-footer"
            src="/assets/svg/icon-dolby-footer.svg"
            alt="icons"
          />
        </div>
      </div>
    </div>
  );
};
