import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./homepage.css";
import Logo2 from "../asserts/logo2.svg";

function HomePage() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);

  const item1Ref = useRef(null);
  const item2Ref = useRef(null);

  const options = {
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries);
      // setBox1(entries[0].isIntersecting);
      // setBox2(entries[1].isIntersecting);
      // console.log(entries[0].target.className);
      // console.log(item2Ref.current);
      // if (entries.length === 2) return;

      if (
        entries[0].target.className === "homepage-compresser-info-container"
      ) {
        setBox1(entries[0].isIntersecting);
      }
      if (
        entries[0].target.className === "homepage-colorpalette-info-container"
      ) {
        setBox2(entries[0].isIntersecting);
      }
    }, options);

    observer.observe(item1Ref.current);

    observer.observe(item2Ref.current);

    return () => {
      observer.disconnect();
      // observer.unobserve(item2Ref.current);
    };
  }, []);

  return (
    <div className="homepage-container">
      <div className="homepage-greeting-dummy-container">
        <div className="homepage-greeting-container">
          <motion.h1
            initial={{ x: "-50vw" }}
            animate={{ x: 1 }}
            transition={{ duration: 0.7 }}
            className="homepage-greeting-text"
          >
            Welcome To
          </motion.h1>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={Logo2}
            alt=""
            className="homepage-logo"
          />
          <motion.h1
            initial={{ x: "50vw" }}
            animate={{ x: 1 }}
            transition={{ duration: 0.7 }}
            className="homepage-greeting-text"
          >
            Pixel-Hawk
          </motion.h1>
        </div>
      </div>

      <div className="homepage-compresser-info-container" ref={item1Ref}>
        <div className="homepage-colorpalette-dummy-container">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={box1 && { scaleY: 1 }}
            transition={{ duration: 0.6, type: "tween" }}
            className="palette-info-text-container"
          >
            <h3 style={{ margin: "4px" }}>
              Try Out Our{" "}
              <span style={{ color: "yellow" }}>Image Compressor</span> .Made
              for Every individual who always gets furstrated with image size
              restrictions when uploading to a website.It can also out put to
              jpg or png format as of your choice.
            </h3>
            <Link to="/compressimage" style={{ textDecoration: "none" }}>
              <div
                style={{
                  width: "180px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  height: "40px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "30px",
                  border: "solid 2px black",
                }}
              >
                Try It
              </div>
            </Link>
            <h4 style={{ color: "yellow", margin: "4px" }}>
              *Please be reasonable when giving the size of your desired
              compression level as it can only go upto its limits no matter what
              you gave as input.With heavy compression some of the details might
              get lost.*
            </h4>
          </motion.div>
        </div>
      </div>

      <div className="homepage-colorpalette-info-container" ref={item2Ref}>
        <div className="homepage-colorpalette-dummy-container">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={box2 && { scaleY: 1 }}
            transition={{ duration: 0.6, type: "tween" }}
            className="palette-info-text-container"
          >
            <h3 style={{ margin: "4px" }}>
              Try Out Our{" "}
              <span style={{ color: "yellow" }}>
                Image Color Palette Ripper
              </span>
              .Made for Artists who wonder about colors combinations and
              patterns. It rips the prominent Colors from an Image and they can
              be copied with comfort of a click.
            </h3>
            <Link to="/imagecolorpalette" style={{ textDecoration: "none" }}>
              <div
                style={{
                  width: "180px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  height: "40px",
                  fontWeight: "bold",
                  fontSize: "30px",
                  textAlign: "center",
                  border: "solid 2px black",
                }}
              >
                Try It
              </div>
            </Link>
            <h4 style={{ color: "yellow", margin: "4px" }}>
              *Please note that as it can only give 5 colors you may not get all
              the colors in a more populated Image ( i.e with more colors )*
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
