let circulo = document.querySelector(".circulo");
let imgCopo = document.querySelector(".starbucks");
let rosa = document.querySelector(".rosa");
let lilas = document.querySelector(".lilas");
let verde = document.querySelector(".verde");

rosa.addEventListener("mouseover", () => {
    imgCopo.src = "starbucks5.jpg";
    circulo.style.backgroundColor = "#eb7495";
});

rosa.addEventListener("mouseout", () => {
    // Restaura para o estado inicial ao retirar o mouse
    imgCopo.src = "starbucks4.jpg"; // ou a imagem inicial desejada
    circulo.style.backgroundColor = "#017143"; // ou a cor inicial desejada
});

lilas.addEventListener("mouseover", () => {
    imgCopo.src = "starbucks6.jpg";
    circulo.style.backgroundColor = "#ffc0cb";
});

lilas.addEventListener("mouseout", () => {
    imgCopo.src = "starbucks4.jpg";
    circulo.style.backgroundColor = "#017143";
});

verde.addEventListener("mouseover", () => {
    imgCopo.src = "starbucks7.jpg";
    circulo.style.backgroundColor = "#017143";
});

verde.addEventListener("mouseout", () => {
    imgCopo.src = "starbucks4.jpg";
    circulo.style.backgroundColor = "#017143";
});


AOS.init();