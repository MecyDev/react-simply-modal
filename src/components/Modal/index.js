import React, { useState } from "react";
import "../../styles.css";

function SimplyModal({ isOpen, visible, content }) {
  let modal;

  if (isOpen === true) {
    modal = (
      <div className="containerModal">
        <div className="modal">
          <div className="modal__closeButton" onClick={visible}></div>
          <h2>{content}</h2>
        </div>
      </div>
    );
  } else {
    modal = null;
  }

  return modal;
}

export default SimplyModal;
