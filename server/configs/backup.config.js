const mysqlDump = require('mysqldump');
const schedule = require('node-schedule');
require('dotenv').config();
function BackUp() {
    try {
        let ts = Date.now();

        let dateTime = new Date(ts);

        let day = dateTime.getDate();
        let month = dateTime.getMonth();
        let year = dateTime.getFullYear();

        mysqlDump({
            connection: {
                host: process.env.db_host || 'localhost',
                port: process.env.db_port || 3306,
                user: process.env.db_user || 'root',
                password: process.env.db_password || '123456789',
                database: process.env.db_name || 'expressjs'
            },
            dumpToFile: `./backup/${year}-${month}-${day}-backup.sql`,
        });
    } catch (error) {
        throw error;
    }
}

// function DeleteBackup(){
//     try {
//         fs.unlinkSync(`${year}-${month}-${day}-backup.sql`);
//         console.log("Delete File successfully.");
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = schedule.scheduleJob('* * * * Sunday', () => {
    BackUp()
    console.log(`BackUp ${year}-${month}-${day} Success`);
});