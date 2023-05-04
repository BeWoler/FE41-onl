import { useState, useEffect, useRef } from "react";

// Жизненный цикл
// Монтирование компонента
// Размонтирование компонента
// Обновление компонента

const User = () => {
  const [name, setName] = useState<string>("Misha");
  const [lastName, setLastName] = useState<string>("Any");

  const divRef = useRef(null);

  useEffect(() => {
    console.log("mounted"); // ComponentDidMount
    return () => {
      // ComponentWillUnmount
      console.log("unmounted");
    };
  }, [name]); // ShouldComponentUpdate & ComponentDidUpdate

  useEffect(() => {
    setLastName(lastName + name);
    console.log(lastName);
  }, [name]);

  return (
    <div
      ref={divRef}
      onClick={() => {
        setName("Sasha");
      }}>
      {name}
    </div>
  );
};

export default User;
