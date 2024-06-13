import { data } from "autoprefixer";
import Users from "./Users";
import { usersInfo } from "./data";
export default function InstagramStoryClone() {
  return (
    <ul className="flex items-center gap-3">
      {usersInfo.map((item) => (
        <Users usersInfo={item} key={item.id} />
      ))}
    </ul>
  );
}
