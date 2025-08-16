const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
// Toggle menu for mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// 3D tilt for hero section
const heroContent = document.querySelector('.hero-content');
document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) { // only for desktop
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    heroContent.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
});
// Automatically trigger download without opening
document.getElementById('resumeBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'msivakumar1602(1).pdf'; // Path to your resume
  link.download = 'msivakumar1602(1).pdf'; // Downloaded file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
// Count-up animation when popup appears
document.querySelectorAll('.timeline-item').forEach(item => {
  const popup = item.querySelector('.popup-score');
  let animated = false;
  item.addEventListener('mouseenter', () => {
    if (!animated) {
      let target = parseInt(popup.getAttribute('data-percentage'));
      let count = 0;
      const speed = 20; // lower = faster
      let interval = setInterval(() => {
        if (count < target) {
          count++;
          popup.textContent = count + '%';
        } else {
          clearInterval(interval);
        }
      }, speed);
      animated = true; // run only once
    }
  });
});
function openModal(id) {
      document.getElementById(id).style.display = "flex";
    }
    function closeModal(id) {
      document.getElementById(id).style.display = "none";
    }
    // Scroll animation for About Section
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about-section");
  const position = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition) {
    aboutSection.classList.add("show");
  }
});
// Scroll animation for Hire Me section
document.addEventListener("DOMContentLoaded", () => {
  const hireContent = document.querySelector(".hire-content");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hireContent.classList.add("show");
        startTypewriter(); // start typewriter when visible
        observer.unobserve(entry.target); // run only once
      }
    });
  }, { threshold: 0.2 });
  observer.observe(hireContent);
});
// Typewriter Effect for paragraphs
function startTypewriter() {
  const paragraphs = document.querySelectorAll(".typewriter");
  let delay = 0;
  paragraphs.forEach((p, index) => {
    const text = p.getAttribute("data-text");
    p.textContent = ""; // clear initially
    setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          p.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 40); // typing speed
    }, delay);
    delay += text.length * 40 + 600; // wait before next line
  });
}