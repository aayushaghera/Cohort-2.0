const express = require("express"); // Fixed app to express
const jwt = require("jsonwebtoken");
const secretKey = "123456";

const app = express()
app.use(express.json())

// Array of user objects
const ALL_USERS = [
    {
        username: "aayushaghera@gmail.com",
        password: "123",
        name: "aayush"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "raman"
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "priya"
    }
];

function userExists(username,password){
    let userExists = false;
    for(let i =0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg : "user do not exist in our databse"
        });
    }
    var token = jwt.sign({username:username},secretKey);
    return res.json({
        token
    });
});

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    const decode = jwt.verify(token,secretKey);
    const username = decode.username;
    res.json({
        users: ALL_USERS
    })
});

app.listen(2001);