const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    // Erste 100px passiert fast nichts
    const adjustedScroll = Math.max(0, scroll - 100);

    // Langsamer schrumpfen
    const scale = Math.max(0.45, 1 - adjustedScroll / 1200);

    // Langsamer nach oben bewegen
    const moveY = adjustedScroll * 0.7;

    // Langsamer ausblenden
    const opacity = Math.max(0, 1 - adjustedScroll / 600);

    logo.style.transform =
        `translateY(-${moveY}px) scale(${scale})`;

    logo.style.opacity = opacity;

});
