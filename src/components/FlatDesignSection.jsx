import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FlatDesignSection = () => {
  // State to manage visibility of the paragraph and modal
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the paragraph and modal visibility
  const toggleParagraph = () => setIsVisible(!isVisible);

  const DATE = "2013 - 2017";
  const BG_COLOR = "#ffffff";
  const ACCENT_COLOR = "#212529";
  const FONT_FAMILY =
    "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="flat-design"
        prevId="skeuomorphism"
        nextId="dark-mode"
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
                Flat Design
              </h1>
              <h2
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
                className="fs-4 mb-4"
              >
                Free from clutter
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
                    Flat design is a style of interface design that rejects the
                    3D elemenes of skeuomorphism. <br />
                    It does not abandon in but rather focuses on rendering
                    objects in flat minimalist form. <br />
                    It avoids the excessive use of gradients, textures, and drop
                    shadows <br />
                    designed to deliver 3D effects for simpler elements focusing
                    on simple flat elements, typography and glat color schemes.
                  </p>
                </div>

                <div style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>
                  <p>
                    Microsoft’s ill-fated Zune MP3 player which was launched
                    back in 2006, is a good example of early digital flat
                    design.
                  </p>
                  <img
                    src="../../public/images/Zune.png"
                    alt="zune mp3 player"
                  />
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

export default FlatDesignSection;
