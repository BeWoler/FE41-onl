import { useState } from "react";
import Title from "../Title/Title";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";

interface IHeaderProps {
  title: string;
  number?: number;
}

const navigation = [
  { id: 0, title: 'Any 1', link: 'https://google.com'},
  { id: 1, title: 'Any 2', link: 'https://google.com'},
  { id: 2, title: 'Any 3', link: 'https://google.com'},
  { id: 3, title: 'Any 4', link: 'https://google.com'},
]

const Header = () => {
  const [obj, setObj] = useState<IHeaderProps>({
    title: "Header",
    number: 0,
  });
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Nav navigationLinks={navigation}/>
      <div
        onClick={() => {
          setObj({ ...obj, title: obj.title + "Header2" });
          console.log(obj);
        }}>
        <div>{obj.title}</div>
        <div>{obj.number}</div>
        <Title content='Any content' />
      </div>
        <Form />
    </div>
  );
};

export default Header;
