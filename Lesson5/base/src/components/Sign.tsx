import SignForm from "./Signform";
import React from "react";
import './style/style.css'
export const Sign = () => {
    return(
        <div className="sign">
            <h2 className="sign__header">Sign</h2>
        <SignForm/>
        </div>
    )
}
