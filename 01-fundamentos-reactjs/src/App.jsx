import styles from "./App.module.css";
import "./global.css";
import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import Counter from "./components/counter";

function App() {
  const post = {
    author: "Arthur Campolina",
    description: "loren",
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post post={post} />
          <Post post={post} />
          <Post post={post} />
        </main>
        <Counter />
      </div>
    </div>
  );
}
export default App;
