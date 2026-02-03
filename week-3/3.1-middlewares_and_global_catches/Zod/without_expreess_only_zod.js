const zod = require("zod");

function validinput(arr) {
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

// Corrected function call
//validinput(["1", 2, 3]);

validinput([1, 2, 3]);
