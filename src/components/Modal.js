import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../styles/components/Modal.css";

function Modal({ isOpen, onClose, title, content, image }) {
  // This seems to work. This approach is somewhat bad practice however
  if (isOpen) {
    document.getElementById("root").style.filter = "blur(5px)";
    document.getElementById("root").style.pointerEvents = "none";
  } else {
    document.getElementById("root").style.filter = null;
    document.getElementById("root").style.pointerEvents = null;
  }

  if (!isOpen) return null;

  return (
    <div>
      {createPortal(
        <div className="modal">
          <div className="modal-header">
            <img
              className="close-icon"
              src={require("../resources/close.png")}
              onClick={onClose}
            />
          </div>
          <div className="modal-content">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Modal;
