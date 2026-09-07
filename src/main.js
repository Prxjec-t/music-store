const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

(app.get / '/api/data',
  (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});

import albums from './albums.mjs';

let filteredAlbums = Array.from(albums);
const albumsListing = document.getElementById('albumsListing');

function printAlbums() {
  albumsListing.innerHTML = '';

  let html = '';

  for (let i = 0; i < filteredAlbums.length; i++) {
    const currentAlbum = filteredAlbums[i];

    html += `
            <article>
              <div class="album-info">
                <img class="album-img" src="${currentAlbum.img}" loading="lazy" alt="${currentAlbum.name}"/>
                <h2>${currentAlbum.name}</h2>
                <h3>${currentAlbum.artist}</h3>
                <p>Release year: ${currentAlbum.release_year}<p>
                <p>Genre: ${currentAlbum.genre}<p>
                <p>${currentAlbum.price} € <p>
                <button>${currentAlbum.purchase}</button>
              </div>
            </article>
        `;
  }

  albumsListing.innerHTML = html;
}

printAlbums();
