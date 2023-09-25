import React from "react";

export default function ConditioanlRendering() {
  const [active, setActive] = React.useState(false);
  const wrapperClass = `wrapper text-center ${active ? "active" : ""}`;
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className={wrapperClass}>
        <h1 className={active ? "active" : ""}>Hello</h1>
        <button onClick={handleClick} className="btn btn-primary">
          Trigger
        </button>
      </div>
    </>
  );
}
