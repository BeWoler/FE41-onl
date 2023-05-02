import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const emailHandler = (e: any) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const passwordHandler = (e: any) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const usernameHandler = (e: any) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const buttonHandler = () => {
    console.log(formData);
  };

  return (
    <div>
      <Input
        type='text'
        placeholder='email'
        value={formData.email}
        handler={emailHandler}
      />
      <Input
        type='password'
        placeholder='password'
        value={formData.password}
        handler={passwordHandler}
      />
      <Input
        type='text'
        placeholder='username'
        value={formData.username}
        handler={usernameHandler}
      />
      <Button text='Вывести состояния в консоль!' handler={buttonHandler} />
    </div>
  );
};

export default Form;
