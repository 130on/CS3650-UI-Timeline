import { motion, animate, useMotionValue } from "framer-motion";
import ImageItem from "./ImageItem";
import useMeasure from "react-use-measure"
import { useEffect, useState } from "react";

const ImageCarousel = ({ images, accentColor, fontFamily }) => {
    const GAP = 25;
    const FAST_DURATION = images.length * 5;
    const SLOW_DURATION = 100;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -(width / 2 + (GAP / 2));

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear", 
                duration: duration * (1 - xTranslation.get() / finalPosition), 
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear", 
                duration: duration, 
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        

        return controls?.stop;
    }, [xTranslation, width, duration, rerender])

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden", // Ensures the carousel stays within its container
                width: "100%", // Ensures it respects its parent's width
            }}
        >
            <motion.div 
                ref={ref}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
                style={{
                    display: "flex",
                    gap: `${GAP}px`,
                    x: xTranslation,
                    width: "max-content", // Prevent shrinking of items
                }}
            >
                {[...images, ...images].map((item, index) => (
                    <ImageItem key={index} image={item} accentColor={accentColor} fontFamily={fontFamily} />
                ))}
            </motion.div>
        </div>
    );
}

export default ImageCarousel;