const express = require("express");

const app = express();

let numberofrequest = 0;

app.use(express.json());

function calculaterequest(req,res,next)
{
    numberofrequest++;
    console.log(numberofrequest);
    next();
}

//app.use(calculaterequest);

app.post("/health-checkup" , calculaterequest,function(req,res){
    res.send("Health Checkup Route");

    console.log(req.body);
});

app.get("/health-checkup2" , calculaterequest,function(req,res){
    res.send("Health Checkup Route2");
});

app.listen(3009);