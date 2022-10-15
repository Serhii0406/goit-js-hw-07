import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector('.gallery');
const galleryMakrUp = createGallary (galleryItems)

galleryDiv.insertAdjacentHTML('beforeend', galleryMakrUp)

galleryDiv.addEventListener('click', onCardClick)

function createGallary (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    })
        .join(' ');
}
function onCardClick(event) {
    event.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return
    } else {
        console.log(event.target)
    }
}

