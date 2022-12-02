import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','root','',{
    host:'localhost',
    dialect:'mysql'
})

// const db = new Sequelize('auth_db_pg','postgres','syahril',{
//     host:'localhost',
//     dialect:'postgres'
// })


export default db;