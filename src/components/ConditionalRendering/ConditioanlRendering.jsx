import React from "react";

export default function ConditioanlRendering() {
  const [active, setActive] = React.useState(false);
  const [text, setText] = React.useState("Trigger");
  const wrapperClass = `wrapper text-center ${active ? "active" : ""}`;
  const handleClick = () => {
    setActive(!active);
    setText(!active ? "Triggered" : "Trigger");
  };

  return (
    <>
      <div className={wrapperClass}>
        <h1 className={active ? "active" : ""}>Hello</h1>
        <button onClick={handleClick} className="btn btn-primary">
          {text}
        </button>
      </div>
    </>
  );
}
