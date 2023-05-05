import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import User from "./components/User/User";
import Layout from "./components/Layout/Layout";
import Effect from "./Examples/Effect";
import State from "./Examples/State";
import Memo from "./Examples/Memo";
import Callback from "./Examples/Callback";
import Ref from "./Examples/Ref";
import Uid from "./Examples/Uid";
import LayoutEffect from "./Examples/LayoutEffect";
import SignPage from "./Pages/MainPage/SignPage";

function App() {
  return (
    <div className='App'>
      {/* <Layout>
        <MainPage />
        <User />
       <SignPage />
      </Layout> */}
      {/* <Effect />
      <State />
      <Memo /> */}
      <Callback />
      {/* <Ref />
      <Uid />
      <LayoutEffect /> */}
    </div>
  );
}

export default App;
