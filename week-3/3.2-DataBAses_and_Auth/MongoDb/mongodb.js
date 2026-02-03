const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://Patel:Patel5566@cluster0.zpd4r.mongodb.net/user")

const User = mongoose.model('admin',{name: String,email: String,password: String});


app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existuser = await User.findOne({email : username});

    if(existuser){
        return res.status(400).send("username already exist");
    }
    const user = new User(
        {
            name: name,
            email: username,
            password: password
        }
    );
user.save();
res.json({
    "msg" : "user created successfully"
})
})

app.listen(1212);
