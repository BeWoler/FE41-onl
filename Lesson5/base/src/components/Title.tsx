import { ITitleProps } from "../interface/title"
import "./style/style.css"
const Title = (props:ITitleProps) => {
    return(
        <p className="header__Title">{props.title}</p>
    )
}
export default Title;