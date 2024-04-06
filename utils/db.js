const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/wheelDb', { useNewUrlParser: true, useUnifiedTopology: true, }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});




