import { useState } from "react";
export default function ToggleComponent() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        {state ? "hide" : "show"}
      </button>
      {state ? (
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
