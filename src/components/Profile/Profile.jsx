import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.img_box}>
        <img className={s.img} src={image} alt={tag} />
        <p className={s.title}>{name}</p>
        <p className={s.text}>{tag}</p>
        <p className={s.text}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={s.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
