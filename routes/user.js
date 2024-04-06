var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')
const AdminController = require('../controllers/adminController')
const sendEmail = require('../utils/nodemailer')
const initiatePayement = require('../utils/payementTab')

router.post('/addTolist', userController.addToList);
router.post('/deleteAllUsers', userController.deleteAllUsers);
router.get('/getUsers', userController.getAllUsers);
router.post('/admin',AdminController.getAdmin);
router.post('/submit-name' , async (req, res) => {
    try {
        const { email,content } = req.body;

        await sendEmail(email, content);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in sending email: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/notify-looser' , async (req, res) => {
    try {
        const { email,content } = req.body;
      
        // Send email with appropriate template
        await sendEmail(email, content);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in sending email: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.post('/notify-winner' , async (req, res) => {
    try {
        const { email,content } = req.body;
        
        // Send email with appropriate template
        await sendEmail(email, content);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in sending email: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/payement' , initiatePayement.initiatePayement)
module.exports = router;

