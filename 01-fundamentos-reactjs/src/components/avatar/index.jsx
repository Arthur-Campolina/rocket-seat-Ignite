import styles from "./Avatar.module.css";

const Avatar = ({hasBorder = true, src}) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="avatar"
    ></img>
  );
};

export default Avatar;
