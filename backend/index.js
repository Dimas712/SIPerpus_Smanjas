import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";
import { siswaRouter } from "./Routes/SiswaRoute.js";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.use(express.json());
app.use(express.static('Public'));


app.use('/auth', adminRouter);
app.use('/auth', siswaRouter);




app.listen(8800, () => {
    console.log("Server is running");
});
