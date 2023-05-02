import PostItem from "../PostItem/PostItem";

const data = [
    { id: 1, title: 'First post', author: 'King', },
    { id: 2, title: 'foster', author: 'Sasha', },
    { id: 3, title: 'category', author: 'Maria', },
    { id: 4, title: 'fault', author: 'Lev' },
    { id: 5, title: 'curtain', author: 'Lev' },
    { id: 6, title: 'jury', author: 'King' },
    { id: 7, title: 'extraterrestrial', author: 'Sasha' },
    { id: 8, title: 'deputy', author: 'Martin' },
    { id: 9, title: 'amuse', author: 'Joe' },
    { id: 10, title: 'snail', author: 'King' },
]

const PostList = () => {

    return (
        <>
            {data.map((post: any) => {
                return (
                    <div onClick={() => alert([post.author, post.title])} key={post.id}>
                        <PostItem title={post.title} author={post.author} id={post.id} />
                    </div>
                )
            })}

        </>
    )
}

export default PostList;