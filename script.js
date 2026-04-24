// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Close mobile nav when resized to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 960) {
    toggle.classList.remove('active');
    navLinks.classList.remove('open');
  }
});

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector('nav.top').offsetHeight;
    window.scrollTo({ top: target.offsetTop - navH - 8, behavior: 'smooth' });
  });
});

// FAQ accordion — one open at a time
document.querySelectorAll('.faq-item').forEach(el => {
  el.addEventListener('toggle', () => {
    if (el.open) {
      document.querySelectorAll('.faq-item').forEach(o => { if (o !== el) o.removeAttribute('open'); });
    }
  });
});

// Contact form — mailto handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name     = this.name.value.trim();
  const email    = this.email.value.trim();
  const language = this.language.value;
  const interest = this.interest.value;
  const message  = this.message.value.trim();

  const subject = encodeURIComponent('Consultation request from ' + name);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPreferred language: ${language}\nInterested in: ${interest}\n\n${message}`
  );
  window.location.href = `mailto:hello@motahareh.ca?subject=${subject}&body=${body}`;

  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  this.querySelector('.submit').style.display = 'none';
});
