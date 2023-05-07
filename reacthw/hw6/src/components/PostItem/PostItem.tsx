import { IPostItemProps } from "./interface/PostItem"
import style from "./style/PostItem.module.css"

const PostItem = (props: IPostItemProps) => {
  function press() {
    alert("id: " + props.id + " and " + "author: " + props.author)
  }
  return (
    <li onClick={press}
      className={style.listitem}>
      <p className={style.title}>{props.title}</p>
    </li>
  );
};

export default PostItem;
