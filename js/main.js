/*=============== MOBILE MENU ===============*/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/*=============== STICKY HEADER ===============*/
const header = document.getElementById('header');
const scrollY = window.pageYOffset;

function scrollHeader() {
    const scrollY = window.pageYOffset;
    if (scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav-link[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== PROJECT CARD HOVER EFFECTS ===============*/
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});

/*=============== TESTIMONIALS HOVER EFFECTS ===============*/
const testimonialCards = document.querySelectorAll('.testimonial-card');

// Add hover effect to testimonial cards
testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Dim all other cards
        testimonialCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0.5';
                otherCard.style.transform = 'scale(0.98)';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        // Reset all cards to default state
        testimonialCards.forEach(otherCard => {
            otherCard.style.opacity = '0.7';
            otherCard.style.transform = 'scale(1)';
        });
    });
});

/*=============== TESTIMONIALS CAROUSEL ===============*/
const testimonialDots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentIndex = 0;

// Function to update testimonial display
function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Show only the current testimonial
    testimonialCards[index].style.display = 'flex';
    
    // Update dots
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize testimonials
if (testimonialCards.length > 0) {
    showTestimonial(currentIndex);

    // Add click event to dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });

    // Add click event to arrows
    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
            showTestimonial(currentIndex);
        });
        
        nextArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonialCards.length;
            showTestimonial(currentIndex);
        });
    }
}

/*=============== SCROLL TO TOP BUTTON ===============*/
const scrollTopButton = document.getElementById('scroll-top');

function scrollToTop() {
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.add('active');
    } else {
        scrollTopButton.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollToTop);

if (scrollTopButton) {
    scrollTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to your server or an email service
        // For now, we'll just log the data and show a success message
        console.log({ name, email, subject, message });
        
        // Show success message (in a real application, you would show this after successful form submission)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

/*=============== INITIALIZE WHEN DOM IS LOADED ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.section-title, .project-card, .skill-item, .hackathon-card, .achievement-card, .article-card, .testimonial-card'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('reveal');
    });
    
    // Initialize masonry-like grid for testimonials
    // This is an optional enhancement if we need additional JS for grid layout
    const testimonialGrid = document.querySelector('.testimonials-grid');
    if (testimonialGrid) {
        // You could add a masonry.js library here if needed
        // For now, we'll use CSS grid which works well for most cases
    }
    
    // Initialize reveal
    reveal();
}); 