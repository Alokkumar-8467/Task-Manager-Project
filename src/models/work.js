import mongoose, { Schema } from "mongoose";


const WorkSchema = new Schema({
    workName: String,
    TaskAssignTo:String,
    TaskCreatedDate:String,
    TaskCompletedDate:String,
   
});

export const Work = mongoose.models.works || mongoose.model("works", WorkSchema);