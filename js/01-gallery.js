import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galeryBox = document.querySelector('.gallery');

const geleryMarkup = galleryItems.map((item) => {
   return `
    <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>
  `

}).join('');

galeryBox.innerHTML = geleryMarkup;

function bigImage(e) {
    e.preventDefault()

    if(e.target === e.currentTarget) {
        return
    }

    const originalImg = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
    
`)

instance.show()

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
    instance.close()
        }
    })

};

galeryBox.addEventListener('click', bigImage);









