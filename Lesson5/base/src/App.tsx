import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage";
import { PostPage } from "./pages/postList";
import { Sign } from "./pages/Sign";
import Post from "./components/Post";
import { data } from "./components/PostList";

const App = () => {
   return(
    <div>
     <Routes>
        {data.map((item) => {return(<Route path={`posts/${item.id}`} element={<Post id={item.id} author={item.author} title={item.title}/>}/>)})}
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Posts" element={<PostPage/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="*" element={<div>Page not found</div>}/>
     </Routes>
     </div>
    )
}
export default App;