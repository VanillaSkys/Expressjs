const database = require("../configs/database.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
require('dotenv').config()

const admin = {
    register(req, res, next) {
        database.query(
            `SELECT id FROM admin WHERE email = '${req.body.email}'  `,
            (err, result) => {
                if (result && result.length) {
                    return res.status(409).send({
                        message: "This email is already in use",
                    });
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).send({
                                message: err,
                            });
                        } else {
                            database.query(
                                `INSERT INTO admin (id, email, password ) VALUES ('${uuid.v4()}', ${database.escape(req.body.email)},'${hash}')`,
                                (err, result) => {
                                    if (err) {
                                        throw err;
                                    }
                                    return res.status(201).send({
                                        message: "Registered",
                                    });
                                }
                            );
                        }
                    });
                }
            }
        );
    },
    login(req, res, next) {
        database.query(
            `SELECT * FROM admin WHERE email = ${database.escape(
                req.body.email
            )}`,
            (err, result) => {

                if (err) {
                    throw err;
                    return res.status(400).send({
                        message: err,
                    });
                }
                if (!result.length) {
                    return res.send({
                        message: "email or Password incorrect",
                    });
                }
                bcrypt.compare(
                    req.body.password,
                    result[0]["password"],
                    (bErr, bResult) => {
                        if (bErr) {
                            throw bErr;
                            return res.status(400).send({
                                message: "email or Password incorrect",
                            });
                        }
                        if (bResult) {
                            const token = jwt.sign(
                                {
                                    email: result[0].email,
                                    user_id: result[0].id,
                                },
                                process.env.jwt_secret,
                                { expiresIn: "1d" }
                            );
                            // database.query(`UPDATE admin SET last_login = now() WHERE id = '${result[0].id}';`);
                            // database.query(`UPDATE auth SET status_login = "Logged in" WHERE id = '${result[0].id}';`);
                            return res.status(200).send({
                                message: "Logged in",
                                token,
                                user: result[0].email,
                            })
                        }
                        return res.send({
                            message: "email or Password incorrect",
                        })
                    }
                );
            }
        );
    },
    secret(req, res, next) {
        res.status(200).send({
            message: "Logged in"
        });
    },
};

module.exports = { ...admin };
