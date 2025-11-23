// Project Data
const projects = [
    {
        title: "Krishna Cafe",
        category: "Hospitality",
        image: "public/screenshots/cafe.png",
        link: "https://krishnacafesample.pages.dev/"
    },
    {
        title: "The Artisan's Atelier",
        category: "E-Commerce",
        image: "public/screenshots/ecom2.png",
        link: "https://krishnaecomsample2.pages.dev/"
    },
    {
        title: "Ethereal Models",
        category: "Fashion",
        image: "public/screenshots/model.png",
        link: "https://krishnamodelsample.pages.dev/"
    },
    {
        title: "Krishna Jewellery",
        category: "Luxury",
        image: "public/screenshots/jewellery.png",
        link: "https://krishnajewelsample.pages.dev/"
    },
    {
        title: "Krishna Bakery",
        category: "Food & Beverage",
        image: "public/screenshots/bakery.png",
        link: "https://krishnabakerysample.pages.dev/"
    },
    {
        title: "Krishna Makeup",
        category: "Beauty",
        image: "public/screenshots/makeup.png",
        link: "https://krishnaartistsample.pages.dev/"
    },
    {
        title: "Krishna Shoes",
        category: "Retail",
        image: "public/screenshots/shoes.png",
        link: "https://krishnashoessample.pages.dev/"
    },
    {
        title: "Krishna Restaurant",
        category: "Dining",
        image: "public/screenshots/restro.png",
        link: "https://krishnarestrosample.pages.dev/"
    },
    {
        title: "Krishna Mehandi",
        category: "Art",
        image: "public/screenshots/mehandi.png",
        link: "https://krishnamehandisample.pages.dev/"
    },
    {
        title: "Krishna E-com 1",
        category: "Retail",
        image: "public/screenshots/ecom.png",
        link: "https://krishnaecomsample.pages.dev/"
    },
    {
        title: "Model Agency 2",
        category: "Fashion",
        image: "public/screenshots/model2.png",
        link: "https://krishnamodelsample1.pages.dev/"
    }
];

// Render Projects
const portfolioGrid = document.getElementById('portfolio-grid');

projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden group opacity-0 translate-y-10 transition-all duration-700';
    card.style.transitionDelay = `${index * 100}ms`; // Staggered animation
    
    card.innerHTML = `
        <div class="relative h-64 overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onerror="this.src='https://placehold.co/600x400/222/fff?text=${project.title.replace(' ', '+')}'">
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="${project.link}" target="_blank" class="px-6 py-2 bg-white text-black rounded-full font-bold uppercase text-sm tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-purple-500 hover:text-white">
                    Live Preview
                </a>
            </div>
        </div>
        <div class="p-6">
            <p class="text-purple-400 text-xs uppercase tracking-widest mb-2">${project.category}</p>
            <h3 class="text-2xl font-bold font-serif group-hover:text-purple-300 transition-colors">${project.title}</h3>
        </div>
    `;
    
    portfolioGrid.appendChild(card);
});

// Animation Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe Hero Elements
document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta').forEach(el => {
    setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-10');
        el.classList.add('transition-all', 'duration-1000');
    }, 500);
});

// Observe Project Cards
document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});


// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add some lag to the outline for smooth feel
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effects for cursor
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
    } else {
        navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
    }
});
