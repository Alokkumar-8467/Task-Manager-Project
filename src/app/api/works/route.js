import { NextResponse } from "next/server";
import { Work } from "@/models/work";
import { connectDb } from "@/helper/db";

connectDb();

// get all work
export async function GET(request){
    let works = []
    try{
        works = await Work.find();
} catch(error){
    console.log(error)
    return NextResponse.json({
        message:"Failed to get Works",
        success:false,
    });
    }
    return NextResponse.json(works);
}

// work post

export async function POST(request){
    const {workName, TaskAssignTo,TaskCreatedDate, TaskCompletedDate} = await request.json()

    console.log({workName, TaskAssignTo,TaskCreatedDate, TaskCompletedDate})

    const work = new Work({
        workName,
        TaskAssignTo,
        TaskCreatedDate, 
        TaskCompletedDate,
    });
    
    try {
        const createWork = await work.save()
        const response = NextResponse.json(work, {
            status:201,
        });
        return response;
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"fail to create work !!",
            status:"false"
    })

    }
}
