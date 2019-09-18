import React, { useState, useEffect } from "react";
import headerVideo from "../imgs/headervideo2.mp4";

const Header = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    window.addEventListener("resize", handleResize);
    return _ => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header
      style={{
        width: "100%",
        margin: 0,
        height: "100vh",
        marginBottom: "2rem"
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100vh",
          margin: 0,
          objectFit: "fill",
          position: "absolute",
          zIndex: -1
        }}
      >
        <source src={headerVideo} type="video/mp4"></source>
      </video>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          margin: "auto",
          textAlign: "center"
        }}
      >
        {dimensions.width + " x " + dimensions.height}
      </h1>
    </header>
  );
};

export default Header;
