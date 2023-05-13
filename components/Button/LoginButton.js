'use client'

import { signIn } from "next-auth/react";
import style from "./LoginButton.module.css";

export default function CButton(props){


    const loginButtonClickHandler = ()=>{
        signIn();
    }


    return (
    <>
        <button onClick={loginButtonClickHandler} className={style.button}>
            Login</button>
    </>
    );
}