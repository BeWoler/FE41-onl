import { ITitleProps } from './interface/title';
import style from "./style/title.module.css";

// Создать компонент Title, пропсом принимает контент с текстом Sign In, который будет отрисовываться
// Поместить компонент Title в Header и по условию в Header отображать в зависимости от isAuth либо Title, либо компонент User


// функциональный реакт:
const Title = (props: ITitleProps) => {
    return(
      <div className={style.mainTitle}> 
        {props.content}
      </div>
    )
  }

  
export default Title;