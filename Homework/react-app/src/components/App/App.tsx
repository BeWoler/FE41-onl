import Header from "../Header/Header";
import MainPage from "../../Pages/MainPage/MainPage";

const App = () => {
  return (
    <div className="App">
      <Header isAuth={false} />
      <MainPage />
    </div>
  );
};

export default App;
