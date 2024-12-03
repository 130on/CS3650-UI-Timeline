import classes from "../assets/darkmode.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
import { motion } from "motion/react";
import FunFactSpeechBubble from "./FunFactSpeechBubble";
import ImageCarousel from "./ImageCarousel";

const DarkModeSection = () => {
  // State to manage visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the paragraph visibility
  const toggleParagraph = () => setIsVisible(!isVisible);


  const DATE = "2010s - Now";
  const BG_COLOR = "#222222";
  const ACCENT_COLOR = "#ffffff";
  const FONT_FAMILY =
    "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
  const IMAGES = [
    "/images/googleDark.jpg",
    "/images/darkmode1.png",
    "/images/darkmode2.jpg",
    "/images/darkmode3.png",
    "/images/darkmode4.png",
  ];

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="dark-mode"
        prevId="flat-design"
        nextId="neumorphism"
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
                Dark Mode
              </h1>
              <h2
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
                className="fs-4 mb-4"
              >
                Simple and readable
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
                      Dark mode can significantly save battery life on devices.
                      This is because OLED screens can turn off individual pixels
                      displaying pure black, meaning when you use dark mode 
                      on an OLED screen, the black pixels essentially "turn off"
                      and consume no power,
                      leading to increased battery efficiency
                    </FunFactSpeechBubble>
                  </div>

                  {/* Background Info */}
                  <h2 style={{ color: ACCENT_COLOR }}>Background Info</h2>
                  <p style={{ color: "#bbbbbb", fontSize: "14pt" }}>
                    Dark mode is a feature that changes the color scheme of an
                    application or website from light to dark.
                    It's a popular option for those who prefer a less bright and
                    more subdued interface.
                    With dark mode, the background is typically black or dark
                    gray, and the text and icons are white or light.
                    This can reduce eye strain, especially in low-light
                    environments. Additionally, some people find it more
                    aesthetically pleasing and easier to read.
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

export default DarkModeSection;
