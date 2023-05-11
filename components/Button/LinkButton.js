'use client'
import { useRouter } from "next/navigation";
import style from "./LinkButton.module.css";
import Link from "next/link";

export default function LinkButton(props){
    const router = useRouter();

    const destination = props.dest;
    let name = props.name;

    if(props.children != null){

        name = props.children;
    }

    const onClickHandler = ()=>{
        router.push(destination);
    }
    return (
    <>
        <button onClick={onClickHandler} className={style.linkButton}>{name}</button>
    </>
    );
}