const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


//Connecting to DataBase
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('Connected to DataBase'));


// Importing Routes
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);




app.listen(3000, () => console.log('Server up and running'));
