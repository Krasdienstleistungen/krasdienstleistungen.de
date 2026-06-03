const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    const scale = Math.max(0.3, 1 - scroll / 500);

    const moveY = scroll * 1.5;

    logo.style.transform =
        `translateY(-${moveY}px) scale(${scale})`;

    logo.style.opacity =
        Math.max(0, 1 - scroll / 400);

});
