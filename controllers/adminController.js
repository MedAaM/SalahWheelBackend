const Admin = require('../models/admin');
exports.getAdmin = async (req, res) => {
    const { name, password } = req.body

    try {

        const user = await Admin.findOne({ name:name, password:password });
        if (!user) {
            res.status(401).json({
              message: "Login not successful",
              error: "User not found",
            })
          } else {
            res.status(200).json({
              message: "Login successful",
              user,
            })
          }
        } catch (error) {
          res.status(400).json({
            message: "An error occurred",
            error: error.message,
          })
        }
   
};