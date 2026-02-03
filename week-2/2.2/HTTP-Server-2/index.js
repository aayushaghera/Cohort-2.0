const express = require("express");
const port = 3001
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.post('/route-handler' , function(req,res){

    console.log(req.headers)
    console.log(req.body)
//    res.json({
//         name: "aayush",
//         age:21 
//     })

    //res.send('<b>hi there</b>')

    res.send({
        msg: "2 + 2 = 4"
    })
})

app.listen(port)