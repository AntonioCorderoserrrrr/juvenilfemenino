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

window.onload = function() {
    // Agregar la clase fade-in al header y a la sección intro-section
    document.querySelector('header').classList.add('fade-in');
    document.querySelector('.intro-section').classList.add('fade-in');
    // Agregar la clase hidden a todas las demás secciones
    var sections = document.querySelectorAll('main section:not(.intro-section)');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
    checkVisibility();
};

// Función para comprobar la visibilidad de los elementos
function checkVisibility() {
    var sections = document.querySelectorAll('main section');
    var footer = document.querySelector('footer');
    var windowHeight = window.innerHeight;

    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if (rect.top < windowHeight && section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            section.classList.add('visible');
        }
    });

    // Asegúrate de que el footer no tenga la clase 'hidden'
    var rectFooter = footer.getBoundingClientRect();
    if (rectFooter.top < windowHeight && footer.classList.contains('hidden')) {
        footer.classList.remove('hidden');
        footer.classList.add('visible');
    }
}