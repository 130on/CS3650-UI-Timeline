import { motion } from "framer-motion";
import ReactDOM from "react-dom";

const ImageModal = ({ image, isOpen, onClose, accentColor, fontFamily }) => {
    if (!isOpen) return null;

    let bgColor;
    if (accentColor === "#ffffff") {
        bgColor = "#303030";
    } else if (accentColor === "#485785") {
        bgColor = "#D9E3F1";
    } else {
        bgColor = "white";
    }

    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                style={{
                    backgroundColor: bgColor,
                    borderRadius: fontFamily === "Times New Roman, Times, serif" ? "" : "1.5rem",
                    padding: "65px",
                    maxHeight: "100vh",
                    maxWidth: "800px",
                    width: "100%",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                    position: "relative",
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "0px",
                        right: "10px",
                        background: "none",
                        border: "none",
                        fontSize: "4rem",
                        lineHeight: "1",
                        cursor: "pointer",
                        color: "#aaa",
                    }}
                >
                    &times;
                </button>

                {/* Modal Content */}
                <img
                    src={image}
                    alt="Preview"
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
            </motion.div>
        </div>,
        document.body
    );
}

export default ImageModal;