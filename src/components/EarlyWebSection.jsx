import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
import { motion } from "motion/react";
import FunFactSpeechBubble from "./FunFactSpeechBubble";
import ImageCarousel from "./ImageCarousel";

const EarlyWebSection = () => {
  // State to manage visibility of the paragraph and modal
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the paragraph and modal visibility
  const toggleParagraph = () => setIsVisible(!isVisible);

  const DATE = "1990s";
  const BG_COLOR = "#ffffff";
  const ACCENT_COLOR = "#000000";
  const FONT_FAMILY = "Times New Roman, Times, serif";
  const IMAGES = [
    "/images/earlyweb1.png",
    "/images/earlyweb2.png",
    "/images/earlyweb3.png",
    "/images/earlyweb4.jpg",
  ];

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="early-web"
        nextId="skeuomorphism"
      >
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0 }} // Starting state
            animate={{ opacity: 1 }} // Ending state
            exit={{ opacity: 0 }} // Exit state (if needed)
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <div className="container text-center py-4">
              <h1 style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>
                EarlyWeb
              </h1>
              <h2
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
                className="fs-4 mb-4"
              >
                Raw HTML styling
              </h2>
              <button onClick={toggleParagraph}>
                {" "}
                {isVisible ? "Hide" : "Show"} Background
              </button>
            </div>
          </motion.div>
        )}

        <section>
          {isVisible && (
            <motion.div
              className="container py-4"
              initial={{ opacity: 0 }} // Starting state
              animate={{ opacity: 1 }} // Ending state
              exit={{ opacity: 0 }} // Exit state (if needed)
              transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              style={{ width: "70%" }}
            >

              <div className="text-center mb-4">
                <button onClick={toggleParagraph}>
                  {" "}
                  {isVisible ? "Hide" : "Show"} Background
                </button>
              </div>

              <div className="mb-4">
                <div style={{ fontFamily: FONT_FAMILY }}>
                  {/* Fun Fact Section */}
                  <div className="float-end">
                    <FunFactSpeechBubble accentColor={ACCENT_COLOR} fontFamily={FONT_FAMILY} >
                      The world’s first website was created By Tim Berners-Lee on
                      August 6, 1991 and is still online. Although its not much by
                      todays standards, its the grandparent of all websites ever.<br />
                      <a
                        href="https://line-mode.cern.ch/www/hypertext/WWW/TheProject.html"
                        target="_blank"
                      >
                        Check it out!
                      </a>
                    </FunFactSpeechBubble>
                  </div>

                  {/* Background Info */}
                  <h2 style={{ color: ACCENT_COLOR }}>Background Info</h2>
                  <p style={{ fontSize: "14pt" }}>
                    Early web design in the 1990s was simple and text-based,
                    with static HTML pages and minimal graphics due to slow
                    internet speeds.
                    Layouts relied on tables, fonts were limited to system
                    defaults, and bright colors or animated GIFs were common.
                    Cross-browser compatibility was a challenge during
                    the "browser wars," and the introduction of CSS in the
                    mid-1990s began improving design flexibility.
                    This era set the stage for modern web development.
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <ImageCarousel images={IMAGES} accentColor={ACCENT_COLOR} fontFamily={FONT_FAMILY} />
              </div>
            </motion.div>
          )}
        </section>
      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default EarlyWebSection;
