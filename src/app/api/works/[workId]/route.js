import { NextResponse } from "next/server";
import { Work } from "@/models/work";


// get single work 
export async function GET(request, {params}){
    const {workId} = params;
    const work = await Work.findById(workId).select("-password");
    return NextResponse.json(work)
    
}

// delete work

export async function DELETE(request, {params}){

    const {workId} = params;

    try {
        await Work.deleteOne({
            _id: workId,
        });
        return NextResponse.json({
            message:"Work delete Sucesfully",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            message:"Error in deleting Work",
            success:false,
        });
    }
}

// update work

export async function PUT(request, {params}){
    const {workId} = params;

    const {workName, TaskAssignTo, TaskCreatedDate, TaskCompletedDate} = await request.json();

    try {
        const work = await Work.findById(workId)
        work.workName=workName;
        work.TaskAssignTo=TaskAssignTo;
        work.TaskCreatedDate=TaskCreatedDate;
        work.TaskCompletedDate=TaskCompletedDate;

        const updateWork = await work.save();
        return NextResponse.json(updateWork);
    } catch (error) {
        return NextResponse.json({
            message:"Failed to update user !!",
            status:false,
        })
    }
}

