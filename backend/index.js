import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";
import { siswaRouter } from "./Routes/SiswaRoute.js";
import { databukuRouter } from "./Routes/DataBukuRoute.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.static('Public'));

app.use('/auth', adminRouter);
app.use('/auth', siswaRouter);
app.use('/auth', databukuRouter)

app.listen(8800, () => {
    console.log("Server is running");
});