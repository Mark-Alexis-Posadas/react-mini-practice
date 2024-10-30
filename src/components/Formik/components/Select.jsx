export const Select = ({ field, label, options, ...props }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <select {...field} {...props}>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </>
  );
};
