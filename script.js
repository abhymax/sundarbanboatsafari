// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const logoText = document.getElementById('nav-logo-text');
const subText = document.getElementById('nav-sub-text');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-white/10', 'backdrop-blur-md', 'border-white/10');
        
        logoText.classList.remove('text-white');
        logoText.classList.add('text-safari-green');
        
        subText.classList.remove('text-gray-200');
        subText.classList.add('text-gray-500');

        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-700');
        });
        
        const mobileBtn = document.querySelector('nav .md\\:hidden button');
        if(mobileBtn) {
            mobileBtn.classList.remove('text-white');
            mobileBtn.classList.add('text-gray-700');
        }
        
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-white/10', 'backdrop-blur-md', 'border-white/10');
        
        logoText.classList.add('text-white');
        logoText.classList.remove('text-safari-green');

        subText.classList.add('text-gray-200');
        subText.classList.remove('text-gray-500');

        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-gray-700');
        });

        const mobileBtn = document.querySelector('nav .md\\:hidden button');
        if(mobileBtn) {
            mobileBtn.classList.add('text-white');
            mobileBtn.classList.remove('text-gray-700');
        }
    }
});

// Modal Functions
function openBooking() { document.getElementById('booking-modal').classList.add('active'); }
function closeBooking() { document.getElementById('booking-modal').classList.remove('active'); }

// FAQ Toggle
function toggleFaq(element) {
    const item = element.parentElement;
    const wasActive = item.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
    });

    if (!wasActive) {
        item.classList.add('active');
    }
}

// GSAP Animations - FIXED
// Using window.load to ensure images are ready before calculating positions
window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger to ensure positions are correct after image load
    ScrollTrigger.refresh();

    // Hero Parallax
    gsap.to("header h1", {
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            scrub: true
        },
        y: 50,
        opacity: 0.8
    });

    // Reveal Packages - Fixed opacity issue
    gsap.from(".package-card", {
        scrollTrigger: { 
            trigger: "#packages", 
            start: "top 85%" // Trigger slightly earlier
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all" // Ensures styles are removed after animation prevents stuck states
    });

    // Reveal Testimonials
    gsap.from("#testimonials", {
        scrollTrigger: { trigger: "#testimonials", start: "top 85%" },
        y: 50,
        opacity: 0,
        duration: 0.6
    });
});