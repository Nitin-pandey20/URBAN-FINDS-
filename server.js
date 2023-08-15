import express from 'express';
import dotenev from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authroute.js';
import cors from "cors";
import categoryRoutes from './routes/Categoryroute.js';
import productRoutes from './routes/ProductRoutes.js';
 import path from 'path'
import {fileURLToPath} from "url";
//config env
dotenev.config()
//database config 
connectDB();
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);
const app = express();
//middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
 app.use(express.static(path.join(__dirname, '/client/build')))

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
// app.get('/', (req, res) => {
    // res.send("<h1>Welcome to URBAN FINDS</h1>");
// });
 app.use('*', function (req, res) {
     res.sendFile(path.join(__dirname, './client/build/index.html'));
 });
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    // console.log(`listening on mode ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
}); 
