const mongoose = require("mongoose");
const validator = require("validator");
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})
//Create a new collection
const Employee = new mongoose.model("Employee",employeeSchema)
module.exports = Employee;