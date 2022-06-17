import styles from "./App.module.css";
import "./global.css";
import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Arthur Campolina" description="lorem" />
          <Post author="Arthur Campolina" description="lorem" />
          <Post author="Arthur Campolina" description="lorem" />
          <Post author="Arthur Campolina" description="lorem" />
          <Post author="Arthur Campolina" description="lorem" />
        </main>
      </div>
    </div>
  );
}
export default App;
