import { useState } from "react";

export const TodoModal = ({
  show,
  close,
  handleTitleChange,
  handleAddTask,
  inputRef,
  todoTitle,
  modalButtons,
  selectedStatus,
  setSelectedStatus,
}) => {
  const modalClasses = `modal  ${show ? "show" : ""}`;

  return (
    <div
      className={modalClasses}
      tabIndex="-1"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title ">{todoTitle}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-flex flex-column">
              <label htmlFor="title">
                Title
                <input
                  ref={inputRef}
                  type="text"
                  id="title"
                  name="title"
                  className="form-control mb-3"
                  onChange={handleTitleChange}
                />
              </label>

              <label htmlFor="type">
                Status
                <select
                  className="form-select"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  id="type"
                >
                  <option value="Incomplete">Incomplete</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>
            </form>
          </div>
          <div className="modal-footer">
            {modalButtons.map((button) => (
              <button
                key={button.id}
                type="button"
                className={`btn ${
                  button.id === 1 ? "btn-primary" : "btn-secondary"
                }`}
                onClick={button.id === 1 ? handleAddTask : close}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
