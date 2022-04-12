import React from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";
import useKeypress from "react-use-keypress";
import styled from "styled-components";

const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bgColor + props.bgColorOpacity};
  z-index: 10;
`;

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 25vw;
  min-height: 15vh;
  background: ${(props) => props.bgModalColor};
  border-radius: 5px;
  border: 2px solid ${(props) => props.borderColor};
`;

const Button = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50% 50%;
  transform: scale(1.3);
  top: 5px;
  right: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  &::before {
    background: ${(props) => props.bgCloseColor};
    position: absolute;
    display: block;
    content: "";
    width: 70%;
    height: 6%;
    top: 47%;
    left: 15%;
    transform: rotate(45deg);
  }
  &::after {
    background: ${(props) => props.bgCloseColor};
    position: absolute;
    display: block;
    content: "";
    width: 6%;
    height: 70%;
    left: 47%;
    top: 15%;
    transform: rotate(45deg);
  }
  &:hover {
    &::before {
      background: ${(props) => props.bgCloseHvColor};
    }
  }
  &:hover {
    &::after {
      background: ${(props) => props.bgCloseHvColor};
    }
  }
  &:focus {
    outline: solid 1px red;
    filter: none;
  }
`;

function SimplyModal({
  isOpen,
  visible,
  content,
  bgColor,
  bgColorOpacity,
  bgModalColor,
  bgCloseColor,
  bgCloseHvColor,
  borderColor,
}) {
  let modal;

  useKeypress("Escape", () => {
    if (isOpen === true) {
      visible();
    }
  });

  if (isOpen === true) {
    modal = (
      <ContainerModal
        bgColor={bgColor || "#FFFFFF"}
        bgColorOpacity={bgColorOpacity || "80"}
      >
        <FocusTrap>
          <Modal
            role="dialog"
            aria-modal="true"
            aria-labelledby="heading"
            bgModalColor={bgModalColor || "#FFFFFF"}
            borderColor={borderColor || "#808080"}
          >
            <Button
              type="button"
              onClick={visible}
              aria-label="Close"
              bgCloseColor={bgCloseColor || "#808080"}
              bgCloseHvColor={bgCloseHvColor || "#000000"}
            ></Button>
            {content}
          </Modal>
        </FocusTrap>
      </ContainerModal>
    );
  } else {
    modal = null;
  }

  return modal;
}

SimplyModal.propTypes = {
  isOpen: PropTypes.bool,
  visible: PropTypes.func,
  content: PropTypes.object,
  bgColor: PropTypes.string,
  bgColorOpacity: PropTypes.string,
  bgModalColor: PropTypes.string,
  bgCloseColor: PropTypes.string,
  bgCloseHvColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export default SimplyModal;
