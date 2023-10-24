const galleryRef = document.querySelector("[ data-gallery]");
const galleryLiRef = galleryRef.children;
const galleryImgRef = document.querySelector("[data-galleryimg=image]");
const galleryDivRef = document.querySelector("[data-gallerydiv]");

let i = 0;

galleryImgRef.addEventListener("click", (e) => {
  galleryDivRef.classList.toggle("show-gallery-modal");
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight" && i < galleryLiRef.length - 1) {
      galleryLiRef[i].classList.remove("full-image-container");
      galleryLiRef[i].firstElementChild.classList.remove("full-image");

      galleryLiRef[i + 1].classList.add("full-image-container");
      galleryLiRef[i + 1].firstElementChild.classList.add("full-image");
      i++;
    }

    if (event.code === "ArrowLeft" && i < galleryLiRef.length - 1) {
      galleryLiRef[i].classList.remove("full-image-container");
      galleryLiRef[i].firstElementChild.classList.remove("full-image");

      galleryLiRef[i - 1].classList.add("full-image-container");
      galleryLiRef[i - 1].firstElementChild.classList.add("full-image");
      i--;
    }
  });
});

galleryDivRef.addEventListener("click", (e) => {
  if (e.target.classList.contains("full-image-container")) {
    galleryDivRef.classList.toggle("show-gallery-modal");
  }
});