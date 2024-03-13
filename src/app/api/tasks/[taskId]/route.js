import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

// get single task
export async function GET(request , {params}){
    const { taskId } = params;

    try {
        await connectDb();
        const task = await Task.findById(taskId)
        return NextResponse.json(task);
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in getting single task !!", 404 , false)
    }
}



// delete task
export async function DELETE(request ,{params}){
    try {
        await connectDb();
        const { taskId} = params;

        await Task.deleteOne({
            _id: taskId,
        });
        return getResponseMessage("Task Deleted !!", 200, true);
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in Deleting Task", 505, false);
    }
}


// update task
export async function PUT(request ,{params}){
    try {
        const { taskId } = params;

        const { title, content , status } = await request.json();
    
        const task = await Task.findById(taskId)

        task.title=title;
        task.content=content;
        task.status=status;

        await connectDb();
        const updatedTask = await task.save();
        return NextResponse.json(updatedTask);
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in update task !!", 500, false);

    }
} 