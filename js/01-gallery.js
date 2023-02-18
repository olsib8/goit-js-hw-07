import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const arrayOfGallaryElements = createElementsOfGallery(galleryItems);

function createElementsOfGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
container.insertAdjacentHTML('beforeend', arrayOfGallaryElements);
container.addEventListener('click', onClickHandle);

function onClickHandle(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const selectPictures = e.target.getAttribute('data-source');
  const instance = basicLightbox.create(
    `
    <img src="${selectPictures}" width="800" height="600">
`
  );
  instance.show();

  container.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  });
}
