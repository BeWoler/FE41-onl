import { IPostItemProps } from "./interface/PostItem";
import style from "./style/PostItem.module.css";

const PostItem = (props: IPostItemProps) => {
  return (
    <p className={style.postItem}>
      {props.id} - {props.title} - {props.author}
    </p>
  );
};

export default PostItem;
