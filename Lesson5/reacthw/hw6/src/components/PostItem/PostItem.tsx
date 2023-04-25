import { IPostItemProps } from "./interface/PostItem"
import style from "./style/PostItem.module.css"

const PostItem = (props: IPostItemProps) => {
  return (
    <li
      className={style.listitem}>
      <p>{props.title}</p>
    </li>
  );
};

export default PostItem;
