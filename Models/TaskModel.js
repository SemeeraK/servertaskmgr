const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    taskName:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:true
    },
    taskDes:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        required:true
        // default: Date
    },
    important:{
        type:Boolean,
        required:true
    },
    // compl:{
    //     type:Boolean,
    //     required:true
    // }
});


const  TaskModel = mongoose.model('todos', TaskSchema);
module.exports = TaskModel
