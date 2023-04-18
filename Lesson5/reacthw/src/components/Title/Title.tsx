import { ITitleProps } from './interface/title';

// Создать компонент Title, пропсом принимает контент с текстом Sign In, который будет отрисовываться
// Поместить компонент Title в Header и по условию в Header отображать в зависимости от isAuth либо Title, либо компонент User


// функциональный реакт:
const Title = (props: ITitleProps) => {
    return(
      <div> 
        {props.content === "Hello, I am title"}
      </div>
    )
  }

  
export default Title;