const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/employee",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{    //return a promise...
    
    console.log("connection is successful");
}).catch((e)=>{

    
    console.log("no connection");
    console.log(e);
}); 