const express = require("express");

const app = express();

const cors = require("cors"); 

app.use(cors());

app.use(express.json());

app.get("/interest",function(req,res){
    const principal = parseInt(req.query.a);
    const rate = parseInt(req.query.b);
    const time = parseInt(req.query.c);
    const interest = (principal* rate*time)/100;
    const total = principal + interest;
    res.send({
        total: total,
        interest:interest
    })
});

app.listen(8080);