const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    const scale = Math.max(0.4, 1 - scroll / 800);

    const moveY = scroll * 0.8;

    logo.style.transform =
        `translateY(-${moveY}px) scale(${scale})`;

});
