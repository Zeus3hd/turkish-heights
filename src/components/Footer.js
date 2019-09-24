import React, { useState } from "react";

const Footer = () => {
  const [mapWidth, setMapWidth] = useState(false);
  return (
    <footer id="footer" onClick={() => setMapWidth(!mapWidth)}>
      <div id="sub-footer">
        <div
          className="gmap_canvas"
          style={{
            position: "absolute",
            height: "100%",
            width: mapWidth ? "100%" : "0%",
            transition: "0.5s"
          }}
        >
          <iframe
            title="something uniq"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1kent&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            height="99%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
