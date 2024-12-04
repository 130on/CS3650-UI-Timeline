import { useState } from "react";
import "../App.css";
import classes from "../assets/skeuomorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import { motion } from "motion/react";
import FunFactSpeechBubble from "./FunFactSpeechBubble";
import ImageCarousel from "./ImageCarousel";

const SkeuomorphismSection = () => {
  // State to manage visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the paragraph visibility
  const toggleParagraph = () => setIsVisible(!isVisible);

  const DATE = "2007 - 2013";
  const BG_COLOR = "#ffffff";
  const ACCENT_COLOR = "#2FA4E7";
  const FONT_FAMILY =
    "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
  const IMAGES = [
    "/images/skeuomorphism1.jpg",
    "/images/skeuomorphism2.png",
    "/images/skeuomorphism3.jpg",
    "/images/skeuomorphism4.jpg",
  ];

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="skeuomorphism"
        prevId="early-web"
        nextId="flat-design"
      >
        {!isVisible && (
          <motion.div
            className="container text-center py-4"
            initial={{ opacity: 0 }} // Starting state
            animate={{ opacity: 1 }} // Ending state
            exit={{ opacity: 0 }} // Exit state (if needed)
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          >
            <div className="container py-4">
              <h1
                className="h1"
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
              >
                Skeuomorphism
              </h1>
              <h2
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
                className="fs-4 mb-4"
              >
                Mimics the real world
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
                      Skeuomorphism began to take shape in the 1980s.
                      One of its earliest proponents was Steve Jobs of Apple. The
                      idea was simple; computer interfaces would be much more
                      intuitive to users if skeuomorphic design were applied.
                    </FunFactSpeechBubble>
                  </div>

                  {/* Background Info */}
                  <h2 style={{ color: ACCENT_COLOR }}>Background Info</h2>
                  <p style={{ fontSize: "14pt" }}>
                    Skeuomorphism is where an object in software mimics its
                    real-world counterpart. Skeuomorphism helped a generation through the learning curve
                    of coming to grips with a digital era.
                    But, it also began to hold us back.We became familiar with
                    the concepts and they entered the language and our
                    day-to-day lives but skeuomorphic design led to huge amounts of clutter on
                    the desktop.
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

export default SkeuomorphismSection;
