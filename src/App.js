import "./App.css";
import { Post } from "./Post";
import { Card } from "./Card";
import { Form } from "./Form";
import { useState } from "react";

const posts = [
  { id: "1", title: "post 1", content: "content post 1" },
  { id: "2", title: "post 2", content: "content post 2" },
  { id: "3", title: "post 3", content: "content post 3" },
];

function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((previousValue) => {
      return !previousValue;
    });
  };
  return (
    <div>
      <Form />
      <button onClick={handleToggle}>{show ? "hide" : "show"}</button>
      {show && (
        <Card>
          <h2>this is a card</h2>
          <p>this is the content of the card</p>
          <button>confirm</button>
        </Card>
      )}
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default App;
