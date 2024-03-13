import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"


// get all user

export async function GET(request){
    let users = []
    try {
        await connectDb();
        users = await User.find();
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to get users",
            success:false,
        });
    }

    return NextResponse.json(users);
}

// user post

export async  function POST(request){

    const {name, email, password, about,profileURL } =  await request.json()
    console.log({name, email, password, about,profileURL})

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });
    try{

    user.password = await bcrypt.hash(
        user.password, 
        parseInt(process.env.BCRYPT_SALT ));
        console.log(user);
        await connectDb();
    const createUser = await user.save()

    const response = NextResponse.json(user, {
        status: 201,
    });
    return response;
    } catch (error){
        console.log(error)
        return NextResponse.json({
            message:"fail to create user !!",
            status:"false" 
        },{
            status:500
        })
    }

    // const body = request.body;
    // console.log(body);
    // console.log(request.method);
    // console.log(request.nextUrl.pathname);    
    // console.log(request.nextUrl.searchparam);

    // const jsonData = await request.json();
    // console.log(jsonData);

    // const textData = await request.text();
    // console.log(textData)



    // return NextResponse.json({
    //     message : "posting user data",
    // });

}

// export function DELETE(request){
//     console.log("delete api called");
//     return NextResponse.json({
//         message:"delete !!",
//         status : true,
//     },
//     {status: 201, statusText: "hey Changed text"}
//     );
// }