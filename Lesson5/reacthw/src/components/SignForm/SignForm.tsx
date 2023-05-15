import React, { ChangeEvent, useState } from 'react';
import { ISignForm } from './signForm.interface';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import style from './style/SignForm.module.css'

const SignForm = (props: ISignForm) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [userName, setUserName] = React.useState("")

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    
    const firstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }
    
    const userNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    
    
   

    
    return (
        <form>
            <div>
                <Input inputHandler={emailChange} type='text' placeholder='email' handler={() => {}} value={email}/>
                <Input inputHandler={passwordChange} type='password' placeholder='password' handler={() => {}} value={password}/>
                {!props.signIn && <Input inputHandler={firstNameChange} placeholder="first Name" type="text" handler={() => {}} value={firstName}/>}
                {!props.signIn && <Input inputHandler={userNameChange} placeholder="username" type="text" handler={() => {}} value={userName}/>}
                <div className={style.indent}>
                    <Button handler={() => {}} value={props.signIn ? "Sign In" : "Sign Up"} />
                    <button className={style.button} onClick={props.handler}>Сменить форму</button>
                </div>
            </div>
        </form>
    );
};

export default SignForm;
