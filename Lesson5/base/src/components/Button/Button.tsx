import { IButtonProps } from "./interface/button.interface";
import theme from "./style/button.module.css";

const Button = (props: IButtonProps) => {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.handler}
      className={props.isDisabled ? theme.disabled : theme.button}>
      {props.content}
    </button>
  );
};

export default Button;
