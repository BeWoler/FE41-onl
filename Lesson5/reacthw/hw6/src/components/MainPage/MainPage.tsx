import { useState } from "react";
import PostItem from "../PostItem/PostItem";
import PostList from "../PostList/PostList";

interface IHeaderProps {
  title: string;
  number?: number;
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
  const [obj, setObj] = useState<IHeaderProps>({
    title: "Header",
    number: 0,
  });
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <PostList dataList={data} />
    <div
        onClick={() => {
          setObj({ ...obj, title: obj.title });
          console.log(obj);
        }}>
    </div>
    </div>
  );
};

export default MainPage;
