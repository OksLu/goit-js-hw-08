import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) {
  const galleryEl = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  return galleryEl;
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
