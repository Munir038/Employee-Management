const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./src/models/employees");
require("./src/db/conn");
const app = express();


const cors=require("cors");

const corsOptions ={
 origin:'*',
 credentials:true, //access-control-allow-credentials:true
 optionSuccessStatus:200,
}

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions)) // Use this after the variable declaration
const port = process.env.PORT || 3005;
app.use(express.json());

//create a new employee
app.post("/employee",(req,res) =>{
    console.log(req.body);
    const user = new Employee(req.body)
    user.save().then(()=>{
        res.redirect('http://localhost:5173/empData');
    }).catch((e)=>{
        res.send(e);
    });  
});
//read the details of employees
app.get("/employee",async (req,res)=>{
    try{
        const employeesData = await Employee.find();
        res.send(employeesData);
    }
    catch(e){
        res.send(e);
    }
})
//get the individual employee details
app.get("/employee/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const employeeData = await Employee.findById(_id);
        if(!employeeData){
            return res.status(404).send();
        }
        else{
            res.send(employeeData);
        }
    }catch(e){
        res.send(e);
    }
})


//update employee details
app.patch("/employee/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const updateEmployees  = await Employee.findByIdAndUpdate(_id,req.body);
        res.send(updateEmployees);
    }catch(e){
        res.send(e);
    }
})

//delete employee 
app.delete("/employee/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(_id);
        if(!_id){
           return res.status(400).send();
        }
        res.send(deleteEmployee);
    }catch(e){
        res.send(e);
    }

})
//login
app.post('/login', async (req, res) => {
    try {
      // console.log(req.body)
      const { email, password } = req.body;
      const user = await Employee.findOne({ email: email });
    //   console.log(user.password);
  
      if (user) {
        // console.log(user)
        if (password === user.password) {
          res.send({ message: "Log in successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (error) {
      res.status(500).send({ message: "An error occurred" });
    }
  });
  

//signup
app.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const existingUser = await Employee.findOne({ email });
      if (existingUser) {
        return res.send({ message: "User already registered" });
      }
      else{
      // Create a new user
      const newUser = new Employee({ name, email, password });
      await newUser.save();
      res.send({ message: "Successfully registered" });
    }
    } catch (error) {
      res.status(500).send({ message: "Registration failed", error: error.message });
    }
  });
  

app.listen(port,()=>{
    console.log(`This connection is set up at port ${port}`);
})