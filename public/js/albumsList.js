import { API_URL, escapeHTML } from './functions.js';

const albumsListing = document.getElementById('albumsListing');
const albumMessage = document.getElementById('albumMessage');

async function printAlbums() {
  try {
    const response = await fetch(API_URL + '/albums', { credentials: 'include' });

    if (!response.ok) {
      albumMessage.textContent = 'Could not load the albums';
      return;
    }

    const albums = await response.json();

    if (!albums || albums.length === 0) {
      albumMessage.textContent = 'No albums added yet.';
      return;
    }

    albumsListing.innerHTML = albums
      .map(
        (currentAlbum) => `
        <article>
          <div class="album-info">
            <img class="album-img" src="${escapeHTML(currentAlbum.image)}" loading="lazy" alt="${currentAlbum.albumName}"/>
            <h2>${currentAlbum.albumName}</h2>
            <h3>${currentAlbum.artist}</h3>
            <p>Release year: ${currentAlbum.releaseYear}</p>
            <p>${currentAlbum.genre}</p>
            <p>${currentAlbum.price} € </p>
          </div>
        </article>
        `,
      )
      .join('');
  } catch (error) {
    albumMessage.textContent = 'Could not reach server.';
    console.log(error);
  }
}

printAlbums();
