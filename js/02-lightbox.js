import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryItems.map(element => {
    const itemLink = document.createElement('a');
    itemLink.classList.add("gallery__item");
    itemLink.setAttribute('href', element.original);

    const itemImg = document.createElement('img');
    itemImg.classList.add("gallery__image");
    itemImg.setAttribute('src', element.preview);
    itemImg.setAttribute('alt', element.description);

    itemLink.append(itemImg);
    galleryList.append(itemLink);
})

galleryList.addEventListener('click', (event) => {
    event.preventDefault();
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');
instance.show()
})