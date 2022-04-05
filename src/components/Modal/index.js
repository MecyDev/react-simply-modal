import React from "react";
import FocusTrap from "focus-trap-react";
import "../../styles.css";

function SimplyModal({ isOpen, visible, content }) {
  let modal;

  if (isOpen === true) {
    modal = (
      <div className="containerModal">
        <FocusTrap>
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
        </FocusTrap>
      </div>
    );
  } else {
    modal = null;
  }

  return modal;
}

export default SimplyModal;
