const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://todo:todo123@cluster0.zpd4r.mongodb.net/todos");
const tosoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos" , tosoSchema);
module.exports = {
    todo
}