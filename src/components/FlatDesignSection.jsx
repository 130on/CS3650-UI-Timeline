import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
import { motion } from "motion/react";
import FunFactSpeechBubble from "./FunFactSpeechBubble";
import ImageCarousel from "./ImageCarousel";

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
  const IMAGES = [
    "/images/flatdesign1.png",
    "/images/flatdesign2.png",
    "/images/flatdesign3.jpg",
    "/images/Zune.png",
  ];

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
                      Microsoft’s ill-fated Zune MP3 player, launched back in 2006, is a great
                      example of early digital flat design.
                    </FunFactSpeechBubble>
                  </div>

                  {/* Background Info */}
                  <h2 style={{ color: ACCENT_COLOR }}>Background Info</h2>
                  <p style={{ fontSize: "14pt" }}>
                    Flat design is a style of interface design that rejects the 3D elements of skeuomorphism. 
                    It does not abandon it but rather focuses on rendering objects in flat minimalist form. 
                    It avoids the excessive use of gradients, textures, and drop shadows designed to deliver 3D effects 
                    for simpler elements, focusing on simple flat elements, typography, and flat color schemes.
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

export default FlatDesignSection;
