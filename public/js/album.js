const albumId = new URLSearchParams(window.location.search).get('id');

async function printAlbums() {
  if (!albumId) {
    document.getElementById('albumMessage').textContent = 'No album id was provided in the URL.';
    return;
  }

  try {
    const response = await fetch((API_URL = '/albums/' + albumId), { credentials: 'include' });
    if (!response.ok) {
      document.getElementById('albumMessage').textContent = 'Could not load the album details';
      return;
    }

    const album = await response.json();
    const genres = Array.isArray(album.genre) ? album.genre.join(', ') : album.genre || '';

    document.getElementById('albumsListing').innerHTML = `
            <div>
                <img src="${escapeHTML(album.image)}" alt="${escapeHTML(album.albumName)}"
            </div>

            <div>
                <h1>${escapeHTML(album.albumName)}</h1>
                <p>${escapeHTML(album.artist)}</p>
                <p>${escapeHTML(album.releaseYear)}</p>
                <p>${escapeHTML(genres)}</p>
                <p>${escapeHTML(album.price)}</p>
            </div>
        `;
  } catch (error) {
    document.getElementById('albumMessage').textContent = 'Could not load the album details';
  }
}

printAlbums();
