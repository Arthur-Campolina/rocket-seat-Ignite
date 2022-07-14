import { Trash, ThumbsUp } from "phosphor-react";
import Avatar from "../avatar";
import styles from "./Comment.module.css";

const Comment = ({content}) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/arthur-campolina.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="02/07/2022" dateTime="2022-07-02">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
export default Comment;
