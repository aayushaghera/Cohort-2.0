const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db") 

// Admin Routes
router.post('/signup',  async function(req, res){
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;
    
   await Admin.create({
        username : username,
        password: password
    })

    res.json({
        message : "Admin created successfully"
    })
    
});

router.post('/courses',adminMiddleware, async function(req, res){
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
           title : title,
           description : description,
           imageLink : imageLink,
           price : price
    })
    console.log(newCourse);
    res.json({
        message: 'cource created successfully', 
        CourseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware,  async function(req, res){
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        Course:response
    })
});

module.exports = router;



// using promises .then() syntax is used

// router.post('/signup', function(req, res){
//     // Implement admin signup logic

//     const username = req.body.username;
//     const password = req.body.password;
    
//     Admin.create({
//         username : username,
//         password: password
//     })
//     .then(function(){
//         res.json({
//             message : 'Admin created successfully'
//         })
//     })
//     .catch(function(){
//         res.json({
//             message : 'Admin not created successfully'
//         })
//     })
// });