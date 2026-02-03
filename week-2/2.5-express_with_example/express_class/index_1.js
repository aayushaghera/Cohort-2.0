const express = require("express");

const app = express();

app.use(express.json());
const users = [{
    name: "aayush",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofhealthykidneys = 0;
    
    // Fix: Looping based on johnkidneys.length
    for (let i = 0; i < numberofkidneys; i++) {
        if (johnkidneys[i].healthy) {
            numberofhealthykidneys += 1;
        }
    }
    
    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    });
});

app.post("/" , function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })
    res.json({
        msg:"done"
    });
})

app.put("/" , function(req,res){

    for(let i = 0; i<users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        
    })
})

app.listen(3001)
