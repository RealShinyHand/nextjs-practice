import { connectDB } from "@/util/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req,query){

    console.log(query);
    const id = query.params.id;
    console.log(id);
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').deleteOne({_id:new ObjectId(id)});

    console.log(result);
    return NextResponse.json({state:200, result:{...result}})
}