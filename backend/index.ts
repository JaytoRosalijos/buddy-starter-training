import express, { Express, Request, Response, } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './src/config/firestore.js';

import { todoRouter } from './src/routes/todo.route.js';
import { errorHandler } from './src/middleware/error';
import { verifyAuth } from './src/middleware/jwt.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todo", verifyAuth, todoRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});