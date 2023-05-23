import SignForm from "../components/Signform";
import React from "react";
import '../components/style/style.css'
import { localStorageTheme } from "./mainPage";
import { Link } from "react-router-dom";
export const Sign = () => {
    return(
        <div className={`${localStorageTheme} sign`}>
            <Link to="/"><button className="linkToPosts">Main page</button></Link>
            <h2 className="sign__header">Sign</h2>
        <SignForm/>
        </div>
    )
}
