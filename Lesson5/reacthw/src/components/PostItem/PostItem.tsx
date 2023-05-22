import React, { useEffect, useState } from 'react';
import { IPostItemProps } from './interface/postitem.interface';
import { useParams } from 'react-router-dom';

interface IPostItemList {
    post: IPostItemProps;
}

const PostItem = () => {
    const params = useParams();

    const [post, setPost] = useState({
        userId: 0,
        id: 0,
        title: "",
        body: ""

    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res => res.json())
        .then((json) => setPost(json))
    }, [params.id]);
    
    return (
        <div>
            <li key={post.id}>
                <div>{post.id}</div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        </div>
    );
};

export default PostItem;