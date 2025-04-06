const products = [
    {
        id: 1,
        name: 'Cuaderno Profesional',
        category: 'Cuadernos',
        price: 20000,
        stock: 50,
        sku: 'CUA-001',
        description: 'Cuaderno Argollado 5 materias con diseño',
        image: 'images/product2.png'
    },
    {
        id: 2,
        name: 'Cuaderno Profesional',
        category: 'Cuadernos',
        price: 17000,
        stock: 100,
        sku: 'CUA-002',
        description: 'Cuaderno Argollado 100 hojas con diseño',
        image: 'images/product1.png'
    },
    {
        id: 3,
        name: 'Cuaderno Escolar',
        category: 'Cuadernos',
        price: 11000,
        stock: 70,
        sku: 'CUA-003',
        description: 'Cuaderno 100 hojas Cuadriculado pasta dura',
        image: 'images/product3.png'
    },
    {
        id: 4,
        name: 'Cuaderno Normal',
        category: 'Cuadernos',
        price: 7000,
        stock: 200,
        sku: 'CUA-004',
        description: 'Cuaderno 100 hojas Cuadriculado con stikers',
        image: 'images/product4.png'
    },
    {
        id: 5,
        name: 'Cuaderno Sencillo',
        category: 'Cuadernos',
        price: 3500,
        stock: 250,
        sku: 'CUA-005',
        description: 'Cuaderno 100 hojas cuadriculado',
        image: 'images/product5.png'
    },
    {
        id: 6,
        name: 'Lápiz Mirado',
        category: 'Escritura',
        price: 1300,
        stock: 500,
        sku: 'LAP-001',
        description: 'Lápiz de grafito HB #2 Mirado',
        image: 'images/product6.png'
    },
    {
        id: 7,
        name: 'Lápiz Faber Castell',
        category: 'Escritura',
        price: 1800,
        stock: 500,
        sku: 'LAP-002',
        description: 'Lápiz de grafito HB Faber Castell',
        image: 'images/product7.png'
    },
    {
        id: 8,
        name: 'Bolígrafo Azul Paper Matte',
        category: 'Escritura',
        price: 1000,
        stock: 500,
        sku: 'BOL-001',
        description: 'Bolígrafo punta fina, tinta azul',
        image: 'images/product8.png'
    },
    {
        id: 9,
        name: 'Bolígrafo Negro Paper Matte',
        category: 'Escritura',
        price: 1000,
        stock: 500,
        sku: 'BOL-002',
        description: 'Bolígrafo punta fina, tinta Negra',
        image: 'images/product9.png'
    },
    {
        id: 10,
        name: 'Bolígrafo Rojo Offi Esco',
        category: 'Escritura',
        price: 1200,
        stock: 500,
        sku: 'BOL-003',
        description: 'Bolígrafo tinta Negra',
        image: 'images/product10.png'
    },
    {
        id: 11,
        name: 'Block papel blanco tamaño carta',
        category: 'Papel',
        price: 3800,
        stock: 20,
        sku: 'BLG-001',
        description: 'Block Tamaño carta color blanco',
        image: 'images/product11.png'
    },
    {
        id: 12,
        name: 'Block cuadriculado tamaño carta',
        category: 'Papel',
        price: 3400,
        stock: 18,
        sku: 'BLG-002',
        description: 'Block cuadriculado tamaño carta',
        image: 'images/product12.png'
    },
    {
        id: 13,
        name: 'Block papel blanco tamaño oficio',
        category: 'Papel',
        price: 4200,
        stock: 21,
        sku: 'BLG-003',
        description: 'Block papel blanco tamaño oficio',
        image: 'images/product13.png'
    },
    {
        id: 14,
        name: 'Block cuadriculado tamaño oficio',
        category: 'Papel',
        price: 4300,
        stock: 23,
        sku: 'BLG-004',
        description: 'Block cuadriculado tamaño oficio',
        image: 'images/product14.png'
    },
    {
        id: 15,
        name: 'Block iris',
        category: 'Papel',
        price: 2800,
        stock: 40,
        sku: 'BLG-005',
        description: 'Block iris surtido',
        image: 'images/product15.png'
    },
    {
        id: 16,
        name: 'Carpeta Tamaño Carta',
        category: 'Archivo',
        price: 3500,
        stock: 50,
        sku: 'ARC-001',
        description: 'Carpeta Azul tamaño Carta',
        image: 'images/product16.png'
    },
    {
        id: 17,
        name: 'Carpeta Tamaño Oficio',
        category: 'Archivo',
        price: 4000,
        stock: 40,
        sku: 'ARC-002',
        description: 'Carpeta tamaño Oficio color Rojo',
        image: 'images/product17.png'
    },
    {
        id: 18,
        name: 'Folder',
        category: 'Archivo',
        price: 4500,
        stock: 35,
        sku: 'ARC-003',
        description: 'Folder con diseño',
        image: 'images/product18.png'
    },
    {
        id: 19,
        name: 'Folder sencillo',
        category: 'Archivo',
        price: 4000,
        stock: 25,
        sku: 'ARC-004',
        description: 'Folder de carton',
        image: 'images/product19.png'
    },
    {
        id: 20,
        name: 'Carpeta de carton',
        category: 'Archivo',
        price: 2000,
        stock: 100,
        sku: 'ARC-005',
        description: 'Carpeta de carton sencilla',
        image: 'images/product20.png'
    }

];

// Cart state
let cart = [];
let isLoggedIn = false; // Track login status

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const cartCount = document.querySelector('.cart-count');
const productModal = document.getElementById('productModal');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const loginModal = document.getElementById('loginModal');
const cartBtn = document.getElementById('cartBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// Modal elements
const modalProductName = document.getElementById('modalProductName');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductPrice = document.getElementById('modalProductPrice');
const addToCartBtn = document.getElementById('addToCartBtn');

// Functions
function formatPrice(price) {
    return `$${price.toLocaleString()}`;
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

function renderProducts(filteredProducts) {
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
            </div>
        </div>
    `).join('');
}

function renderCart() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${formatPrice(item.price)} x ${item.quantity}</p>
            </div>
            <p class="cart-item-price">${formatPrice(item.price * item.quantity)}</p>
        </div>
    `).join('');
    updateCartTotal();
}

function filterProducts() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredProducts = products.filter(product => {
        const matchesCategory = !category || product.category === category;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    renderProducts(filteredProducts);
}

function showModal(modal) {
    modal.classList.add('active');
}

function hideModal(modal) {
    modal.classList.remove('active');
}

function showProductDetails(product) {
    modalProductName.textContent = product.name;
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = formatPrice(product.price);
    
    addToCartBtn.onclick = () => {
        addToCart(product);
        hideModal(productModal);
    };
    
    showModal(productModal);
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
}

function handleCheckout() {
    if (cart.length === 0) {
        alert('El carrito está vacío. Agrega al menos un producto antes de continuar.');
        return;
    }

    if (!isLoggedIn) {
        hideModal(cartModal);
        showModal(loginModal);
        return;
    }

    hideModal(cartModal);
    showModal(checkoutModal);
}


function handleLogin(event) {
    event.preventDefault();
    clearError(); // Por si reutilizas el mismo div de errores en el modal

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const role = 'Usuario'; // Forzamos solo el rol 'Usuario'

    if (!email || !password) {
        showError('Por favor ingrese correo y contraseña.');
        return;
    }

    if (!validateEmail(email)) {
        showError('Por favor, ingrese un correo válido.');
        return;
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
        showError(passwordValidation.message);
        return;
    }

    const authResult = authenticateUser(email, role, password);

    if (authResult.success) {
        isLoggedIn = true;
        hideModal(loginModal);
        showModal(checkoutModal);
    } else {
        showError('Credenciales inválidas o no tienes permisos como Usuario.');
    }
}


// Event Listeners
categoryFilter.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

productsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
        const productId = parseInt(card.dataset.id);
        const product = products.find(p => p.id === productId);
        if (product) {
            showProductDetails(product);
        }
    }
});

cartBtn.addEventListener('click', () => {
    renderCart();
    showModal(cartModal);
});

clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCartCount();
    renderCart();
});

checkoutBtn.addEventListener('click', handleCheckout);

document.getElementById('loginForm').addEventListener('submit', handleLogin);

// Close buttons
document.querySelectorAll('.close-btn, .modal-close').forEach(button => {
    button.addEventListener('click', () => {
        hideModal(productModal);
        hideModal(cartModal);
        hideModal(checkoutModal);
        hideModal(loginModal);
    });
});

// Checkout form submission
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Pedido realizado con éxito!');
    cart = [];
    updateCartCount();
    hideModal(checkoutModal);
});

// Initialize
renderProducts(products);
updateCartCount();
