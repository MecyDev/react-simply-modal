import React, { useState, useEffect } from "react";
import "../../styles.css";

function SimplyModal({ isOpen, visible, content }) {
  let modal;

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        visible;
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  if (isOpen === true) {
    modal = (
      <div className="containerModal">
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="heading"
        >
          <button
            type="button"
            className="modal__closeButton"
            onClick={visible}
            aria-label="Close"
          ></button>
          <h2 id="heading">{content}</h2>
        </div>
      </div>
    );
  } else {
    modal = null;
  }

  return modal;
}

export default SimplyModal;
