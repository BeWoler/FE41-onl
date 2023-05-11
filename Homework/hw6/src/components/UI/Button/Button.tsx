import React from 'react'
import { IButtonProps } from './button.interface'

const Button = (props: IButtonProps) => {
  return (
    <button onClick={props.handler}>{props.value}
    </button>
  )
}

export default Button
