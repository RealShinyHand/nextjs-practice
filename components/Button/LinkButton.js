'use client'
import { useRouter } from "next/navigation";
import style from "./LinkButton.module.css";

export default function LinkButton(props){
    const router = useRouter();

    const destination = props.dest;
    const name = props.name;

    const onClickHandler = ()=>{
        router.push(destination);
    }
    return (
    <>
        <button onClick={onClickHandler} className={style.linkButton}>{name}</button>
    </>
    );
}