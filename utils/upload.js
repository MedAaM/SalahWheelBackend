const multer = require('multer');

// Multer configuration for storing images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // Destination folder for storing images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Use the original filename
    }
});

 const upload = multer({ storage: storage });
 module.exports = upload;