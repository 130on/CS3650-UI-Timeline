import classes from "../assets/neumorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NeumorphismSection = () => {
  // State to manage visibility of the paragraph and modal
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the paragraph and modal visibility
  const toggleParagraph = () => setIsVisible(!isVisible);

  const DATE = "2020s";
  const BG_COLOR = "#D9E3F1";
  const ACCENT_COLOR = "#485785";
  const FONT_FAMILY =
    "Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="neumorphism"
        prevId="dark-mode"
      >
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Starting state
            animate={{ opacity: 1, y: 0 }} // Ending state
            exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <div className="container py-4">
              <h1
                className="h1"
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
              >
                Neumorphism
              </h1>
              <h2
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
                className="fs-4 mb-4"
              >
                A new era
              </h2>
              <button className="btn btn-primary" onClick={toggleParagraph}>
                {" "}
                {isVisible ? "Hide" : "Show"} Background
              </button>
            </div>
          </motion.div>
        )}

        <section>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                className="container py-4"
                initial={{ opacity: 0, y: -20 }} // Starting state
                animate={{ opacity: 1, y: 0 }} // Ending state
                exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
              >
                <div style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>
                  <p>
                    Neumorphism is basically “New Skeuomorphism” (skeumorphism
                    with a modern twist). <br />
                    It’s got a bit of a “soft” look and feel that reminds a bit
                    of flat design. <br />
                    Even though it relates to skeuomorphism, there is a new
                    focus in the entire UI design style with neumorphism. <br />
                    This focus is not necessarily on the contrast or similarity
                    between the real and digital worlds, but rather the color
                    palette.
                  </p>
                </div>

                <div style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>
                  <p>
                    As a trend, neumorphism is said to have been kicked off by
                    one particular Dribbble shot that went viral. The designer
                    behind it encouraged fellow designers to “Imagine that we
                    live in a dimension where skeuomorph is still alive and has
                    continued its evolution in mobile interfaces. What would
                    applications look like then? Here is my vision.”
                  </p>
                </div>

                <button className="btn btn-primary" onClick={toggleParagraph}>
                  {" "}
                  {isVisible ? "Hide" : "Show"} Background
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default NeumorphismSection;
