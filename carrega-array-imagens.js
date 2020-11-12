const images = ['./img/jabuti-1.jpg', './img/jabuti-2.jpg'];
const arrayImagesElement = document.querySelector("#image-array");

function createImage(filename, alt) {
    const img = new Image(500, 500);
    img.src = filename;
    img.alt = alt;
    return img;
}

images.forEach((img) => {
    const alt = `My pets ${img}`;
    arrayImagesElement.appendChild(createImage(img, alt));
});