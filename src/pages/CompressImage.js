import React, { useState, useRef, useEffect } from "react";
import ImageCompression from "browser-image-compression";
import { Field, Formik, Form } from "formik";

import "./compressimage.css";
import DefaultImg from "../asserts/default-img.jpg";
import Modal from "../components/Modal";

const initial = {
  size: "",
  unit: "mb",
  format: "Original",
};

function CompressImage() {
  const [uploadedImg, setUploadedImg] = useState(null);
  const [finalImg, setFinalImg] = useState(null);
  const [intialPreview, setInitialPreview] = useState(null);
  const [finalPreview, setFinalPreview] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const reader = new FileReader();

  const imgRef = useRef(null);
  const downloadRef = useRef(null);

  const handleImgRef = () => {
    imgRef.current.click();
    setFinalPreview(null);
  };

  const handleDownload = () => {
    downloadRef.current.click();
  };

  finalImg && console.log(finalImg.type);

  const handleChange = (e) => {
    const rawImg = e.target.files[0];
    // console.log(rawImg, "raw img");
    // console.log("intial filesize:MB", (rawImg.size / 1024 / 1024).toFixed(2));
    // console.log("intial filesize:KB", (rawImg.size / 1024).toFixed(2));
    if (rawImg) {
      setUploadedImg(rawImg);
      reader.readAsDataURL(rawImg);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setInitialPreview(reader.result);
        }
      };
    }
  };

  const submit = (result) => {
    console.log(result);
    if (intialPreview && uploadedImg) {
      let compressionSize;

      if (result.unit === "mb") {
        compressionSize = result.size;
      } else {
        compressionSize = result.size / 1024;
      }

      const options = {
        maxSizeMB: compressionSize,
        fileType:
          result.format === "Original" ? uploadedImg.type : result.format,
      };

      ImageCompression(uploadedImg, options).then((compressed) => {
        // console.log("compressed", compressed);
        // console.log((compressed.size / 1024 / 1024).toFixed(2), "final in MB");
        // console.log((compressed.size / 1024).toFixed(2), "final in KB");
        setFinalImg(compressed);
        reader.readAsDataURL(compressed);
        reader.onload = () => {
          if (reader.readyState === 2) {
            setFinalPreview(reader.result);
          }
        };
      });
    }
  };

  const handleModalPreview = () => {
    setModal(!modal);
  };

  return (
    <>
      <Modal
        isOpen={modal}
        img={finalPreview}
        handleModalPreview={handleModalPreview}
      />
      <div className="compress-container">
        <h1 style={{ textAlign: "center" }}>Image Compressor:-</h1>
        <div className="compress-preview-container">
          <div style={{ textAlign: "center", margin: "10px" }}>
            <img
              src={intialPreview ? intialPreview : DefaultImg}
              alt=""
              className="compress-upload-preview"
              onClick={!finalPreview ? handleImgRef : null}
            />
            {finalPreview && <h1>Original</h1>}
          </div>
          {finalPreview && (
            <div style={{ textAlign: "center", margin: "10px" }}>
              <img
                src={finalPreview}
                alt=""
                className="compress-upload-preview"
                onClick={handleModalPreview}
              />
              <h1>Compressed</h1>
            </div>
          )}
        </div>

        {finalPreview && (
          <div style={{ margin: "20px auto 50px 20px" }}>
            <h1 style={{ margin: "5px auto" }}>
              Final Compressed Image Details:-
            </h1>
            <p style={{ margin: "5px auto" }}>File Name:-</p>
            <p style={{ margin: "5px auto", wordWrap: "break-word" }}>
              {finalImg.name}
            </p>
            <p style={{ margin: "5px auto" }}>File Format:-</p>
            <p style={{ margin: "5px auto" }}>{finalImg.type}</p>
            <p style={{ margin: "5px auto" }}>Final File Size:-</p>
            <p style={{ margin: "5px auto" }}>
              {(finalImg.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <p style={{ margin: "5px auto" }}>
              {(finalImg.size / 1024).toFixed(2)} KB
            </p>
            <p style={{ margin: "5px auto", paddingBottom: "20px" }}>
              {finalImg.size} BYTES
            </p>
            <a
              href={URL.createObjectURL(
                // new Blob([finalPreview], {
                //   type:
                //     finalImg.type.split("/")[1] == "jpeg"
                //       ? "image/jpg"
                //       : finalImg.type,
                // })
                finalImg
              )}
              download
              style={{ display: "hidden" }}
              ref={downloadRef}
            ></a>
            <div
              onClick={handleDownload}
              style={{
                width: "150px",
                heigth: "35px",
                border: "solid white 2px",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                fontSize: "20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              DownLoad
            </div>
            <div style={{ height: "100px" }}></div>
          </div>
        )}

        {!finalPreview && (
          <div className="compress-options-container">
            <h1 style={{ margin: "10px auto" }}>Set Compression Parameters:</h1>
            <Formik initialValues={initial} onSubmit={submit}>
              <Form>
                <input
                  type="file"
                  name="imageinput"
                  accept="image/*"
                  onChange={handleChange}
                  style={{ display: "none" }}
                  ref={imgRef}
                />

                <div style={{ margin: "20px auto" }}>
                  <label
                    htmlFor="size"
                    name="size"
                    style={{ fontSize: "20px", paddingLeft: "10px" }}
                  >
                    Size:
                  </label>
                  <Field type="number" name="size" />
                  <Field name="unit" as="select">
                    <option value="mb">MB</option>
                    <option value="kb">KB</option>
                  </Field>
                </div>

                <div>
                  <p style={{ fontSize: "20px", marginBottom: "10px" }}>
                    Download Image as:
                  </p>
                  <Field name="format" type="radio" value="Original" />
                  <label htmlFor="Original" style={{ margin: "auto 5px" }}>
                    Original
                  </label>
                  <Field name="format" type="radio" value="image/jpeg" />
                  <label htmlFor="Jpg" style={{ margin: "auto 5px" }}>
                    Jpg
                  </label>
                  <Field name="format" type="radio" value="image/png" />
                  <label htmlFor="Png" style={{ margin: "auto 5px" }}>
                    Png
                  </label>
                </div>

                <button type="submit" className="compress-submit-btn">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </>
  );
}

export default CompressImage;
