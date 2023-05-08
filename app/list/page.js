import { connectDB } from "@/util/connectDB";
import Link from "next/link";
export default async function List() {
    const db = (await connectDB).db('forum');
    const postsList = await db.collection('post').find({}).toArray();
    console.log(postsList);
    return (
        <div className="list-bg">
            {postsList.map((item,idx) =>
                <div className="list-item" key={idx}>
                    <Link prefetch={false} href={`/detail/${item._id}`}>
                        <h4>{item.title}</h4>
                    </Link>
                    <p>{item.content}</p>
                </div>
            )}
        </div>
    )
}