const galleryRef = document.querySelector("[data-gellery]");
const galleryItem = galleryList.children;
console.log(galleryItem);

for(const item of galleryItem) {
    item.addEventListener("click", () => {
      item.classList.toggle("image-container")  
    });
};

