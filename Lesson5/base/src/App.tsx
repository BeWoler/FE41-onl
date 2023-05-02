import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
const App = () => {
    return(
        <div>
            <Header isAuth={true}/>
            <PostList/>
        </div>
    )
}
export default App