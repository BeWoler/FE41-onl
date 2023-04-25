import React from "react";
import PostItem from "../PostItem/PostItem";
import style from "./style/PostList.module.css";

const PostList = ({ dataList }: any) => {
  return (
    <ul className={style.list}>
        {dataList.map((item: any) => {
          return (
             PostItem(item)
          );
        })}
      </ul>
  );
};

export default PostList;
