import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.static('Public'));
app.use('/Images', express.static('Public/images'));
app.use('/auth', adminRouter);

app.listen(3000, () => {
    console.log("Server is running");
});
