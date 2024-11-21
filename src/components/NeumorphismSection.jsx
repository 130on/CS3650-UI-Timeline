import classes from "../assets/neumorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";

const NeumorphismSection = () => {
  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection date="2020s" bgColor="#D9E3F1" timelineColor="#485785">
        <div id="neumorphism" className="container py-4">
          <h1 className="h1" style={{ color: "#485785" }}>
            Neumorphism
          </h1>
          <button className="btn btn-primary">Button</button>
        </div>
      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default NeumorphismSection;
