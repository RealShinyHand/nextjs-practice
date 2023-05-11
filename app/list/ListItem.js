'use client'

import CButton from "@/components/Button/CButton";
import LinkButton from "@/components/Button/LinkButton";
import Link from "next/link";

export default async function ListItem(props) {

    const item = props.item;
    const deleteHadler = function(e){
        console.log(item._id);
        fetch(`/api/posts/${item._id}`,{method:"DELETE"})
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            console.log(e.target.parent);
            e.target.parentElement.style.opacity="0.0";
            setTimeout(()=>{
                e.target.parentElement.style.display="none";
            },1000);
           
        })
    };
    return (
        <div className="list-item" >
            <Link href={`/detail/${item._id}`} prefetch={false}>
                <h4>{item.title}</h4>
            </Link>

            <p>{item.content}</p>
            <LinkButton dest={`/edit/${item._id}`}>
                <p>Edit</p>
            </LinkButton>
            
            <CButton onClickHandler={deleteHadler}>delete</CButton>

        </div>);
}