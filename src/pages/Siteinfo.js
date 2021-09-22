import React from "react";

const Siteinfo = (props) => {
  return (
    <div
      style={{
        display: "block",
        width: "90%",
        height: "100vh",
        margin: "auto",
        boxShadow: "0 0 1rem 0 rgba(0,0,0,0.2)",
        backgroundColor: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(40px)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "650px",
          margin: "auto",
          display: "block",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>What is this site about?</h2>
        <h5 style={{ margin: "10px" }}>
          This site is made as part of showing my dev skills.This website offers
          image compression and color palette riping from a image
        </h5>
        <h2 style={{ margin: "10px" }}>What is the use of ImageCompressor?</h2>
        <h5 style={{ margin: "10px" }}>
          The most common problem we all face is when we have to submit our
          photos or other documents in image format and the sites always
          restrict the size of user uploaded images.Then this site can help to
          compress the image to the desired size.
        </h5>
        <h5 style={{ margin: "10px" }}>
          Note: Please be reasonable when you are specifying size.At the end of
          the day this software can only compressed to the last extent it can go
          and it cannot upscale images.Do also note that extreme compression
          levels can smudge out the details of image
        </h5>
        <h2>Why is the my image downloading as .jifif instead of jpeg ? </h2>
        <h5>
          Probalbly you are downloading from a windows pc.Windows pc are tend to
          download .jifif instead of jpeg especially from browsers.You can
          search in google for further info
        </h5>
        <h2 style={{ margin: "10px" }}>
          What is the use of Image Color Palette Ripper?
        </h2>
        <h5 style={{ margin: "10px" }}>
          This might not be every one's cup of tea.This is useful for people who
          are into art or design and want to take color palette for their next
          project from a image they like.
        </h5>
        <h5 style={{ margin: "10px" }}>
          Eg: When i used to make Architectural Designs I alway stumble upon
          choosing right color palettes.I use to take then from a image in which
          the colors look useful.
        </h5>
        <h5 style={{ margin: "10px" }}>
          If you have any queries,feedback or noticed any bugs please let me
          know.All suggestions are welcomed
        </h5>
        <h2 style={{ margin: "10px" }}>Contact:-</h2>
        <h4 style={{ margin: "10px" }}>Akhil Naredla</h4>
        <h4 style={{ margin: "10px", PaddingBottom: "50px" }}>
          akhilnaredla.1@gmail.com
        </h4>
      </div>
    </div>
  );
};

export default Siteinfo;
