
interface IPostItem {
    id: number;
    title: string;
    author: string;
}

const PostItem = ({ id, title, author }: IPostItem) => {
    return (
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{author}</div>
        </div>
    )
}
export default PostItem;