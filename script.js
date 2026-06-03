const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    const scale = Math.max(0.4, 1 - scroll / 1000);

    const moveY = scroll * 1.2;

    const opacity = Math.max(0, 1 - scroll / 500);

    logo.style.transform =
        `translateY(-${moveY}px) scale(${scale})`;

    logo.style.opacity = opacity;

});
