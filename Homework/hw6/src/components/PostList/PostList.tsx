import PostItem from "../PostItem/PostItem";

const PostList = ({ listContent }: any) => {

    return (
        <>
            <ul>
                {listContent.map((item: any) => {
                    return (
                        <li key={item.id}>
                            <PostItem handler={() => alert([item.id, item.author])}
                                post={item.title}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default PostList;