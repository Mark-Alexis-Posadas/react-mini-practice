export default function Users({ usersInfo, handleShowCard }) {
  return (
    <li onClick={handleShowCard}>
      <figure className="p-[2px] border-2 border-rose-600 w-[56px] h-[56px] rounded-full flex items-center justify-center cursor-pointer">
        <img
          src={usersInfo.frontImage}
          alt="image"
          className="w-full h-full max-w-full object-cover rounded-full"
        />
      </figure>
      <span className="text-slate-500 text-xs">{usersInfo.name}</span>
    </li>
  );
}
