const express = require("express");

const app = express();

const cors = require("cors"); 

app.use(cors());

app.use(express.json());

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = a + b;
    res.send(ans.toString()); // This part is correct
});

app.listen(2332);