import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={s.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.title_name}>{name}</p>
      <p className={clsx(isOnline ? s.green : s.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
