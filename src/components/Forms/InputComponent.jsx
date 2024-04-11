export default function InputComponent({
  labelText,
  inputName,
  inputType,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="flex justify-center flex-col mb-3">
      <label className="text-purple-700">{labelText}</label>
      <input
        className="w-full p-2 bg-white shadow-md"
        type={inputType}
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
