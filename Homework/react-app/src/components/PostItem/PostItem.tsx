import style from "./item.module.css";

interface IPostItemProps {
  id: number;
  title: string;
  author: string;
}

const PostItem = (props: IPostItemProps) => {
  return (
    <div className={style.item}>
      <h2>{props.title}</h2>
      <p>by {props.author}</p>
    </div>
  );
};

export default PostItem;
