import style from "./item.module.css";

interface IPostItemProps {
  id: number;
  title: string;
  author: string;
}

const PostItem = (props: IPostItemProps) => {
  const handleClick = () => {
    alert("id: " + props.id + " , author: " + props.author);
  };
  return (
    <li className={style.item} onClick={handleClick} key={props.id}>
      <p>
        {props.title} by {props.author}, id: {props.id}
      </p>
    </li>
  );
};

export default PostItem;
