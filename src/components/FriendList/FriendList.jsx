import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={s.item}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
