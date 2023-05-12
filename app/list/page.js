import LinkButton from "@/components/Button/LinkButton";
import { connectDB } from "@/util/connectDB";
import Link from "next/link";
import ListItem from "./ListItem";


export default async function List() {

    let result =  await getData();

    let postList = await result.json();
    return (
        <div className="list-bg">
            {  postList?.map((item, idx) => {
                let post = {...item,_id:item._id.toString()};
                return <ListItem key={idx} item={post} />
            })}
        </div>
    )
}

async function getData(){
    return fetch('http:localhost:3000/api/posts',{method:"GET",cache:'no-store'});
}