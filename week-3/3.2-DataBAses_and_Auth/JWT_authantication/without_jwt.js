const express = require('express');
const app = express();

app.use(express.json())


const ALL_USERS = [
    {
        username: "aayushaghera@gmail.com",
        password: "123",
        name: "aayush"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "raman"
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "priya"
    }
];


app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

  
const user = ALL_USERS.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  res.json({
    message: 'Login successful!',
    user: { id: user.id, username: user.username, role: user.role } 
  });
});


function authenticateUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

  

  // Validate user against the stored data
  const user = ALL_USERS.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  req.user = user;

  next();
}


app.get('/protected', authenticateUser, (req, res) => {
  res.json({
    message: 'Access granted!',
    user: req.user 
  });
});



app.listen(1111);