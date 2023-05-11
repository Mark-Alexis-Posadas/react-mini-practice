import React, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className="custom-modal"
        style={{ display: modal ? "block" : "none" }}
      >
        <h1>HELLO</h1>

        <button className="btn btn-danger" onClick={() => setModal(!modal)}>
          x
        </button>
      </div>
      <button className="btn btn-primary" onClick={() => setModal(!modal)}>
        Click me
      </button>
    </>
  );
};

export default Modal;
