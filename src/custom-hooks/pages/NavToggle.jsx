import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function NavToggle() {
  const { isToggle, handleToggle } = useToggle();
  return (
    <div>
      <nav>
        <button onClick={handleToggle}>toggle</button>
        {isToggle && (
          <ul>
            <li>home</li>
            <li>blog</li>
            <li>about</li>
          </ul>
        )}
      </nav>
    </div>
  );
}
