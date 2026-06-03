const logo = document.querySelector('.logo');
const subtitle = document.querySelector('.subtitle');
const intro = document.querySelector('.intro');
const button = document.querySelector('.cta-button');

window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    const logoScale = Math.max(0.85, 1 - scroll / 5000);
    const logoMove = scroll * 0.4;
    const logoOpacity = Math.max(0, 1 - scroll / 1200);

    logo.style.transform =
        `translateY(-${logoMove}px) scale(${logoScale})`;

    logo.style.opacity = logoOpacity;

    subtitle.style.transform =
        `translateY(-${scroll * 0.15}px)`;

    intro.style.transform =
        `translateY(-${scroll * 0.08}px)`;

    button.style.transform =
        `translateY(-${scroll * 0.03}px)`;

});
