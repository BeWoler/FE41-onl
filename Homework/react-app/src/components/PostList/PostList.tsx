import PostItem from "../PostItem/PostItem";

const PostList = ({ data }: any) => {
  return (
    <ul>
      {data.map((item: any) => {
        return PostItem(item);
      })}
    </ul>
  );
};

export default PostList;
