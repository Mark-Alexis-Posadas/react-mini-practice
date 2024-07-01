export function FormInputItem({ itemKey, itemValue, handleChange }) {
  return (
    <div>
      <label className="capitalize text-gray-500">{itemKey}</label>
      <input
        type={itemKey === "age" ? "number" : "text"}
        className="p-3 rounded text-gray-400 bg-gray-700 w-full flex-1"
        placeholder={itemKey}
        name={itemKey}
        value={itemValue}
        onChange={handleChange}
      />
    </div>
  );
}
