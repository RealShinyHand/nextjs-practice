import LinkButton from "@/components/Button/LinkButton";
import { connectDB } from "@/util/connectDB";
import Link from "next/link";
import ListItem from "./ListItem";
export default async function List() {
    const db = (await connectDB).db('forum');
    const postsList = await db.collection('post').find({}).toArray();

    return (
        <div className="list-bg">
            {postsList.map((item, idx) => {
                let post = {...item,_id:item._id.toString()};
                return <ListItem key={idx} item={post} />
            })}
        </div>
    )
}