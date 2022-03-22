const { Pool } = require('pg');
const game_search_db = new Pool({
    user: 'postgres',
    password: 'toor',
    host: 'localhost',
    port: 5432,
    database: "gsearchdb"
})

console.log('connected to db')

module.exports = game_search_db;