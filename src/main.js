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
                <p>${currentAlbum.release_year}<p>
                <p>${currentAlbum.genre}<p>
              </div>
            </article>
        `;
  }

  albumsListing.innerHTML = html;
}

printAlbums();
