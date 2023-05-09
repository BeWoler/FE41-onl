import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";

const App = () => {
  return (
    <div className="App">
      <Header isAuth={false} />
      <MainPage />
    </div>
  );
};

export default App;
