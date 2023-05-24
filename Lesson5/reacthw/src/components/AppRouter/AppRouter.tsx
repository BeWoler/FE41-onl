import React from 'react'
import MainPage from "../../HomeWorkRoutes/MainPage";
import PostsPage from "../../HomeWorkRoutes/PostsPage";
import SignPage from "../../HomeWorkRoutes/SignPage";
import { Routes, Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <Route path = "/" element={<MainPage />} />
        <Route path = "/posts" element={<PostsPage />} />
        <Route path = "/sign" element={<SignPage />} />
      </Routes>
  )
}

export default AppRouter