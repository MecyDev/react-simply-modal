import React, { useState } from "react";
import "../../styles.css";

function SimplyModal({ isOpen, visible, content }) {
  let modal;

  if (isOpen === true) {
    modal = (
      <div
        className="containerModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="heading"
      >
        <div className="modal">
          <div className="modal__closeButton" onClick={visible}></div>
          <h2 id="heading">{content}</h2>
          <button>Fermer</button>
        </div>
      </div>
    );
  } else {
    modal = null;
  }

  return modal;
}

export default SimplyModal;
