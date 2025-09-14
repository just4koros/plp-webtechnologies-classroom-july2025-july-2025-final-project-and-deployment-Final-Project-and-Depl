// Core interactions: menu toggle, dark mode, form handling, small helpers
document.addEventListener('DOMContentLoaded', () => {
  // show year
  const years = [ 'year','year2','year3','year4','year5' ];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // mobile menu toggle
  const menuButtons = document.querySelectorAll('[id^=menuToggle]');
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('show');
    });
  });

  // dark mode toggle (works across pages)
  const darkButtons = document.querySelectorAll('[id^=darkToggle]');
  darkButtons.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // typing-style animation (simple)
  const typing = document.querySelector('.animate-typing');
  if (typing) {
    const text = typing.textContent;
    typing.textContent = '';
    let i = 0;
    const speed = 20;
    function typeChar(){
      if(i < text.length) {
        typing.textContent += text[i++];
        setTimeout(typeChar, speed);
      }
    }
    typeChar();
  }

  // Contact form (simulated) - validates and shows a success message
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const notice = document.getElementById('formNotice');

      if (!name || !email || !message) {
        if (notice) {
          notice.textContent = 'Please fill in all fields before sending.';
        }
        return;
      }

      // simulate sending...
      if (notice) {
        notice.textContent = 'Sending message...';
      }

      setTimeout(() => {
        if (notice) {
          notice.textContent = `Thanks ${name}! Your message has been received (simulated). I'll reply to ${email}.`;
        }
        contactForm.reset();
      }, 900);
    });
  }

  // theme persistence using localStorage
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light-theme');

  function toggleTheme(){
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
});
