import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({ dataList }: any) => {
  return (
      <ul>
        {dataList.map((item: any) => {
          return (
             PostItem(item)
            // <li key={item.id}>
            //   <h2>{item.title}</h2>
            //   <h4>{item.author}</h4>
            // </li>
          );
        })}
      </ul>
  );
};

export default PostList;
