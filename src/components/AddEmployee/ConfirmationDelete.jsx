export const ConfirmationDelete = () => {
  return (
    <div>
      <h1>are you sure want to delete this?</h1>
      <div className="flex items-center gap-4">
        <button className="text-white rounded bg-red-600 p-2">cancel</button>
        <button className="text-white rounded bg-blue-600 p-2">proceed</button>
      </div>
    </div>
  );
};
