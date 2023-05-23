import { useState } from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
import React from "react";
import { Link } from "react-router-dom";
import { localStorageTheme } from "./mainPage";

const PostPage = () => {
    return(
        <div className={localStorageTheme}>
        <Link to="/"><button className="linkToPosts">Main page</button></Link>
            <PostList/>
        </div>
    )
}
export {PostPage}