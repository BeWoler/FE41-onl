import React from 'react'
import { IInput } from './input.interface'

const Input = (props:IInput) => {
  return (
    <input {...props}/>
  )
}

export default Input
