import classes from "../assets/neumorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
import { motion } from "motion/react";
import FunFactSpeechBubble from "./FunFactSpeechBubble";
import ImageCarousel from "./ImageCarousel";

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
  const IMAGES = [
    "/images/googleNeuomorphism.png",
    "/images/neumorphism1.png",
    "/images/neumorphism2.png",
    "/images/neumorphism3.png",
    "/images/neumorphism4.png",
  ];
  
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
            initial={{ opacity: 0 }} // Starting state
            animate={{ opacity: 1 }} // Ending state
            exit={{ opacity: 0 }} // Exit state (if needed)
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <div className="container text-center py-4">
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
                <button className="btn btn-primary" onClick={toggleParagraph}>
                  {" "}
                  {isVisible ? "Hide" : "Show"} Background
                </button>
              </div>

              <div className="mb-4">
                <div style={{ fontFamily: FONT_FAMILY }}>
                  {/* Fun Fact Section */}
                  <div className="float-end">
                    <FunFactSpeechBubble accentColor={ACCENT_COLOR} fontFamily={FONT_FAMILY} >
                      As a trend, neumorphism is said to have been kicked off by
                      one particular Dribbble shot that went viral. The designer
                      behind it encouraged fellow designers to “Imagine that we
                      live in a dimension where skeuomorph is still alive and has
                      continued its evolution in mobile interfaces. What would
                      applications look like then? Here is my vision.”
                    </FunFactSpeechBubble>
                  </div>

                  {/* Background Info */}
                  <h2 style={{ color: ACCENT_COLOR }}>Background Info</h2>
                  <p style={{ fontSize: "14pt" }}>
                    Neumorphism is basically “New Skeuomorphism” (skeumorphism
                    with a modern twist).
                    It’s got a bit of a “soft” look and feel that reminds a bit
                    of flat design.
                    Even though it relates to skeuomorphism, there is a new
                    focus in the entire UI design style with neumorphism.
                    This focus is not necessarily on the contrast or similarity
                    between the real and digital worlds, but rather the color
                    palette.
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

export default NeumorphismSection;
