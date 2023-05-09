import LinkButton from "@/components/Button/LinkButton";
import { connectDB } from "@/util/connectDB"
import { ObjectId } from "mongodb";

export default async function Detail(props){
    const db = (await connectDB).db("forum");
    const query = {_id : new ObjectId( props.params.id)};
    const post = await db.collection('post').findOne(query);

    return (
        <div>
          <h4>상세페이지임</h4>
          <h4>{post?.title}</h4>
          <p>{post?.content}</p>
          <div className={"button-group"}>
          <LinkButton dest={"/list"} name={"Go to List"}></LinkButton>
          </div>
        </div>
      )
}