import styles from "./App.module.css";
import "./global.css";
import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import Counter from "./components/counter";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/arthur-campolina.png",
      name: "Arthur Campolina",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare/" },
    ],
    publishedAt: new Date("2022-05-03"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lutchen1.png",
      name: "Lutchen Henrique",
      role: "Desenvolvedor Protheus",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare/" },
    ],
    publishedAt: new Date("2022-06-10"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.author.name}
            />
          ))}
        </main>
        <Counter />
      </div>
    </div>
  );
}
export default App;
