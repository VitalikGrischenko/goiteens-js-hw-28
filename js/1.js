const galleryRef = document.querySelector("[data-gellery]");
const imegaRef = galleryRef.children;

console.log(imegaRef);

for(let i = 0; i < imegaRef.length; i++) {
  imegaRef.addEventList("click", () => {
    imegaRef[i].classList.toggle("full-image-container");
    imegaRef[i].firstElementChild.classList.toggle("full-image")
  })
};