import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/siswalogin', (req, res) => {
    const sql = "SELECT * FROM data_pengguna WHERE nisn = ? AND password = ?";
    con.query(sql, [req.body.nisn, req.body.password], (err, result) => {
        if (err) return res.status(500).json({ loginStatus: false, error: "Query error" });

        if (result.length > 0) {
            const user = result[0];
            if (user.level === 'Siswa') {
                const nisn = user.nisn;
                const token = jwt.sign({ role: "admin", nisn: nisn }, "jwt_secret_key", { expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ loginStatus: true });
            } else {
                return res.json({ loginStatus: false, error: "Ini halaman siswa." });
            }
        } else {
            return res.json({ loginStatus: false, error: "NISN atau Password salah!" });
        }
    });
});

export {router as siswaRouter}