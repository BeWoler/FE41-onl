import React from "react";
import { useParams } from "react-router-dom";
import { IPost } from "./post.interface";
import style from "./post.module.css";

const Post = () => {
  const params = useParams();

  const [post, setPost] = React.useState<IPost>({
    completed: false,
    id: 0,
    title: "",
    userId: 0,
  });

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [params.id]);

  return (
    <div className={style.post}>
      <div>{post.id}</div>
      <h2>{post.title}</h2>
      <p>{post.completed}</p>
    </div>
  );
};

export default Post;
