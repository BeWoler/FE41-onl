import { ITitle } from "./interface/title.interface";
import './style/title.css'

const Title = (props: ITitle) => {
    return (
        <div className="title">{props.content}
        </div>
    )
}

export default Title;

