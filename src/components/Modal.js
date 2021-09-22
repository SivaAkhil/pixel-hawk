import React from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const Modal = (props) => {
  const { isOpen, img, handleModalPreview } = props;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-container">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Compressed:-</h1>
      <div className="modal-content">
        <img src={img} alt="" className="modal-img" />
        <button onClick={handleModalPreview} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
