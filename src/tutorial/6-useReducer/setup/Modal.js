import React, { useEffect } from "react";

const Modal = ({ modalContent, removeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      removeModal();
    }, 3000);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
