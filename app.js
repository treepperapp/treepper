// Translations dictionary
const translations = {
    en: {
        't-hero-title': 'Choose your next trip based on who you’ll meet',
        't-hero-sub': 'Discover people staying in your same hotel — or decide your destination based on where the right people are.',
        
        't-hiw-title': 'How it works',
        't-hiw-step1-title': 'Add your trip',
        't-hiw-step1-desc': 'Enter your destination, hotel, and dates.',
        't-hiw-step2-title': 'Discover who will be there',
        't-hiw-step2-desc': 'See profiles of people staying in the same place.',
        't-hiw-step3-title': 'Connect before you travel',
        't-hiw-step3-desc': 'Chat and make plans before you even arrive.',
        
        't-diff-title': 'Two ways to experience Treepper',
        't-diff-left-title': 'You already have a destination',
        't-diff-left-1': 'Add your trip',
        't-diff-left-2': 'See who matches with you',
        't-diff-left-3': 'Start connecting',
        't-diff-right-title': 'Not sure where to go?',
        't-diff-right-1': 'Explore destinations and hotels',
        't-diff-right-2': 'See where people are',
        't-diff-right-3': 'Choose your trip based on that',
        
        't-social-title': 'See who you could meet',
        't-preview-title': 'Designed for real connections',
        
        't-value-title': 'A new way to travel',
        't-value-1': 'Meet people before arriving',
        't-value-2': 'Travel with real expectations',
        't-value-3': 'Discover socially active destinations',
        't-value-4': 'Turn trips into connections',
        
        't-final-title': 'Start traveling differently',
        't-footer-privacy': 'Privacy',
        't-footer-terms': 'Terms',
        't-footer-contact': 'Contact'
    },
    es: {
        't-hero-title': 'Elige tu próximo viaje en función de a quién vas a conocer',
        't-hero-sub': 'Descubre personas que estarán en tu mismo hotel… o decide tu destino según con quién quieres coincidir.',
        
        't-hiw-title': 'Cómo funciona',
        't-hiw-step1-title': 'Añade tu viaje',
        't-hiw-step1-desc': 'Introduce tu destino, hotel y fechas.',
        't-hiw-step2-title': 'Descubre quién estará allí',
        't-hiw-step2-desc': 'Mira los perfiles de quienes se alojan en el mismo lugar.',
        't-hiw-step3-title': 'Conecta antes de viajar',
        't-hiw-step3-desc': 'Chatea y haz planes antes de llegar.',
        
        't-diff-title': 'Dos formas de usar Treepper',
        't-diff-left-title': 'Ya tienes un viaje',
        't-diff-left-1': 'Añade tu destino',
        't-diff-left-2': 'Descubre quién coincide contigo',
        't-diff-left-3': 'Empieza a conectar',
        't-diff-right-title': '¿Aún no sabes dónde ir?',
        't-diff-right-1': 'Explora destinos y hoteles',
        't-diff-right-2': 'Descubre dónde hay más gente',
        't-diff-right-3': 'Elige tu viaje en función de eso',
        
        't-social-title': 'Descubre a quién podrías conocer',
        't-preview-title': 'Diseñada para conexiones reales',
        
        't-value-title': 'Una nueva forma de viajar',
        't-value-1': 'Conoce gente antes de llegar',
        't-value-2': 'Viaja con expectativas reales',
        't-value-3': 'Descubre destinos socialmente activos',
        't-value-4': 'Convierte viajes en conexiones',
        
        't-final-title': 'Empieza a viajar de otra forma',
        't-footer-privacy': 'Privacidad',
        't-footer-terms': 'Términos',
        't-footer-contact': 'Contacto'
    }
};

// Initialize Lucide icons
lucide.createIcons();

// Language toggle logic
let currentLang = 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    // Update active states on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.id === `btn-${lang}`) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.footer-lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update text content with simple fade effect
    const elements = Object.keys(translations[lang]);
    
    elements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Apply slight fade out
            el.style.opacity = '0.5';
            setTimeout(() => {
                // To preserve inner HTML for icons (like in Final CTA buttons)
                if (el.querySelector('i')) {
                    const icon = el.querySelector('i').outerHTML;
                    el.innerHTML = `${icon} ${translations[lang][id]}`;
                } else {
                    el.textContent = translations[lang][id];
                }
                el.style.opacity = '1';
            }, 150);
        }
    });
}

// Event Listeners for Language Toggle
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('btn-es').addEventListener('click', () => setLanguage('es'));

document.querySelectorAll('.footer-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        setLanguage(e.target.dataset.lang);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

// Navbar padding on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 0';
    } else {
        nav.style.padding = '20px 0';
    }
});
