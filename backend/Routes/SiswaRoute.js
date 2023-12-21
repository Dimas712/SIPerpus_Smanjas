import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/siswalogin', (req, res) => {
    const sql = "SELECT * FROM data_pengguna WHERE nisn = ? AND password = ?";
    con.query(sql, [req.body.nisn, req.body.password], (err, result) => {
        if (err) {
            console.error('Query error:', err);
            return res.status(500).json({ loginStatus: false, error: "Internal Server Error" });
        }

        if (result.length > 0) {
            const user = result[0];
            if (user.level === 'Siswa') {
                const nisn = user.nisn;
                const token = jwt.sign({ role: "siswa", nisn: nisn }, "jwt_secret_key", { expiresIn: '1d' });
                res.cookie('siswaToken', token); // Use consistent cookie name
                return res.json({ loginStatus: true });
            } else {
                return res.json({ loginStatus: false, error: "Ini halaman siswa." });
            }
        } else {
            return res.json({ loginStatus: false, error: "NISN atau Password salah!" });
        }
    });
});

// Menampilkan Profil Siswa
router.get('/profilsiswa', (req, res) => {
    const token = req.cookies.siswaToken; // Use consistent cookie name

    if (!token) {
        return res.status(401).json({ Status: false, Error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, "jwt_secret_key");
        const userId = decoded.nisn;

        const sql = "SELECT * FROM data_pengguna WHERE nisn = ?";
        con.query(sql, [userId], (err, result) => {
            if (err) {
                console.error('Query error:', err);
                return res.json({ Status: false, Error: "Query Error" });
            }
            return res.json({ Status: true, Result: result });
        });
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ Status: false, Error: "Invalid token" });
    }
});

 // Menampilkan Profil Siswa
 router.get('/profilsiswa', (req, res) => {
    const token = req.cookies.token; // Assuming you're using cookies to store the token

    if (!token) {
        return res.status(401).json({ Status: false, Error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, "jwt_secret_key");
        const userId = decoded.nisn;

        const sql = "SELECT * FROM data_pengguna WHERE nisn = ?";
        con.query(sql, [userId], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query Error" });
            return res.json({ Status: true, Result: result });
        });
    } catch (error) {
        return res.status(401).json({ Status: false, Error: "Invalid token" });
    }
});






export {router as siswaRouter}