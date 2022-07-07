import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import Avatar from "../avatar";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
        alt="cover"
      ></img>
      <div className={styles.profile}>
        <Avatar src="https://github.com/arthur-campolina.png" />
        <strong>Arthur Campolina</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="www">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
export default Sidebar;
