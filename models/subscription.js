const mongoose = require("mongoose");
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default:'',
        required: true
    },
    price_t:{
           type: String,        
    },
    price: {
        type:Number,
    },
    emailContent : {
        type:String,
    }
});

const subscription = mongoose.model('SubscriptionModel', subscriptionSchema);
module.exports = subscription;