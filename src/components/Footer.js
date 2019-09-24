import React, { useState } from "react";
import logo from "../imgs/200pix.png";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import WebIcon from "@material-ui/icons/Web";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const Footer = () => {
  const [mapWidth, setMapWidth] = useState(false);
  return (
    <footer id="footer">
      <div id="footer-about">
        <div>
          <img src={logo} alt="logo" />
          <h4>1kentistanbul</h4>
        </div>
        <div>
          <p>
            Widgets are small applications that can help you insert different
            pieces of content into the website footer. Some examples include
            Calendar, Archives, Categories, Recent Posts, Recent Comments… and
            the list continues.
          </p>
          <p>
            Some might want to include a description into their website footer.
            Or some links with short presentations of what characterizes the
            business. The above example is representative of a website
            presentation placed in the footer. Here is another example – with
            links to short presentations of a business Widgets are small
            applications that can help you insert different pieces of content
            into the website footer. Some examples include Calendar, Archives,
            Categories, Recent Posts, Recent Comments… and the list continues.
          </p>
        </div>
      </div>
      <div id="footer-latest">
        <h4>Latest Posts</h4>
        <ul>
          <li>
            <a href="#dead">Link One</a>
          </li>
          <li>
            <a href="#dead">Link Two</a>
          </li>
          <li>
            <a href="#dead">Link Three</a>
          </li>
          <li>
            <a href="#dead">Link Four</a>
          </li>
        </ul>
      </div>
      <div id="footer-services">
        <h4>Services</h4>
        <ul>
          <li>
            <a href="#dead">Service One</a>
          </li>
          <li>
            <a href="#dead">Service Two</a>
          </li>
          <li>
            <a href="#dead">Service Three</a>
          </li>
        </ul>
      </div>
      <div id="footer-contact">
        <h4>Get in Touch</h4>
        <ul>
          <li>
            <PhoneIcon />
            <a href="tel:+62896706255135">+62(896) 706 255 13 5</a>
          </li>
          <li>
            <EmailIcon /> <a href="mailto:fake@email.com">fake@email.com</a>
          </li>
          <li>
            <WebIcon />
            <a href="1kentistanbul.com">https://www.1kentistanbul.com</a>
          </li>
          <li>
            <LocationOnIcon />
            <a href="https://maps.google.com/maps?q=1kentistanbul&t=&z=17&ie=UTF8&iwloc=&output">
              Istanbul-Esenyurt Yeselkent- 2011 SK.
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
// eslint-disable-next-line
{
  //   <button onClick={() => setMapWidth(!mapWidth)}>
  //   Location/Google Maps
  // </button>
  // <div
  //   className="gmap_canvas"
  //   // style={{
  //   //   position: "absolute",
  //   //   height: "100%",
  //   //   width: mapWidth ? "100%" : "0%",
  //   //   transition: "0.5s"
  //   // }}
  // >
  //   <iframe
  //     title="something uniq"
  //     id="gmap_canvas"
  //     src="https://maps.google.com/maps?q=1kentistanbul&t=&z=17&ie=UTF8&iwloc=&output=embed"
  //     frameBorder="0"
  //     scrolling="no"
  //     marginHeight="0"
  //     marginWidth="0"
  //     height="99%"
  //     width="100%"
  //   ></iframe>
  // </div>
}
