const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");


const app = express();
app.use(cors());

app.use(express.json());

app.post("/todos" ,  async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return;
    }
     await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "todo created"
    })
})

app.get("/todos" , async function(req , res){
     const todos = await todo.find({})

     res.json({
        todos
     })
})

app.post("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "you sent the wrong input"
        })
        return;
    }

    await todo.updateOne({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : " todo marked as completed"
    })

})

app.listen(3000);