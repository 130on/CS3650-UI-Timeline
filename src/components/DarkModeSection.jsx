import classes from "../assets/darkmode.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";

const DarkModeSection = () => {
  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date="2010s - Present"
        bgColor="#222222"
        timelineColor="#ffffff"
      >
        <div id="dark-mode" className="container py-4">
          <h1 className="h1 text-white">Dark Mode</h1>
          <button className="btn btn-primary">Button</button>
        </div>
      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default DarkModeSection;
