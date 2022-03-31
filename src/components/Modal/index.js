import React, { useState } from "react";
import "../../styles.css";

export function SimplyModal({ content, isOpen }) {
  const [open, setOpen] = useState(isOpen);

  function closingModal() {
    setOpen(false);
  }

  if (open === true) {
    modal = (
      <div className="containerModal">
        <div className="modal">
          <div className="modal__closeButton" onClick={closingModal}></div>
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
