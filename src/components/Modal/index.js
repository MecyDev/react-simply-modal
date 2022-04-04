import React, { useState } from "react";
import "../../styles.css";

function SimplyModal({ isOpen, visible, content }) {
  let modal;

  if (isOpen === true) {
    modal = (
      <div className="containerModal">
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="heading"
        >
          <div className="modal__closeButton" onClick={(e) => visible}></div>
          <h2 id="heading">{content}</h2>
          <button onClick={(e) => visible}>Fermer</button>
        </div>
      </div>
    );
  } else {
    modal = null;
  }

  return modal;
}

export default SimplyModal;
