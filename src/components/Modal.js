import { createPortal } from "react-dom";
import "../styles/components/Modal.css";

function Modal({ isOpen, onClose, content }) {
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
            <p>{content}</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Modal;
