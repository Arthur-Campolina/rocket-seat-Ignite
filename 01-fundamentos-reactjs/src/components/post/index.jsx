import Comment from "../comment";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/arthur-campolina.png"
            alt="Avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Arthur Campolina</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="02/07/2022" dateTime="2022-07-02">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          👉 <a href="www">jane.design/doctorcare/</a>
        </p>
        <p>
          <a href="www">#novoprojeto</a> <a href="www">#nlw</a>{" "}
          <a href="www">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
export default Post;
