const allUsers = [{
    firstName:"aayush",
    gender : "male"
},{
    firstName:"raman",
    gender : "male",
    metadata:
    {
        age:21,
        address:""

    }
},{
    firstName:"priya",
    gender : "female"
}
]

for(let i = 0; i<allUsers.length; i++){
    if(allUsers[i].gender == "male"){
        console.log(allUsers[i].firstName)
    }
}

for(let i = 0; i<allUsers.length; i++){
    if(allUsers[i]["metadata"]["age"] == "male"){
        console.log(allUsers[i].firstName)
    }
}