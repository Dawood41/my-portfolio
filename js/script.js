// ================================
// HAMBURGER MENU
// ================================

// Select elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when any nav link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// Scroll animation 
const sections = document.querySelectorAll('.section-container');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');  
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));


// Active nav link
const allSections = document.querySelectorAll('section');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    allSections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});


// Typing effect on hero subtitle
const roles = [
    'Frontend Developer',
    'Creative Thinker',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTarget = document.querySelector('#hero h2 .typing');

function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typingTarget.textContent = current.substring(0, charIndex--);
    } else {
        typingTarget.textContent = current.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
