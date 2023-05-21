import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import SignPage from '../../Pages/MainPage/SignPage'
import PostItem from '../PostItem/PostItem'

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<SignPage />} />
            <Route path="/posts" element={<MainPage />} />
            <Route path="/post" element={<PostItem />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    )
}

export default AppRouter
