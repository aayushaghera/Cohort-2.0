const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

// Use express.json() to parse JSON bodies
app.use(bodyParser.json());

app.post('/backend-api/conversation', function(req, res) {
    
    const message = req.body;
    //const messag = req.query.message;
    
    console.log(message);
    //console.log(messag);
    
    res.json({
        msg: "2 + 2 = 4"
    });
});

app.listen(port)