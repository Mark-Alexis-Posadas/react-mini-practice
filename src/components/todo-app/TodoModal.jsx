import React from "react";

export const TodoModal = ({
  show,
  close,
  handleTitleChange,
  handleAddTask,
  inputRef,
}) => {
  const modalClasses = `modal fade ${show ? "show" : ""}`;

  return (
    <div
      className={modalClasses}
      tabIndex="-1"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title ">Add TODO</h5>
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
                  aria-label="Default select example"
                  defaultValue="Incomplete"
                  id="type"
                >
                  <option value="1">Incomplete</option>
                  <option value="2">Completed</option>
                </select>
              </label>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddTask}
            >
              Add Task
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
