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


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("header, section, footer");
    const playerCards = document.querySelectorAll("#equipo .player-card");

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("visible");
            }
        });
    }

    function checkVisibilityCartas() {
        playerCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0 && !card.classList.contains("animate")) {
                card.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Trigger the check once when the DOM is loaded
    checkVisibility();
    checkVisibilityCartas();
});





    