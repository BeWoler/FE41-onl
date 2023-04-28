import { resourceLimits } from "worker_threads";
import Header from "./components/Header";

const Func = () => {
    let torf = window.confirm('t or f');
    return (torf);
}
const App = () => {
    return(
        <div>
            <Header isAuth={Func()}/>
        </div>
    )
}
export default App