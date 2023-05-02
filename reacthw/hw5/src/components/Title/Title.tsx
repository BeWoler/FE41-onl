import { ITitleProps } from "./interface/Title";
import style from "./style/title.module.css"

const Title = (props: ITitleProps) => {
  return (
    <h4
      className={style.title}>
      {props.content}
    </h4>
  );
};

export default Title;
