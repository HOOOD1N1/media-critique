const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: process.env.POSTGRES_DATABASE_NAME,
    password: process.env.POSTGRES_PASS,
    port: process.env.POSTGRES_DATABASE_PORT
});


/*
const client = new Client()
client.connect()
*/

module.exports = {
    pool
    // query: (text, params, callback) => {
    //     const start = Date.now()
    //     return pool.query(text, params, (err, res) => {
    //         const duration = Date.now() - start
    //         console.log('executed query', { text, duration, /*rows: res.rowCount*/ })
    //         callback(err, res)
    //     })
    // },
}