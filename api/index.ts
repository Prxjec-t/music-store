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
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(express.static(path.join(process.cwd(), 'public')));

import albumsRouter from '../src/routes/albums';

app.use('/api/albums', albumsRouter);

import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL || '');

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send('Connected to MongoDB!');
// });

export default app;

// import albums from './albums.js';

// let filteredAlbums = Array.from(albums);
// const albumsListing = document.getElementById('albumsListing');

// function printAlbums() {
//   albumsListing.innerHTML = '';

//   let html = '';

//   for (let i = 0; i < filteredAlbums.length; i++) {
//     const currentAlbum = filteredAlbums[i];

//     html += `
//             <article>
//               <div class="album-info">
//                 <img class="album-img" src="${currentAlbum.img}" loading="lazy" alt="${currentAlbum.name}"/>
//                 <h2>${currentAlbum.name}</h2>
//                 <h3>${currentAlbum.artist}</h3>
//                 <p>Release year: ${currentAlbum.release_year}<p>
//                 <p>Genre: ${currentAlbum.genre}<p>
//                 <p>${currentAlbum.price} € <p>
//                 <button>${currentAlbum.purchase}</button>
//               </div>
//             </article>
//         `;
//   }

//   albumsListing.innerHTML = html;
// }

// printAlbums();
