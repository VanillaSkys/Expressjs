const db = require("../configs/database.config");
const uuid = require('uuid');
const productController = {
    findAllByProduct(req, res) {
        try {
            db.query(`SELECT * FROM product`, (err, result) => {
                if (err) throw err;
                if (result === null) {
                    throw res.send('product.null')
                }
                else {
                    return res.status(200).send(result);
                }
            });
        } catch (error) {
            throw error;
        }
    },
    createByProduct(req, res) {
        const { name, price } = req.body;
        try {
            db.query(`INSERT INTO product(id, name, price) VALUES('${uuid.v4()}', '${name}', ${price})`, (err,result) => {
                if(err) throw err;
                if(name === null) {
                    throw res.send('name.null');
                }
                if(name === "") {
                    throw res.send('name.empty');
                }
                else {
                    return res.status(200).send("success");
                }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { ...productController };