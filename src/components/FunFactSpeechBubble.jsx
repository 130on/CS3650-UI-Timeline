const FunFactSpeechBubble = ({ children, accentColor, fontFamily }) => {

    let quoteColor;
    if (accentColor === "#ffffff") {
        quoteColor = "#222222";
    } else if (accentColor === "#485785") {
        quoteColor = "#D9E3F1";
    } else {
        quoteColor = "white";
    }

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
                    borderRight: "28px solid transparent",
                }}
            />
            <div
                style={{
                    width: 0,
                    height: 0,
                    position: "absolute",
                    bottom: "-14px",
                    right: "44px",
                    borderTop: `15px solid ${quoteColor}`,
                    borderRight: "20px solid transparent",
                }}
            />
        </div>
    );
}

export default FunFactSpeechBubble;