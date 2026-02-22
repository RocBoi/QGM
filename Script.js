// ===============================
// FADE IN ON SCROLL
// ===============================

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===============================
// HEADER SHRINK ON SCROLL
// ===============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.style.padding = "15px 70px";
    header.style.background = "rgba(10,10,10,0.85)";
  } else {
    header.style.padding = "22px 70px";
    header.style.background = "rgba(10,10,10,0.65)";
  }
});

// ===============================
// SMOOTH SCROLL FOR NAV LINKS
// ===============================

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
