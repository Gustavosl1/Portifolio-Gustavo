const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards');
    const infoBox = document.getElementById('infoBox');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const info = card.getAttribute('data-info');
            infoBox.textContent = info;
            infoBox.style.display = 'block';
        });

        card.addEventListener('mouseleave', () => {
            infoBox.style.display = 'none';
        });
    });
});