const fs = require("fs");

function putCopyrightToFile(cb)
{
    fs.readFile("a.txt","utf-8",function(err,data){
        data = data + "copy right 2024 aayush aghera";
        cb(data)
        fs.writeFile("a.txt",data,"utf-8",function(err){
        cb(err)
        })
    });
}


function onDone(data)
{
    console.log(data)
}

putCopyrightToFile(onDone)