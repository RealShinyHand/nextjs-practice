import { connectDB } from "@/util/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    const db = (await connectDB).db('forum');
    const postCollection = db.collection("post");

    const formData = await req.formData();
    const data = {
        _id : formData.get("id"),
        title : formData.get("title"),
        content : formData.get("content")
    }
    console.log(data);

    const filter = {_id:new ObjectId(data._id)};
    const updateDoc = {
        $set:{
            title:data.title,
            content:data.content,
        }
    };
    const result = await postCollection.updateOne(filter,updateDoc);

    console.log(result);

    return new Response("",{
        status:301,
        headers:{
            Location:`/detail/${data._id}`
        }
    });
}