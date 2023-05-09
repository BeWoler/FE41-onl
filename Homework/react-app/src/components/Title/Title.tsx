interface ITitle {
  content: string;
}

const Title = (props: ITitle) => {
  return <div>{props.content}</div>;
};
export default Title;
