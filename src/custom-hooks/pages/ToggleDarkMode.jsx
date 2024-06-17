import { useToggle } from "../hooks/useToggle";

export default function ToggleDarkMode() {
  const { isToggle, handleToggle } = useToggle();
  return (
    <div className={isToggle ? "bg-black text-white" : "bg-white text-black"}>
      <button onClick={handleToggle}>Toggle dark mode</button>
    </div>
  );
}
