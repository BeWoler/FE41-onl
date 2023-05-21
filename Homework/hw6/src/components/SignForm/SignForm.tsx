import React from 'react'
import { ISignForm } from './signForm.interface'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const SignForm = (props: ISignForm) => {
  return (
    <form>
      <div>{props.signIn ? 'Sign in ' : 'Sign up'}</div>
      <Input type="text" placeholder='email' handler={() => { }} value='' />
      <Input type="text" placeholder='password' handler={() => { }} value='' />
      {!props.signIn && <Input type="text" placeholder='First name' handler={() => { }} value='' />}
      {!props.signIn && <Input type="text" placeholder='username' handler={() => { }} value='' />}
      <Button handler={() => { }} value={props.signIn ? 'Sign in ' : 'Sign up'} />
    </form>
  )
}

export default SignForm
