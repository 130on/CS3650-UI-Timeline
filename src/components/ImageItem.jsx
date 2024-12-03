import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageModal from "./ImageModal";

const ImageItem = ({ image, accentColor, fontFamily }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <motion.div 
                onHoverStart={() => setShowOverlay(true)}
                onHoverEnd={() => setShowOverlay(false)}
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    height: "125px",
                    width: "200px",
                    borderRadius: fontFamily === "Times New Roman, Times, serif" ? "" : "1.5rem",
                }}
            >
                <AnimatePresence>                
                    {showOverlay && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: "absolute",
                                inset: "0",
                                zIndex: "10",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div 
                                style={{position: "absolute", 
                                    backgroundColor: "black", 
                                    pointerEvents: "none", 
                                    opacity: "0.5", 
                                    height: "100%", 
                                    width: "100%"
                                }} 
                            />
                            <motion.button 
                                initial={{ y: 10 }}
                                animate={{ y: 0 }}
                                exit={{ y: 10 }}
                                onClick={() => setModalOpen(true)}
                                style={{
                                    color: "black",
                                    fontFamily: fontFamily,
                                    border: "none",
                                    backgroundColor: "white",
                                    fontWeight: "bold",
                                    zIndex: "10",
                                    padding: "0.5rem 1rem",
                                    borderRadius: fontFamily === "Times New Roman, Times, serif" ? "" : "1.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5ch",
                                }}
                            >
                                Enlarge Image
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
                <img src={image} alt={image} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </motion.div>

            <AnimatePresence>
                {isModalOpen && (
                    <ImageModal image={image} isOpen={isModalOpen} onClose={() => setModalOpen(false)} accentColor={accentColor} fontFamily={fontFamily} />
                )}
            </AnimatePresence>
        </>
    );
}

export default ImageItem;