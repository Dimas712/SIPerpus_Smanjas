import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';

const router = express.Router();

router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * FROM data_pengguna WHERE nisn = ? AND password = ?";
    con.query(sql, [req.body.nisn, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, error: "Query error" });

        if (result.length > 0) {
            const nisn = result[0].nisn;
            const token = jwt.sign({ role: "admin", nisn: nisn }, "jwt_secret_key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, error: "NISN atau Password salah!" });
        }
    });
});

// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + "_" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage
});
// end image upload

router.post('/add_pengguna', upload.single('image'), (req, res) => {

        const values = [
            req.body.nama,
            req.body.nisn,
            req.body.password,
            req.body.tempat_lahir,
            req.body.tanggal_lahir,
            req.body.level,
            req.body.jenis_kelamin,
            req.body.no_telepon,
            req.body.email,
            req.file.filename,
            req.body.alamat
        ];

        const sql = "INSERT INTO data_pengguna (`nama`, `nisn`, `password`, `tempat_lahir`, `tanggal_lahir`, `level`, `jenis_kelamin`, `no_telepon`, `email`, `image`, `alamat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        con.query(sql, values, (err, result) => {
            if (err) {
                console.error("Query Error:", err);
                return res.json({ Status: false, error: "Query error", dbError: err.message });
            }
            return res.json({ Status: true });
        });
    });

    router.get('/datapenggunalist', (req, res) => {
        const sql = "SELECT * FROM data_pengguna";
        con.query(sql, (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query Error" });
            return res.json({ Status: true, Result: result });
        });
    });
    
    router.get('/datapenggunalist/:id', (req, res) => {
        const id = req.params.id;
        const sql = "SELECT * FROM data_pengguna WHERE id = ?";
        con.query(sql,[id], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query Error" });
            return res.json({ Status: true, Result: result });
        });
    });

    router.delete('/delete_pengguna/:id', (req, res) => {
        const id = req.params.id;
        const sql = "delete from data_pengguna where id = ? "
        con.query(sql,[id], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query Error"+err });
            return res.json({ Status: true, Result: result });
        })
    })

    router.put('/edit_pengguna/:id', upload.single('image'), (req, res) => {
        const id = req.params.id;
        const sql = "UPDATE data_pengguna SET nama = ?, nisn = ?, password = ?, tempat_lahir = ?, tanggal_lahir = ?, level = ?, jenis_kelamin = ?, no_telepon = ?, email = ?, image = ?, alamat = ? WHERE id = ?";
    
        const values = [
            req.body.nama,
            req.body.nisn,
            req.body.password,
            req.body.tempat_lahir,
            req.body.tanggal_lahir,
            req.body.level,
            req.body.jenis_kelamin,
            req.body.no_telepon,
            req.body.email,
            res.file,
            req.body.alamat,
            id
        ];
    
        con.query(sql, values, (err, result) => {
            if (err) {
                console.error("Query Error:", err);
                return res.status(500).json({ Status: false, Error: "Query error", dbError: err.message });
            }
            return res.json({ Status: true, Result: result });
        });
    });
    
    

export { router as adminRouter };
