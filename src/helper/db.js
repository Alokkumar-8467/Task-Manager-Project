import mongoose, { connection } from "mongoose";
import {User} from "../models/user";
import {Work} from "../models/work";

const config = {
    isConnected: 0,
};

export const  connectDb = async () => {

    if(config.isConnected){
        return;
    }

    try {
      const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName : "work_manager",
        });
        console.log("db Connected...")
        console.log(connection.readyState);
        config.isConnected=connection.readyState;
        // const user = new User({
            
        // })
        // await user.save();
        // console.log("user is created");
        console.log("connected with host", connection.host)
    } catch (error) {
        console.log("failed too connect with database")
        console.log(error);
    }
};