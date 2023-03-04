const multer = require('multer');
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    },
    fileName: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
});

const uploadImage = multer({ storage: fileStorage, limits: { fieldSize: 50 * 1024 * 1024 } })

module.exports = uploadImage;