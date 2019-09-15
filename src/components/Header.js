import React from "react";

const Header = () => {
  return (
    <header style={{ width: "100%", margin: 0 }}>
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100vh", margin: 0, objectFit: "fill" }}
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        ></source>
      </video>
    </header>
  );
};

export default Header;
