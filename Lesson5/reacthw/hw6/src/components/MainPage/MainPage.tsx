import { useState } from "react";
import Title from "../Title/Title";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";

interface IMainPageProps {
  id: number;
  author: string;
}

const data = [
  { id: 1, title: 'First post', author: 'King' },
  { id: 2, title: 'foster', author: 'Sasha' },
  { id: 3, title: 'category', author: 'Maria' },
  { id: 4, title: 'fault', author: 'Lev' },
  { id: 5, title: 'curtain', author: 'Lev' },
  { id: 6, title: 'jury', author: 'King' },
  { id: 7, title: 'extraterrestrial', author: 'Sasha' },
  { id: 8, title: 'deputy', author: 'Martin' },
  { id: 9, title: 'amuse', author: 'Joe' },
  { id: 10, title: 'snail', author: 'King' },
]

const MainPage = () => {
  const [obj, setObj] = useState<IMainPageProps>({
    id: 0,
    author: "string",
  });
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div dataList={data} />
      <div
        onClick={() => {
          setObj({ ...obj, alert obj.id});
          console.log(obj);
        }}>
        <div>{obj.id}</div>
        <div>{obj.author}</div>
      </div>
    </div>
  );
};

export default Header;
