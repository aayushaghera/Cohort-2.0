const zod = require("zod");

function validinput(obj)
{
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(4) 
    })

    const response = schema.safeParse(obj);
    console.log(response);

    
}

validinput({
    email : "aayush@gmail.com",
    password : "aayush123"
});