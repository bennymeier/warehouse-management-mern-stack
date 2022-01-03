const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db.connection');
const userRouter = require('./routes/user.routes');
const authRouter = require('./routes/auth.routes');
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// routes
app.use('/api', [userRouter]);
app.use('/api/auth', [authRouter]);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
