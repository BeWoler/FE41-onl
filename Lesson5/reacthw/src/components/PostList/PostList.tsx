import React from 'react';
import PostItem from '../PostItem/PostItem';
import { IPostItemProps } from "../PostItem/interface/postitem.interface";
import { Link } from 'react-router-dom';
import style  from './style/postlist.module.css'

interface IPostItemList {
    posts: IPostItemProps[];
}

const PostList = () => {

    const [posts, setPosts] = React.useState<any>();

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
          .then((response) => response.json())
          .then((json) => setPosts(json));
      }, []);

    return (
        <div>
            <ul className={style.list}>
            {posts?.map((post: IPostItemProps) => {
                return (
                    <Link className={style.post} key={post.id} to={`/posts/${post.id}`}>
                        <div>
                            <p>{post.id}</p>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                ) 
            })}    
            </ul>
        </div>
    );
};

export default PostList;