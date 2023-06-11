import React from 'react'
import { Route, Routes } from 'react-router'
import MainPage from '../MainPage/MainPage'
import PostsPage from '../PostsPage/PostsPage'
import SignPage from '../SignPage/SignPage'
import Post from '../Post/Post'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="posts">

                <Route index element={<PostsPage />} />
                <Route path=":id" element={<Post />} />
            </Route>

            <Route path="/sign" element={<SignPage isAuth={false} />} />

            <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>

    )
}

export default AppRouter
