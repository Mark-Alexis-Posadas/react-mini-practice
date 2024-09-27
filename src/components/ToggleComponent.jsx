export default function ToggleComponent({ isToggle, handleToggle }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={handleToggle}>
        {isToggle ? "hide" : "show"}
      </button>
      {isToggle ? (
        <p className="text-danger">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          unde veniam aperiam deleniti eius magni adipisci expedita fugiat,
          quasi veritatis provident nisi eum minus pariatur facere ipsa debitis
          explicabo facilis.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
