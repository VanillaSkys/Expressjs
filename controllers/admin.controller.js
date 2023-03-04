const db = require("../configs/database.config");

const adminController = {
    findAllByAdmin(req,res) {
        try {
            db.query(`SELECT * FROM admin`, (err,result) => {
                if(err) throw err;
                if(result === null) {
                    return res.status(417).send({status: 417, error: 'product.null'})
                }
                else {
                    return res.status(200).send(result);
                }
            });
        } catch (error) {
            throw error;
        }
    },
    createByAdmin(req,res) {
        
    }
}

module.exports = {...adminController};