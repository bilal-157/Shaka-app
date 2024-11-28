import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/ConnectDB";
import PostModel from "@/app/Models/Post"
import { NextResponse } from "next/server";
export async function GET(req) {
    
    try {
        await mongoose.connect(ConnectionString)
        const data = await PostModel.find()
        console.log(data)
        return NextResponse.json({"message":data},{status:200})

    } catch (error) {
        return NextResponse.json({"messga":"false"},{status:400})
        
    }
}

export async function POST(req) {
  try {

    await mongoose.connect(ConnectionString)
    const products = await req.json();
    const res = await PostModel.create(products);

    return NextResponse.json({ message: 'Product created successfully!', data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create product', error: error.message }, { status: 400 });
  }
}
