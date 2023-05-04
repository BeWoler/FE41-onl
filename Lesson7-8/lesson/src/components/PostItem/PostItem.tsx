import React from "react";

const PostItem = ({
  id,
  author,
  title,
  handler,
}: {
  id: number;
  author: string;
  title: string;
  handler: (id?: number, author?: string) => void;
}) => {

  return (
    <div
      style={{ border: "2px solid #000", width: "300px" }}
      onClick={() => handler(id, author)}>
      <p>{id}</p>
      <h2>{title}</h2>
      <div>{author}</div>
    </div>
  );
};

export default PostItem;
