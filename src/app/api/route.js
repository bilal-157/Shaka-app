import mongoose from "mongoose";
import { ConnectionString } from "@/app/lib/ConnectDB";
import PostModel from "@/app/Models/Post"
import { NextRequest, NextResponse } from "next/server";
export async function GET(req) {
    
    try {
        await mongoose.connect(ConnectionString)
        const data = await PostModel.find()
        console.log(data)
        return NextResponse.json({"messga":data},{status:200})

    } catch (error) {
        return NextResponse.json({"messga":"false"},{status:400})
        
    }
}