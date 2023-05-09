interface IUser {
  userName: string;
}

const User = (props: IUser) => {
  return <div>{props.userName}</div>;
};
export default User;
