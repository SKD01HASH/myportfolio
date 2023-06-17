// Add event listeners to expand sections
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  section.addEventListener('click', () => {
    section.classList.toggle('active');
  });
});
