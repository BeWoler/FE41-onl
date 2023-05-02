import { ITitleProps } from "./interface/Title";
import style from "./style/Title.module.css";

const Title = (props: ITitleProps) => {
  return (
    <div className={style.title}>
      {props.content}
    </div>
  );
};

export default Title;