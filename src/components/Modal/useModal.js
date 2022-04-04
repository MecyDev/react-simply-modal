import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    toggle,
  };
}

export default useModal;
