import HeaderClass from "../Header/HeaderClass";
import Header from "../Header/Header";
import Condition from "../Condition/Condition";

function App() {
  return (
    <div className='App'>
      <Header />
      <HeaderClass />
      <Condition isAuth={true} />
    </div>
  );
}

export default App;
