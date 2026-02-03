const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

const schema = zod.array(zod.number());

app.post("/health-checkup" , function(req,res){
    const kidenys = req.body.kidenys;
    const response = schema.safeParse(kidenys)
    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
});

app.listen(5001);