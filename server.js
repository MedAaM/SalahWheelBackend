const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/user');
const subscriptionRouter = require('./routes/Subscription')
const port = process.env.port || 8000
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
require('./utils/db');


app.use('/api/v1/user', usersRouter);
app.use('/api/v1/subscription', subscriptionRouter);



app.listen(port, () => {
    console.log(`running on port ${port}`)
})

