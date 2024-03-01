
const mysql2 = require('mysql2');




var dbConnection= mysql2.createPool({
    user:"evangadi-admin",
    database:"evangadi_forum",
    host:"localhost",
    port: 3306,
    password:"123456",
    connectionLimit:10
});

// dbConnection.execute("select 'test' ",(err,result)=>{
//     if(err)
//         console.log(err.message);
//     else
//         console.log(result);
// });


module.exports = dbConnection.promise()