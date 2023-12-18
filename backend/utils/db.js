import mysql2 from 'mysql2'

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "00Dynames",
    database: "inventaris_perpus"
})

con.connect(function(err) {
    if(err) {
        console.log("Koneksi Error")
    } else {
        console.log("Terkoneksi")
    }
})

export default con;