import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import jwt  from "jsonwebtoken";


// get all task  
export async function GET(request){
    try {
        await connectDb();
        const tasks = await Task.find()
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in getting data !!", 404, false);
    }
}


// create all the  task

export async function POST(request){
    const { title, content, userId} = await request.json();

    // fetchinf user login ID

    const authToken = request.cookies.get("authToken")?.value;
    // console.log(authToken);
     const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data._id);

    try {
        const task = new Task({
            title,
            content,
            userId: data._id,
        });
        await connectDb();
        const createdTask = await task.save()
        return NextResponse.json(createdTask, {
            status:201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create Task !! ",
            success: false,
        });
    }
}