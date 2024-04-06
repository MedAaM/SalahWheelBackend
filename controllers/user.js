const User = require("../models/user");


exports.addToList = async (req, res) => {
    console.log(req.body);

    const { fullName, email } = req.body;

    try {
        const user = await User.create({
            email: email.toLowerCase(),
            fullName: fullName,
        });
        return res.status(200).json({ success: true, message: 'added to List' });
    } catch (e) {
        console.log(`error on addToList :::: ${e}`);
        return res.status(200).json({ success: false, message: 'Internal Server Error' });

    }


}
exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await User.deleteMany({});
        return res.status(200).json({ message: "success" })
    } catch (error) {
        console.error('Error deleting users:', error);
        return res.status(200).json({ message: error });

    }
};
exports.getAllUsers = async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json({ users: users, });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(200).json({ message: 'Internal Server Error' });
    }
};