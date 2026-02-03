const express = require("express");
const fs = require("fs");

const app = express();

app.get("/files/:filename" , function(req,res)
{
    const name = req.params.filename;
    console.log(name);
    fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        })
    })
    
});

app.listen(3002);