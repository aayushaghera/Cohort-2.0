const express = require("express");

const app = express();

app.use(express.json({}));

function userMiddleware(req,res,next)
{
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username!="aayush" && password != "pass"){
        res.status(403).json({
            msg:"incorrect inputs"
        });
    }
    else{
        next();
    }

console.log(username);
console.log(password);
console.log(req.body);
};



function kidenyMiddleware(req,res,next)
{
    const kidenyid = Number(req.query.kidenyid);

    if(kidenyid!=1 && kidenyid != 2){
        res.status(403).json({
            msg : "incorrect inputs"
        });
    }
    else{
        next();
    }
};

app.get("/health-checkup", userMiddleware,kidenyMiddleware,function(req,res){

    res.send("your heart is healthy");
});

app.get("/health-checkup", userMiddleware,kidenyMiddleware,function(req,res){

    res.send("your heart is healthy");
});

app.get("/health-checkup", userMiddleware,function(req,res){

    res.send("your heart is healthy");
});

app.listen(3006);