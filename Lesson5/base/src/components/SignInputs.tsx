import React from "react"
import './style/style.css'

export const SignInputs = () => {
    return(
        <div className="SignInputs">
    <input type="text" className="nickname" placeholder='nickname' />
    <input type="password" className="password" placeholder="password" />
    <input type="email" className="email" placeholder="email"/>
    <input type="phonenumber" className="phonenumber" placeholder="phone number"/>
      </div>
    )
}