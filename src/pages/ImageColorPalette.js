import userEvent from "@testing-library/user-event";
import React, { useRef, useState } from "react";
import { usePalette } from "react-palette";
import { motion } from "framer-motion";

import DefaultImg from "../asserts/default-img.jpg";
import "./imagecolorpalette.css";

function ImageColorPalette() {
  const [inputImg, setInputImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);

  const imgRef = useRef(null);
  const paletteRef = useRef(null);

  const { data, loading, error } = usePalette(imgPreview);

  const handleImgUpload = () => {
    imgRef.current.click();
  };

  const handleChange = (e) => {
    const image = e.target.files[0];
    setInputImg(image);
    const reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgPreview(reader.result);
        }
      };
    }
  };

  const handleCopy = (id) => {
    const text = document.getElementById(id);
    const textarea = document.getElementById("hidden-text");
    const range = document.createRange();

    // var range = document.createRange();
    //                 range.selectNode(document.getElementById("a"));
    //                 window.getSelection().removeAllRanges(); // clear current selection
    //                 window.getSelection().addRange(range); // to select text
    //                 document.execCommand("copy");
    //                 window.getSelection().removeAllRanges();// to deselect

    range.selectNode(text);
    getSelection().removeAllRanges();
    getSelection().addRange(range);
    document.execCommand("copy");
    getSelection().removeAllRanges();

    alert("copied color value");

    // console.log("clicked");

    // console.log(text, textarea);

    // document.body.appendChild(textarea);
    // textarea.value = text;
    // console.log(textarea.value, "text value");
    // textarea.select();
    // document.execCommand("copy");
  };

  return (
    <div className="color-palette-main-div">
      <h1 style={{ textAlign: "center" }}>Image Color Palette Ripper:-</h1>
      <div className="color-palette-main-container">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imgRef}
          onChange={handleChange}
        />
        <img
          src={imgPreview ? imgPreview : DefaultImg}
          alt=""
          onClick={handleImgUpload}
          className="color-palette-img"
        />

        {imgPreview && (
          <div className="color-palette-container">
            <motion.div
              style={{ backgroundColor: data.darkMuted }}
              className="color-palette-box"
              onClick={() => handleCopy("color-1")}
              // whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <p id="color-1" className="color-palette-code">
                {data.darkMuted}
              </p>
            </motion.div>

            <motion.div
              style={{ backgroundColor: data.lightMuted }}
              className="color-palette-box"
              onClick={() => handleCopy("color-2")}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <p id="color-2" className="color-palette-code">
                {data.lightMuted}
              </p>
            </motion.div>

            <motion.div
              style={{ backgroundColor: data.darkVibrant }}
              className="color-palette-box"
              onClick={() => handleCopy("color-3")}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <p id="color-3" className="color-palette-code">
                {data.darkVibrant}
              </p>
            </motion.div>

            <motion.div
              style={{ backgroundColor: data.lightVibrant }}
              className="color-palette-box"
              onClick={() => handleCopy("color-4")}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <p id="color-4" className="color-palette-code">
                {data.lightVibrant}
              </p>
            </motion.div>

            <motion.div
              style={{ backgroundColor: data.muted }}
              className="color-palette-box"
              onClick={() => handleCopy("color-5")}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <p id="color-5" className="color-palette-code">
                {data.muted}
              </p>
            </motion.div>

            <motion.div
              style={{ backgroundColor: data.vibrant }}
              className="color-palette-box"
              onClick={() => handleCopy("color-6")}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <p id="color-6" className="color-palette-code">
                {data.vibrant}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageColorPalette;
