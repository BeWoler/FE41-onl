import { IPostItemProps } from "./interface/item";
import style from "./style/item.module.css";

const PostItem = (props: IPostItemProps) => {
  const handleClick = () => {
    alert("id: " + props.id + " , author: " + props.author);
  };
  return (
    <li className={style.item} onClick={handleClick}>
      <p>
        {props.title} by {props.author}, id: {props.id}
      </p>
    </li>
  );
};

export default PostItem;
