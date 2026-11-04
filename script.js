// Navigation : fond au défilement + menu mobile
const nav = document.getElementById('nav');
const toggle = nav.querySelector('.nav__toggle');

const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('.nav__menu a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  })
);

// Apparition douce des sections
const revealTargets = document.querySelectorAll('.section__head, .split, .intro__grid, .amenities, .gallery, .prices, .contact__cards');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}

// Galerie photo plein écran
const items = [...document.querySelectorAll('.gallery__item')];
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
const boxCaption = box.querySelector('figcaption');
let current = 0;

const show = (i) => {
  current = (i + items.length) % items.length;
  boxImg.src = items[current].dataset.full;
  boxImg.alt = items[current].dataset.caption;
  boxCaption.textContent = items[current].dataset.caption;
};
const close = () => { box.hidden = true; document.body.style.overflow = ''; };

items.forEach((item, i) => item.addEventListener('click', () => {
  show(i);
  box.hidden = false;
  document.body.style.overflow = 'hidden';
}));
box.querySelector('.lightbox__close').addEventListener('click', close);
box.querySelector('.lightbox__nav--prev').addEventListener('click', () => show(current - 1));
box.querySelector('.lightbox__nav--next').addEventListener('click', () => show(current + 1));
box.addEventListener('click', (e) => { if (e.target === box) close(); });
document.addEventListener('keydown', (e) => {
  if (box.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});

document.getElementById('year').textContent = new Date().getFullYear();
