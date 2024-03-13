import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content : {
        type:String,
        required: true,
    },
    addedDate:{
        type:Date,
        required: true,
        default: Date.now(),
    },
    status: {
        type:String,
        enum:["pending","completed"],
        default:"pending",
    },

    /* How to add user and task api.
     We have two options
    1. First Approach for modeling.

        In this we make only one user-api.
        And inside it we pass user name,about,phone, email.
        And at end we pass the task object inside user api.
        And we get all details at a time.
        But it create a problem, when we fetch user api,
        it fetch task details also, but according to our program requirment,
        we some time want user details and sometime user-task details. 
        So, we move to the 2nd approach


     2. Second Approach

        In this approach we create user and user-task api,
        and linked with each other.
        For linking particular user with particular user-task,
        we use user-id.
        By user-id we find or identify which user it is.
        Note: If we have a user,  by user we can't identify that user-task,
        But if we have a task and that task contain user-id, So we identify that user.

        we can also reverse the process and pass task-id in user,
        So, we can tarvel from user to task and task to user
*/
    // by using mongoose.ObjectId we can identify the user-id.  
    userId:{
        type:mongoose.ObjectId,
        required: true,
    },

});

 export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);

