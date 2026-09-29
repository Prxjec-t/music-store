import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
const PORT = process.env.DB_PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || '',
    credentials: true,
  }),
);

app.use(express.static('public'));
// app.use(express.static(path.join(process.cwd(), 'public')));

import albumsRouter from '../src/routes/albums';
import usersRouter from '../src/routes/users';
import authRouter from '../src/routes/auth';

app.use('/api/albums', albumsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL || '');

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send('Connected to MongoDB!');
// });

export default app;
