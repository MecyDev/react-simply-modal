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
