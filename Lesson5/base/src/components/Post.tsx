import IPost from "../interface/post"
import { localStorageTheme } from "../App"

const Post = (props:IPost) => {
    return(
        <div className={`post__${localStorageTheme}`} onClick={() => {
            alert(`id: ${props.id}, author: ${props.author}.`)
        }}>
            <h2 className="post__h">{props.title}</h2>
            <p className="post__txt">{props.author}</p>
        </div>
    )
}
export default Post;