import { IUser } from './interface/user';

const User = (props: IUser) => {
return (
  <div>{props.userName}</div>
)
}
export default User;
