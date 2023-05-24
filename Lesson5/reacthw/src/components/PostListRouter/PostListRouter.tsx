import React from "react";
import { IPostRouter } from "../PostRouter/interface/postrouter.interface";
import PostRouter from "../PostRouter/PostRouter";

const PostListRouter = ({ posts }: { posts: IPostRouter[] }) => {
  return (
    <div>
      {posts.map((post: IPostRouter) => {
        return (
          <div key={post.id}>
            <PostRouter
              author={post.author}
              content={post.content}
              id={post.id}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostListRouter;
