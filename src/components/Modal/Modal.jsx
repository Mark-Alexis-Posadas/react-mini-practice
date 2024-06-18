import React, { useState, useRef, useEffect } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <>
      <div
        className="custom-modal h-20"
        style={{ display: modal ? "block" : "none" }}
        ref={modalRef}
      >
        <header className="d-flex align-items-center justify-content-between bg-white container mt-5">
          <h1 className="m-0">HELLO</h1>

          <button className="btn btn-danger" onClick={() => setModal(false)}>
            x
          </button>
        </header>
      </div>
      <button className="btn btn-primary" onClick={() => setModal(true)}>
        Click me
      </button>
    </>
  );
};

export default Modal;
