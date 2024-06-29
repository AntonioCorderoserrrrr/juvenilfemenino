let currentIndexMomentos = 0;
let currentIndexGaleria = 0;

function showSlide(sliderId, index) {
    const slides = document.querySelectorAll(`#slider-${sliderId} .slide`);
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide(sliderId) {
    if (sliderId === 'momentos') {
        currentIndexMomentos = (currentIndexMomentos + 1) % document.querySelectorAll('#slider-momentos .slide').length;
        showSlide('momentos', currentIndexMomentos);
    } else if (sliderId === 'galeria') {
        currentIndexGaleria = (currentIndexGaleria + 1) % document.querySelectorAll('#slider-galeria .slide').length;
        showSlide('galeria', currentIndexGaleria);
    }
}

function prevSlide(sliderId) {
    if (sliderId === 'momentos') {
        currentIndexMomentos = (currentIndexMomentos - 1 + document.querySelectorAll('#slider-momentos .slide').length) % document.querySelectorAll('#slider-momentos .slide').length;
        showSlide('momentos', currentIndexMomentos);
    } else if (sliderId === 'galeria') {
        currentIndexGaleria = (currentIndexGaleria - 1 + document.querySelectorAll('#slider-galeria .slide').length) % document.querySelectorAll('#slider-galeria .slide').length;
        showSlide('galeria', currentIndexGaleria);
    }
}

function autoSlide() {
    nextSlide('galeria');
}

setInterval(autoSlide, 1800);

// Mostrar la primera diapositiva al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSlide('galeria', 0);
});