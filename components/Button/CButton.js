'use client'

import style from "./LinkButton.module.css";

export default function CButton(props){

    let name = props.name;

    if(props.children != null){

        name = props.children;
    }


    return (
    <>
        <button onClick={props.onClickHandler} className={style.linkButton}>{name}</button>
    </>
    );
}