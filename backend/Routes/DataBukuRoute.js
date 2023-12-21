import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + "_" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage});
// end image upload

// Menambahkan Data Buku
router.post('/add_buku', upload.single('sampul'), (req, res) => {
    const values = [
        req.body.isbn,
        req.body.judul_buku,
        req.body.pengarang,
        req.body.nama_penerbit,
        req.body.tahun_buku,
        req.body.stok_buku,
        req.body.kategori_id,
        req.body.rak_id,
        req.file.filename,
        req.body.deskripsi
    ];
    const sql =
    'INSERT INTO data_buku (`isbn`, `judul_buku`, `pengarang`, `nama_penerbit`, `tahun_buku`, `stok_buku`, `kategori_id`, `rak_id`, `sampul`, `deskripsi`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, error: "Query error", dbError: err.message });
        }
        return res.json({ Status: true });
    });
});

// menampilkan data buku
router.get('/databukulist', (req, res) => {
    const sql = `
        SELECT 
            db.*, 
            dk.nama AS kategori_nama, 
            dr.nama AS rak_nama 
        FROM data_buku db
        LEFT JOIN kategori dk ON db.kategori_id = dk.id
        LEFT JOIN rak dr ON db.rak_id = dr.id`;
    
    con.query(sql, (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query Error" });
        }
        return res.json({ Status: true, Result: result });
    });
});

// Menghapus Data buku
router.delete('/delete_databuku/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from data_buku where id = ? "
    con.query(sql,[id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error"+err });
        return res.json({ Status: true, Result: result });
    })
})

    // Edit Data Buku
    router.put('/edit_databuku/:id', upload.single('sampul'), (req, res) => {
        const id = req.params.id;
        const sql = "UPDATE data_buku SET isbn = ?, judul_buku = ?, pengarang = ?, nama_penerbit = ?, tahun_buku = ?, stok_buku = ?, kategori_id = ?, rak_id = ?, deskripsi = ?" +
            (req.file ? ", sampul = ?" : "") + " WHERE id = ?";

        const values = [
            req.body.isbn,
            req.body.judul_buku,
            req.body.pengarang,
            req.body.nama_penerbit,
            req.body.tahun_buku,
            req.body.stok_buku,
            req.body.kategori_id,
            req.body.rak_id,
            req.body.deskripsi,
        ];

        if (req.file) {
            values.push(req.file.filename);
        }

        values.push(id);

        con.query(sql, values, (err, result) => {
            if (err) {
                console.error("Query Error:", err);
                return res.status(500).json({ Status: false, Error: "Query error", dbError: err.message });
            }
            return res.json({ Status: true, Result: result });
        });
    });

        router.get('/databukulist/:id', (req, res) => {
            const id = req.params.id;
            const sql = "SELECT * FROM data_buku WHERE id = ?";
            con.query(sql,[id], (err, result) => {
                if (err) return res.json({ Status: false, Error: "Query Error" });
                return res.json({ Status: true, Result: result });
            });
        });


        // Menampilkan buku di Carousel
        router.get('/caribuku', (req, res) => {
            const sql = `
              SELECT 
                  db.*, 
                  dk.nama AS kategori_nama, 
                  dr.nama AS rak_nama 
              FROM data_buku db
              LEFT JOIN kategori dk ON db.kategori_id = dk.id
              LEFT JOIN rak dr ON db.rak_id = dr.id
              LIMIT 5;`;
          
            con.query(sql, (err, result) => {
              if (err) {
                console.error("Query Error:", err);
                return res.json({ Status: false, Error: "Query Error" });
              }
              return res.json({ Status: true, Result: result });
            });
          });

        // Menampilkan Detail buku
        router.get('/detailbuku/:id', (req, res) => {
            const id = req.params.id;
            const sql = 'SELECT * FROM data_buku WHERE id = ?';
          
            con.query(sql, [id], (err, result) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ status: false, error: 'Internal Server Error' });
                }
          
                if (result.length === 0) {
                    return res.status(404).json({ status: false, error: 'Book not found' });
                }
          
                const bookDetails = result[0];
                return res.json({ status: true, result: bookDetails });
            });
        });

        // Peminjaman Buku
        router.post('/borrow', (req, res) => {
            // Implement logic for borrowing a book
            // You may need authentication to identify the student
            // You can also update the book status in the database (e.g., set it as borrowed)
            return res.json({ status: true, message: 'Book borrowed successfully' });
        });
export {router as databukuRouter}