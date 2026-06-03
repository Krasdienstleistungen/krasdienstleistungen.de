const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    const scale = Math.max(0.35, 1 - scroll / 600);

    const moveY = Math.min(scroll * 1.2, 500);

    logo.style.transform =
        `translateY(-${moveY}px) scale(${scale})`;

});
