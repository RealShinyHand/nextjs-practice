import { connectDB } from "@/util/connectDB";
import { NextResponse } from "next/server";
export async function POST(req){
    console.log(typeof(req));

    const formData = await req.formData();
    console.log(formData.get("title"));
    console.log(formData.get("content"));
    const title = formData.get("title");
    const content = formData.get("content");

    try {
        const db = (await connectDB).db('forum');

        const postCollection = db.collection("post");
        // create a document to insert
        const doc = {
          'title': title,
          'content': content
        }
        if(doc.title == null || content == null){
            throw new Error('Parameter is not fully saticified');
        }
        const result = await postCollection.insertOne(doc);
        console.log(result);
      
    }catch( e){
        alert(e);
        console.log(e);
    } 
      
    NextResponse.redirect("/list");
}

export async function GET(req){

}