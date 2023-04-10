let albumsList = document.getElementById('albums__list');

let albumsListGenerator = () => {
  return (albumsList.innerHTML = albumsDataBase.map((album) => {
    let {cover, title, artist, year} = album;
    return `
    <li class="albums__list-item">
      <img
        src="${cover}"
        alt="Обложка ${title}"
        class="albums__image"
      />
      <div class="albums__info">
        <h3 class="albums__card-title">${title}</h3>
        <p class="albums__card-subtext">${artist} &#8729; ${year}г.</p>
      </div>
    </li>
    `;
  })
  .join(''));
}

albumsListGenerator();