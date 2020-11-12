const jabutiImg = new Image();
const img = document.querySelector("#body");

jabutiImg.onload = function() {
    img.innerHTML += `<img src="${jabutiImg.src}" />`;
};

jabutiImg.src = './img/jabuti-1.jpg';