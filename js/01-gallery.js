import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const gallery = galleryItems.map((item) => {
  return `<div class="gallery__item">
              <a class="gallery__link" href="${item.original}">
                <img
                  class="gallery__image"
                  src="${item.preview}"
                  data-source="${item.original}"
                  alt="${item.description}"
                />
              </a>
            </div>`;
});

galleryContainer.insertAdjacentHTML("beforeend", gallery.join(""));

galleryContainer.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const clickedElement = event.target;
  if (clickedElement.tagName === "IMG") {
    const largeImageURL = clickedElement.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${largeImageURL}" alt="Full Image">`
    );

    instance.show();
  }
}
