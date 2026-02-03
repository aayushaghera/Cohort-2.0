const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
app.use(express.json())

// Secret key 
const secretKey = '123456';

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

// Login route: Generates a JWT and sends it to the client
app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
    if(!userExists(username,password)){
        return res.status(403).json({
            msg : "user do not exist in our databse"
        });
    }
    var token = jwt.sign({username:username},secretKey);
    return res.json({
        message: 'Login successful!',
        token
    });
});

// Middleware to verify JWT on protected routes
function authenticateToken(req, res, next) {

    const token = req.headers.authorization;

  // const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  // Verify the token
    const decode = jwt.verify(token,secretKey);
    const username = decode.username;
    next();
}

app.get('/protected', authenticateToken, function(req, res){
    res.json({
        users: ALL_USERS
    })
});


app.get('/dashboard', authenticateToken, function(req, res){
  res.json({
    message: 'Welcome to your dashboard!',
  })
});

app.listen(1001);
