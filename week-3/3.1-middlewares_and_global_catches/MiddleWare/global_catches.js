const express = require("express");

const app = express();

app.use(express.json());

app.post("/helth-checkup", function(req,res){
    const kidenys = req.body.kidenys;
    const kidenyLength = kidenys.length;

    res.send("your kideny length is" +kidenyLength);

});

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with our server"
    })
})

app.listen(4001);