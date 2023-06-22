import { useEffect, useState } from 'react'
import { IPost } from '../Post/post.interface'
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState<any>();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div>
            {posts?.map((post: IPost) => {
                return (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <div>
                            {post.id} <span />
                            {post.title}

                        </div>
                    </Link>

                )
            })}
        </div>
    )
}

export default PostList
