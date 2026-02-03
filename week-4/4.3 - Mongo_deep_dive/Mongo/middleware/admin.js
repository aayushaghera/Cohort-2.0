//const Admin = require("../db/index")
const { Admin } = require("../db") 


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username : username,
        password : password
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg : "Admin doesnt exist"
            })
        }
    }
)
}

module.exports = adminMiddleware;



//using async awiat syntax is used

// async function adminMiddleware(req, res, next) {

//         // Extract username and password from request headers
//         const username = req.headers.username;
//         const password = req.headers.password;

//         // Wait for the result from the Admin.findOne() call
//         const admin = await Admin.findOne({
//             username: username,
//             password: password
//         });

//         // Check if the admin exists
//         if (admin) {
//             next(); // Call next() to continue to the next middleware
//         } else {
//             res.status(403).json({
//                 msg: "Admin doesn't exist"
//             });
//         }
//     } 

