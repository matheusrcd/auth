const express = require('express');
const app = express();

const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);




app.listen(3000, () => console.log('Server up and running'));
