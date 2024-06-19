export function FormInputItem({ itemKey, itemValue, handleChange }) {
  return (
    <div className="my-3">
      <input
        type={itemKey === "age" ? "number" : "text"}
        className="p-3 rounded text-black bg-slate-200 w-full flex-1"
        placeholder={itemKey}
        name={itemKey}
        value={itemValue}
        onChange={handleChange}
      />
    </div>
  );
}
