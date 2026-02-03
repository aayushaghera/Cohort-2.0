const express = require("express");

const app = express();

app.use(express.json({}));

app.get("/health-checkup" , function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidenyid = Number(req.query.kidenyid);

    if(username != "aayush" || password != "pass")
    {
       res.status(400).json({"msg": "something up with your inputs"})
       return;
    }

    if(kidenyid != 1 && kidenyid != 2)
    {
        res.status(400).json({"msg":"something up with your input"})
    }

    console.log(username);
    console.log(password);


    res.json({
        msg: "your kideny is fine"
    });
});

app.listen(3004);