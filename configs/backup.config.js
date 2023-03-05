const mysqlDump = require('mysqldump');
const schedule = require('node-schedule');

function BackUp() {
    try {
        let ts = Date.now();

        let dateTime = new Date(ts);

        let day = dateTime.getDate();
        let month = dateTime.getMonth();
        let year = dateTime.getFullYear();

        mysqlDump({
            connection: {
                host: process.env.db_host,
                port: process.env.db_port,
                user: process.env.db_user,
                password: process.env.db_password,
                database: process.env.db_name
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