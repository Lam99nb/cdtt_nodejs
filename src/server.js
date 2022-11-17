import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine.js';
import initWebRouters from './route/web.js';
import connectDB from './config/connectDB';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); // running line 17
let app = express();
app.use(cors({ origin: true }));
// config app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
viewEngine(app);
initWebRouters(app);

connectDB();

let port = process.env.PORT || 6969;
// port undefined gan bang 6969
app.listen(port, () => {
	console.log('NodeJS is running on port ' + port);
});
