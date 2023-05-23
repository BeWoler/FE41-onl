import React from 'react'
import { IButtonProps } from '../Button/interface/Button'

const Button = (props: IButtonProps) => {
   return (
      <button onClick={props.handler}>{props.value}</button>
   )
}

export default Button