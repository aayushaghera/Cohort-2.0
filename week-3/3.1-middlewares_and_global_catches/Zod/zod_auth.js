const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

const schema = zod.object({
    email: zod.string().email(),
    password : zod.string().min(7),
    country : zod.literal("IN").or(zod.literal("US")),
    kidenys : zod.array(zod.number())

})

app.get("/login" , function(req,res){
    
    const response = schema.safeParse(req.body)
    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
    }else{
        res.json({
            response
        })
    }
});

app.listen(5002);