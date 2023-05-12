import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import PostsPage from "../../pages/PostsPage";
import Post from "../Post/Post";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path="posts">
        <Route index element={<PostsPage />}/>
        <Route path=':id' element={<Post />} />
        <Route path='new' element={<div>Create new Post</div>} />
      </Route>
      <Route path='*' element={<div>404 - Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;
