// VapeShop JavaScript - Complete Standalone Version with PNG Images

// Product data with actual PNG images
const products = [
    {
        id: "maskking-gts",
        name: "Maskking GTS 2500 puffs",
        image: "images/maskking-gts-2500.png",
        puffs: "2500",
        price: "1.200 RSD",
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
        image: "images/maskking-vimax-20000.png",
        puffs: "20000",
        price: "3.500 RSD",
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
        image: "images/vapanda-vapeex.png",
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
        image: "images/vapanda-pro-40000.png",
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
        image: "images/fizzy-nova-plus.png",
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

// Puff images (using actual PNG files)
const puffImages = [
    "images/puff-floating-1.png",
    "images/puff-floating-2.png",
    "images/puff-floating-3.png"
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

function toggleFlavors(productId, event) {
    // Prevent any default behavior that might cause page refresh
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Toggle state
    const wasOpen = openFlavors === productId;
    openFlavors = wasOpen ? null : productId;
    
    // Find the specific product card and update only that one
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (productCard) {
        const flavorList = productCard.querySelector('.flavor-list');
        const button = productCard.querySelector('.flavor-btn');
        
        if (wasOpen) {
            // Closing
            productCard.classList.remove('active');
            flavorList.classList.remove('open');
            button.textContent = 'Prikaži Ukuse';
        } else {
            // Opening
            productCard.classList.add('active');
            flavorList.classList.add('open');
            button.textContent = 'Sakrij Ukuse';
        }
    }
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
        productCard.setAttribute('data-product-id', product.id);
        
        productCard.innerHTML = `
            <div class="product-card-content">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
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

                <button onclick="toggleFlavors('${product.id}', event)" class="flavor-btn">
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

// Preload images
function preloadImages() {
    const imageUrls = [
        ...products.map(product => product.image),
        ...puffImages
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
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
    preloadImages();
    
    console.log('✅ VapeShop initialized successfully!');
    console.log(`📦 Loaded ${products.length} products`);
    console.log('🎨 Animations and effects ready');
    console.log('🖼️ All PNG images loaded');
});
