export const AddTodo = ({
  show,
  handleClose,
  handleAddTask,
  inputRef,
  todoTitle,
  modalButtons,
  titleInput,
  handleInputChange,
  selectedStatus,
  setSelectedStatus,
  filterStatus,
}) => {
  const modalClasses = `modal ${show ? "show" : ""}`;

  return (
    <div
      className={modalClasses}
      tabIndex="-1"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{todoTitle}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-flex flex-column">
              <label htmlFor="title">
                Title
                <input
                  ref={inputRef}
                  value={titleInput}
                  type="text"
                  id="title"
                  name="title"
                  className="form-control mb-3"
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault(); // Prevent the default Enter key behavior (usually submitting forms)
                      handleAddTask(filterStatus); // Pass the selected status
                    }
                  }}
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
                  <option value="Incomplete" className="text-danger">
                    Incomplete
                  </option>
                  <option value="Completed" className="text-success">
                    Completed
                  </option>
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
                onClick={() => handleAddTask(selectedStatus)} // Pass the selected status
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
