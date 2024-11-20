const TimeLine = ({ color }) => {
    return (
        <div
        style={{
          position: "absolute",
          left: "40px", // Adjust the left position to where you want the line
          top: "0",
          height: "100%", // Full height of the section
          width: "10px", // Line width
          backgroundColor: color, // Line color
        }}
      />
    );
}

export default TimeLine;