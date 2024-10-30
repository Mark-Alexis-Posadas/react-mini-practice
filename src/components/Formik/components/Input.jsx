export const Input = ({ field, form, ...props }) => {
  return (
    <input
      className="bg-slate-100 p-3 text-md outline-none"
      {...field}
      {...props}
    />
  );
};
