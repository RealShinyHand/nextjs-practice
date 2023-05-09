import { connectDB } from "@/util/connectDB";
import style from "./write.module.css";
import { ObjectId } from "mongodb";

export default async function  Edit(props){
    const id = props.params.id;

    const db = (await connectDB).db("forum");
    const query = {_id : new ObjectId( props.params.id)};
    const post = await db.collection('post').findOne(query);
    
    console.log(post);

   
    return (
        <div className="p-20">
            <h4 className={style.headTitle}>Write Form</h4>
            <form action="/api/posts/edit" className={style.form} method="POST">
                <input type="hidden" id="id" name="id" value={post._id.toString()}/>
                <label htmlFor="title" className={style.label}>Title</label>
                <input name="title" id="title" type='text' className={style.textInput} defaultValue={post.title}/>
                <label className={style.label} htmlFor="title">Content</label>
                <input name="content" id="content" type='text' className={style.textInput} defaultValue={post.content}/>
                <button type='submit' className={style.button}>Button</button>
            </form>
        </div>
    )
}