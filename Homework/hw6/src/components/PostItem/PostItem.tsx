
interface IPostItem {
    post: string;
    handler: () => void;
}

const PostItem = ({ post, handler }: IPostItem) => {
    return (
        <div onClick={handler}>
            {post}
        </div>
    )
}
export default PostItem;