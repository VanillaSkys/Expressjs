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
        const image = req.file
        const { name, price } = req.body;
        try {
            db.query(`INSERT INTO product(id, name, price, image) VALUES('${uuid.v4()}', '${name}', ${price}, '${image.filename}')`, (err,result) => {
                if(err) throw err;
                if(name === null) {
                    throw res.send('product.name.null');
                }
                if(name === "") {
                    throw res.send('product.name.empty');
                }
                else {
                    return res.status(200).send("success");
                }
            });
        } catch (error) {
            throw error;
        }
    },
    updatePriceByProduct(req,res) {
        const { name, price } = req.body;
        try{
            db.query(`UPDATE product SET price = ${price} WHERE name = ${name}`, (err, result) => {
                if(err) throw err;
                if(name === null) {
                    throw res.send('product.name.null');
                }
                if(price === null ) {
                    throw res.send('product.price.null');
                }
                else {
                    return res.send('success');
                }
            })
        } catch (error) {
            throw error;
        }
    },
    deleteByProduct(req,res) {
        const {id} = req.params;
        try {
            db.query(`DELETE FROM product WHERE id = ${id}`, (err,result) => {
                if(err) throw err;
                else {
                    return res.send('success');
                }
            })
        } catch (error) {
            throw error;
        }
    }
}

module.exports = { ...productController };