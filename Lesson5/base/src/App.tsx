import { resourceLimits } from "worker_threads";
import Header from "./components/Header";

const App = () => {
    return(
        <div>
            <Header isAuth={true}/>
        </div>
    )
}
export default App