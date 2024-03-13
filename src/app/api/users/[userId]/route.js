import { NextResponse } from "next/server";
import { User } from "@/models/user";



// get single user
export async function GET(request, {params}){
    const {userId} = params;
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user)
    
}

// delete user
export async function DELETE(request,{params}){

    const {userId} = params;
    
    try {
        await connectDb();
        await User.deleteOne({
            _id:userId
        })
        return NextResponse.json({
            message:"User deleted succesfully",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            message:"Error in deleting User",
            success: false,
        });
    }


    return NextResponse.json({
        message : "testing delete Api-route",
    });
}


// update user

export async function PUT(request, {params}){
    const {userId} = params

    const {name, password, about, profileURL} = await request.json();

    try {
        const user = await User.findById(userId)
        user.name=name;
        user.about=about;
        user.password=password
        user.profileURL=profileURL

        await connectDb();
        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({
            message:"falied to update user !!",
            success:false
        })
    }
}