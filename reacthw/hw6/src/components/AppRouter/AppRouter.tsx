import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
// import PostsPage from "../../pages/PostsPage";
import SignForm from "../../pages/SignPage";
import PostPage from "../../pages/PostPage";
// import Post from "../Post/Post";

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<MainPage />} />
         <Route path="/PostPage" element={<PostPage />} />
         {/* <Route path='/Post:id' element={<Post />} />  */}
         <Route path="/SignForm" element={<SignForm />} />
         <Route path='*' element={<div>404 - Not Found</div>} />
      </Routes>
   );
};

export default AppRouter;