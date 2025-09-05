// VapeShop JavaScript - Complete Standalone Version

// Product data with real images converted to placeholder SVGs
const products = [
    {
        id: "maskking-gts",
        name: "Maskking GTS",
        image: "obr/maskking-gts.png",
        puffs: "2500",
        price: "1.800 RSD",
        flavors: [
            "🍑🍇 Peach Grape",
            "🍇🫐 Blackcurrant", 
            "🥭🍍 Mango Pineapple",
            "🍍🍊 Pineapple Grapefruit",
            "🍈🥥 Melon Coconut",
            "🍏🍈 Apple Cantaloupe",
            "🍈🍉🍓 Lychee Watermelon Strawberry",
            "🍒 Fantasy Cherry"
        ]
    },
    {
        id: "maskking-vimax",
        name: "Maskking Vimax 20000 puffs (5%)",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f5576c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23grad2)'/%3E%3Crect x='30' y='40' width='240' height='320' rx='20' fill='%23222' opacity='0.9'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='14' fill='%23fff' text-anchor='middle' font-weight='bold'%3EMaskking Vimax%3C/text%3E%3Ctext x='150' y='190' font-family='Arial' font-size='12' fill='%23ccc' text-anchor='middle'%3E20000 puffs (5%25)%3C/text%3E%3Crect x='80' y='220' width='140' height='60' rx='10' fill='%23f093fb' opacity='0.7'/%3E%3Ctext x='150' y='255' font-family='Arial' font-size='12' fill='%23fff' text-anchor='middle' font-weight='bold'%3EPREMIUM%3C/text%3E%3C/svg%3E",
        puffs: "20000",
        price: "2.200 RSD",
        flavors: [
            "🍓🥝 Strawberry Kiwi",
            "🍉❄️ Watermelon ice",
            "🧸 White gummy bear",
            "🍓🍈 Strawberry lychee", 
            "🌿🍈 Mint melon",
            "🍓🥭 Strawberry mango",
            "🍓🧊 Strawberry ice"
        ]
    },
    {
        id: "vapanda-vapeex",
        name: "Vapanda Vapeex",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234facfe;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300f2fe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23grad3)'/%3E%3Crect x='45' y='60' width='210' height='280' rx='25' fill='%23111' opacity='0.8'/%3E%3Ctext x='150' y='180' font-family='Arial' font-size='16' fill='%23fff' text-anchor='middle' font-weight='bold'%3EVapanda%3C/text%3E%3Ctext x='150' y='200' font-family='Arial' font-size='14' fill='%234facfe' text-anchor='middle' font-weight='bold'%3EVapeex%3C/text%3E%3Ctext x='150' y='220' font-family='Arial' font-size='12' fill='%23ccc' text-anchor='middle'%3E15000 puffs%3C/text%3E%3Cpath d='M120 240 Q150 260 180 240 Q150 220 120 240' fill='%234facfe' opacity='0.6'/%3E%3C/svg%3E",
        puffs: "15000",
        price: "2.800 RSD",
        flavors: [
            "🥝🍈 Kiwi Passion Fruit",
            "🫐❄️ Blue Razz Ice",
            "🍬 Fruit Gum",
            "🍓🍉 Strawberry Watermelon",
            "🍍🥥 Pina Colada",
            "🍏🍎 Double Apple",
            "🫐 Blueberry ice"
        ]
    },
    {
        id: "vapanda-pro",
        name: "Vapanda Pro 40000 puffs",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23a8edea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fed6e3;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23grad4)'/%3E%3Crect x='35' y='50' width='230' height='300' rx='30' fill='%23000' opacity='0.9'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='18' fill='%23fff' text-anchor='middle' font-weight='bold'%3EVapanda%3C/text%3E%3Ctext x='150' y='180' font-family='Arial' font-size='16' fill='%23a8edea' text-anchor='middle' font-weight='bold'%3EPRO%3C/text%3E%3Ctext x='150' y='200' font-family='Arial' font-size='12' fill='%23ccc' text-anchor='middle'%3E40000 puffs%3C/text%3E%3Crect x='70' y='220' width='160' height='40' rx='20' fill='%23a8edea' opacity='0.8'/%3E%3Ctext x='150' y='245' font-family='Arial' font-size='14' fill='%23000' text-anchor='middle' font-weight='bold'%3EPREMIUM PRO%3C/text%3E%3C/svg%3E",
        puffs: "40000",
        price: "4.500 RSD",
        flavors: [
            "🫐❄️ Blueberry Ice",
            "🥝🍈🥭 Kiwi Passion Fruit Guava",
            "🍑🥭🍉 Peach Mango Watermelon",
            "🍓🍉 Strawberry Watermelon",
            "🍉❄️ Watermelon Ice",
            "🍓🫐🍒 Mixed Berries",
            "🫐🍋 Blue Razz Lemonade"
        ]
    },
    {
        id: "fizzy-nova",
        name: "FIZZY NOVA PLUS 40000 puffs",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff9a9e;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fecfef;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='400' fill='url(%23grad5)'/%3E%3Crect x='40' y='45' width='220' height='310' rx='35' fill='%231a1a1a' opacity='0.9'/%3E%3Ctext x='150' y='150' font-family='Arial' font-size='20' fill='%23ff9a9e' text-anchor='middle' font-weight='bold'%3EFIZZY%3C/text%3E%3Ctext x='150' y='175' font-family='Arial' font-size='18' fill='%23fff' text-anchor='middle' font-weight='bold'%3ENOVA%3C/text%3E%3Ctext x='150' y='195' font-family='Arial' font-size='16' fill='%23fecfef' text-anchor='middle' font-weight='bold'%3EPLUS%3C/text%3E%3Ctext x='150' y='215' font-family='Arial' font-size='12' fill='%23ccc' text-anchor='middle'%3E40000 puffs%3C/text%3E%3Ccircle cx='120' cy='250' r='15' fill='%23ff9a9e' opacity='0.7'/%3E%3Ccircle cx='150' cy='250' r='15' fill='%23fecfef' opacity='0.7'/%3E%3Ccircle cx='180' cy='250' r='15' fill='%23ff9a9e' opacity='0.7'/%3E%3C/svg%3E",
        puffs: "40000",
        price: "4.800 RSD",
        flavors: [
            "🍓🧊 Strawberry Ice",
            "🫐🥥 Blueberry Coconut",
            "🍓🥝 Strawberry Kiwi",
            "🍉🧊 Watermelon Ice",
            "🍑🍍🍉 Peach Mango Watermelon",
            "🥝🍈 Kiwi Passion Fruit Guava",
            "🍋 Raspberry Lemon",
            "🫐🍓 Triple Berry",
            "🍑🧊 Peach Ice",
            "🍇🍋 Grape Lime",
            "🍋🔵 Blue Razz Lemonade"
        ]
    }
];

// Puff images (using enhanced SVG placeholders)
const puffImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cdefs%3E%3CradialGradient id='puff1'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:0.9' /%3E%3Cstop offset='100%25' style='stop-color:%23ffffff;stop-opacity:0.3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='30' fill='url(%23puff1)'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cdefs%3E%3CradialGradient id='puff2'%3E%3Cstop offset='0%25' style='stop-color:%23f0f0f0;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23f0f0f0;stop-opacity:0.2' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='40' cy='40' rx='35' ry='25' fill='url(%23puff2)'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cdefs%3E%3CradialGradient id='puff3'%3E%3Cstop offset='0%25' style='stop-color:%23e0e0e0;stop-opacity:0.9' /%3E%3Cstop offset='100%25' style='stop-color:%23e0e0e0;stop-opacity:0.4' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='40' cy='40' r='25' fill='url(%23puff3)'/%3E%3C/svg%3E"
];

// State management
let openFlavors = null;

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleFlavors(productId) {
    openFlavors = openFlavors === productId ? null : productId;
    renderProducts();
}

// Create floating puff element
function createFloatingPuff(delay, duration, size, startX, startY, imageIndex) {
    const puff = document.createElement('img');
    puff.src = puffImages[imageIndex % 3];
    puff.alt = '';
    puff.className = 'floating-puff';
    puff.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${startY}%;
        left: ${startX}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
    `;
    return puff;
}

// Initialize floating puffs
function initFloatingPuffs() {
    const container = document.getElementById('floating-background');
    
    const puffConfigs = [
        { delay: 0, duration: 15, size: 72, startX: 10, startY: 80, imageIndex: 0 },
        { delay: -4, duration: 18, size: 60, startX: 80, startY: 70, imageIndex: 1 },
        { delay: -8, duration: 12, size: 84, startX: 50, startY: 85, imageIndex: 2 },
        { delay: -12, duration: 20, size: 66, startX: 25, startY: 75, imageIndex: 0 },
        { delay: -16, duration: 16, size: 78, startX: 70, startY: 90, imageIndex: 1 },
        { delay: -20, duration: 22, size: 54, startX: 15, startY: 60, imageIndex: 2 },
        { delay: -24, duration: 14, size: 70, startX: 85, startY: 65, imageIndex: 0 },
        { delay: -28, duration: 19, size: 62, startX: 40, startY: 95, imageIndex: 1 }
    ];
    
    puffConfigs.forEach(config => {
        const puff = createFloatingPuff(
            config.delay, 
            config.duration, 
            config.size, 
            config.startX, 
            config.startY, 
            config.imageIndex
        );
        container.appendChild(puff);
    });
}

// Render products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card section-fade-in ${openFlavors === product.id ? 'active' : ''}`;
        
        productCard.innerHTML = `
            <div class="product-card-content">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                
                <h3 class="text-xl font-bold mb-2 text-foreground">
                    ${product.name}
                </h3>
                
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm text-muted-foreground">
                        ${product.puffs} puffs
                    </span>
                    <span class="price-tag">
                        ${product.price}
                    </span>
                </div>

                <button onclick="toggleFlavors('${product.id}')" class="flavor-btn">
                    ${openFlavors === product.id ? 'Sakrij Ukuse' : 'Prikaži Ukuse'}
                </button>

                <div class="flavor-list ${openFlavors === product.id ? 'open' : ''}">
                    ${product.flavors.map(flavor => `
                        <div class="flavor-item">
                            ${flavor}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        grid.appendChild(productCard);
    });
}

// Initialize intersection observer for animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    // Observe all elements with animation classes
    document.querySelectorAll('.section-fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced smooth scrolling with offset
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add scroll effects
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const puffs = document.querySelectorAll('.floating-puff');
        
        puffs.forEach((puff, index) => {
            const speed = 0.5 + (index * 0.1);
            puff.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

// Make functions globally accessible
window.scrollToSection = scrollToSection;
window.toggleFlavors = toggleFlavors;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 VapeShop initializing...');
    
    // Initialize all components
    initFloatingPuffs();
    renderProducts();
    initAnimations();
    initScrollEffects();
    
    // Add performance optimizations
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Preload images
            products.forEach(product => {
                const img = new Image();
                img.src = product.image;
            });
        });
    }
    
    console.log('✅ VapeShop initialized successfully!');
    console.log(`📦 Loaded ${products.length} products`);
    console.log('🎨 Animations and effects ready');

});
