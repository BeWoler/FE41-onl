import React, { useEffect, useState } from 'react'
import { IPost } from './post.interface'
import './index.css'
import { useParams } from 'react-router'

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState<IPost>({ completed: false, id: 0, title: "", userId: 0 });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [params.id])

    return (
        <div className='post'>
            <div>{post.id}</div>
            <h2>{post.title}</h2>
            <p>{post.completed}</p>
        </div>
    )
}

export default Post
