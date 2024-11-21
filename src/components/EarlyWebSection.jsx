import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, {useState} from "react";

const EarlyWebSection = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection date="1990s" bgColor="#ffffff" timelineColor="#000000">
        <div id="early-web" className="container py-4">
          <button className="btn btn-primary" onClick={toggleContentVisibility}>
            {isContentVisible ? "Hide content" : "Show Content"}
          </button>

          {isContentVisible && (
            <div className="content mt-4">
              <h1>EarlyWeb</h1>
              <p>
                Dark mode is a theme that uses darker colors to reduce strain on the eyes,
                especially in low-light conditions.
              </p>
            </div>
          )}
        </div>
      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default EarlyWebSection;
