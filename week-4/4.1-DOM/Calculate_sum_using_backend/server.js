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

app.listen(5665, () => {
    console.log("Server is running on http://localhost:5665");
});




// CORS checks if a request is coming from a trusted server (origin). 
//If it is, the request is allowed; if not, it’s blocked. 
 //This helps keep your data safe!