const Subscription = require("../models/subscription");



exports.add = async (req, res) => {
    const { title, description,price_t,price,emailContent} = req.body;
    const imageName = req.file.filename;
    try {
        // Check if subscription with same title and description exists
        // If not exists, create a new subscription
            const newSubscription = await Subscription.create({
                title:title,
                description:description,
                imageUrl:imageName,
                price_t:price_t,
                price:price,
                emailContent:emailContent
            });
        
        return res.status(200).json({ success: true, message: 'Subscription added/updated successfully' });
    } catch (error) {
        console.error('Error adding/updating subscription:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

exports.delete = async (req, res) => {
    try {
        const result = await Subscription.deleteMany({});
        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.error('Error deleting users:', error);
        return res.status(200).json({ message: error });

    }
};

exports.get = async (req, res) => {
    try {

        const subscriptions = await Subscription.find();
        res.status(200).json({ subscriptions });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(200).json({ message: 'Internal Server Error' });
    }
};