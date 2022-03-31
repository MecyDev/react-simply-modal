import React, { useState } from "react";
import "../../styles.css";

export function SimplyModal({ content, isOpen }) {
  const [open, setOpen] = useState(isOpen);

  let containerModal;

  if (open === false) {
    containerModal = "containerModal close";
  } else {
    containerModal = "containerModal";
  }

  function closingModal() {
    setOpen(false);
  }

  return (
    <div className={containerModal}>
      <div className="modal">
        <div className="modal__closeButton" onClick={() => closingModal()} />
        <h2>{content}</h2>
      </div>
    </div>
  );
}

export default SimplyModal;
