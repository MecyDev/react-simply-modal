import React, { useState, useEffect } from "react";
import "../../styles.css";

export function SimplyModal({ content, isOpen }) {
  const [open, setOpen] = useState();
  const [containerModal, setContainerModal] = useState("containerModal close");

  useEffect(() => {
    setOpen(isOpen);
  });

  if (open === true) {
    setContainerModal("containerModal");
  }

  function closingModal() {
    setContainerModal("containerModal close");
  }

  return (
    <div className={containerModal}>
      <div className="modal">
        <div className="modal__closeButton" onClick={closingModal}></div>
        <h2>{content}</h2>
      </div>
    </div>
  );
}

export default SimplyModal;
