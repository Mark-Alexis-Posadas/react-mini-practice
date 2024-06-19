export function FormInputItem({ itemKey, itemValue, handleChange }) {
  return (
    <input
      type={itemKey === "age" ? "number" : "text"}
      className="p-3 rounded text-black bg-slate-200 w-full flex-1"
      placeholder={itemKey}
      name={itemKey}
      value={itemValue}
      onChange={handleChange}
    />
  );
}
