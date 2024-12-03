const FunFactSpeechBubble = ({ children, accentColor, fontFamily }) => {
    return (
        <div
            style={{
                width: "250px",
                border: `3px solid ${accentColor}`,
                fontFamily: fontFamily,
                position: "relative",
                marginLeft: "1.5rem",
                marginBottom: "1.5rem",
                padding: "0.8rem",
                borderRadius: fontFamily === "Times New Roman, Times, serif" ? "" : "1.5rem",
                boxShadow: fontFamily === "Times New Roman, Times, serif" ? "10px 10px 0 rgba(0, 0, 0, 0.2)" : "10px 10px 30px rgba(0, 0, 0, 0.3)",
            }}
        >
            <h5 style={{ color: accentColor }}>Fun Fact</h5>
            <p style={{ marginBottom: "0", color: accentColor === "#ffffff" ? "#bbbbbb" : "", fontSize: "10pt" }}>
                {children}
            </p>
            <div
            style={{
                width: 0,
                height: 0,
                position: "absolute",
                bottom: "-20px",
                right: "40px",
                borderTop: `20px solid ${accentColor}`,
                borderRight: "20px solid transparent",
            }}
            ></div>
        </div>
    );
}

export default FunFactSpeechBubble;