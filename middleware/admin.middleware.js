const jwt = require('jsonwebtoken');
require('dotenv').config()

const middleware = {
    validateRegister(req, res, next) {
        if (!req.body.username || req.body.username.length < 3) {
            return res.send({
                message: "Please enter a username with min 3"
            })
        }
        if (!req.body.password || req.body.password.length < 6) {
            return res.send({
                message: "Please enter a password with min 6"
            })
        }
        next();
    },
    isLoggedIn(req, res, next) {
        if (!req.headers.authorization) {
            res.send({ message: "You session is not valid" });
        }
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.userData = decoded;
            next();
        }
        catch {
            res.send({ message: "You session is not valid" });
        }
    }
}

module.exports = { ...middleware }