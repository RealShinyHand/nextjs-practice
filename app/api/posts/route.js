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
        if(doc.title.trim() == '' || content.trim() == ''){
            throw new Error('Parameter is not fully saticified');
        }
        const result = await postCollection.insertOne(doc);
        console.log(result);
      
    }catch( e){
        console.log(e);
    } 
      
    return new Response("",{
        status : 301,
        headers:{
            Location: "/list",
        }
    })
}

export async function GET(req){
    const db = (await connectDB).db('forum');

    const postCollection = db.collection("post");
    const data= await postCollection.find({}).toArray();
    return NextResponse.json(data);
}

export async function DELETE(req){

    const db = (await connectDB).db("forum");
    const id = "tepm;"
    let result = await db.collection('post').deleteOne({_id:id});

    console.log(result);
    return NextResponse.json({state:200})
}