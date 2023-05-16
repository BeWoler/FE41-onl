import Button from "../Button/Button";
import Input from "../Input/Input";
import { ISignForm } from "../SignForm/interface/SignForm";


//signin
const SignForm = (props: ISignForm) => {

   return (
      <form>
         <div>{props.signIn ? "Sign In" : "Sign Up"}</div>
         {/* {inputData?.map((input) => {
        return (
          <Input
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
            handler={input.handler}
            value={input.value}
          />
        );
      })} */}
         <Input type="text" placeholder="email" handler={() => { }} value="" />
         <Input type="text" placeholder="password" handler={() => { }} value="" />
         {!props.signIn && <Input placeholder="first Name" type="text" handler={() => { }} value="" />}
         {!props.signIn && <Input placeholder="username" type="text" handler={() => { }} value="" />}
         <Button handler={() => { }} value={props.signIn ? "Sign In" : "Sign Up"} />
         <div>Кнопка для смены формы</div>
      </form>
   );
};

export default SignForm;