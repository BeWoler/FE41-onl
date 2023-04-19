import Header from "../Header/Header";
import HeaderClass from "../Header/HeaderClass";
import Button from '../Button/Button';

const App = () => {
  const hello = 'Hello im a variable on Button';
  const buttonText = 'Hello im Button';

  const buttonHandler = () => {
    console.log(buttonText)
  }

  return (
    <div>
      <Button content="Push me!" isDisabled={false} handler={buttonHandler}/>
      <HeaderClass id={1}/>
      <Header id={1} />
      <h1>Hello Functional Component</h1>
      <h2>{hello}</h2>
    </div>
  );
};

export default App;
