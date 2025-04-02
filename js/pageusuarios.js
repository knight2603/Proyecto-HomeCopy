let products = [
    {
        id: 1,
        name: 'Cuaderno Profesional',
        category: 'Cuadernos',
        price: 20.000,
        stock: 50,
        sku: 'CUA-001',
        description: 'Cuaderno Argollado 5 materias con diseño'
    },
    {
        id: 2,
        name: 'Cuaderno Profesional',
        category: 'Cuadernos',
        price: 17.000,
        stock: 100,
        sku: 'CUA-002',
        description: 'Cuaderno Argollado 100 hojas con diseño'
    },
    {
        id: 3,
        name: 'Cuaderno Escolar',
        category: 'Cuadernos',
        price: 11.000,
        stock: 70,
        sku: 'CUA-003',
        description: 'Cuaderno 100 hojas Cuadriculado pasta dura'
    },
    {
        id: 4,
        name: 'Cuaderno Normal',
        category: 'Cuadernos',
        price: 7.000,
        stock: 200,
        sku: 'CUA-004',
        description: 'Cuaderno 100 hojas Cuadriculado con stikers'
    },
    {
        id: 5,
        name: 'Cuaderno Sencillo',
        category: 'Cuadernos',
        price: 3.500,
        stock: 250,
        sku: 'CUA-005',
        description: 'Cuaderno 100 hojas cuadriculado'
    },
    {
        id: 6,
        name: 'Lápiz Mirado',
        category: 'Escritura',
        price: 1.300,
        stock: 500,
        sku: 'LAP-001',
        description: 'Lápiz de grafito HB #2 Mirado'
    },
    {
        id: 7,
        name: 'Lápiz Faber Castell',
        category: 'Escritura',
        price: 1.800,
        stock: 500,
        sku: 'LAP-002',
        description: 'Lápiz de grafito HB Faber Castell'
    },
    {
        id: 8,
        name: 'Bolígrafo Azul Paper Matte',
        category: 'Escritura',
        price: 1.000,
        stock: 500,
        sku: 'BOL-001',
        description: 'Bolígrafo punta fina, tinta azul'
    },
    {
        id: 9,
        name: 'Bolígrafo Negro Paper Matte',
        category: 'Escritura',
        price: 1.000,
        stock: 500,
        sku: 'BOL-002',
        description: 'Bolígrafo punta fina, tinta Negra'
    },
    {
        id: 10,
        name: 'Bolígrafo Rojo Offi Esco',
        category: 'Escritura',
        price: 1.200,
        stock: 500,
        sku: 'BOL-003',
        description: 'Bolígrafo tinta Negra'
    },
    {
        id: 11,
        name: 'Block papel blanco tamaño carta',
        category: 'Papel',
        price: 3.800,
        stock: 20,
        sku: 'BLG-001',
        description: 'Block Tamaño carta color blanco'
    },
    {
        id: 12,
        name: 'Block cuadriculado tamaño carta',
        category: 'Papel',
        price: 3.400,
        stock: 18,
        sku: 'BLG-002',
        description: 'Block cuadriculado tamaño carta'
    },
    {
        id: 13,
        name: 'Block papel blanco tamaño oficio',
        category: 'Papel',
        price: 4.200,
        stock: 21,
        sku: 'BLG-003',
        description: 'Block papel blanco tamaño oficio'
    },
    {
        id: 14,
        name: 'Block cuadriculado tamaño oficio',
        category: 'Papel',
        price: 4.300,
        stock: 23,
        sku: 'BLG-004',
        description: 'Block cuadriculado tamaño oficio'
    },
    {
        id: 15,
        name: 'Block iris',
        category: 'Papel',
        price: 2.800,
        stock: 40,
        sku: 'BLG-005',
        description: 'Block iris surtido'
    },
    {
        id: 16,
        name: 'Carpeta Tamaño Carta',
        category: 'Archivo',
        price: 3.500,
        stock: 50,
        sku: 'ARC-001',
        description: 'Carpeta Azul tamaño Carta'
    },
    {
        id: 17,
        name: 'Carpeta Tamaño Oficio',
        category: 'Archivo',
        price: 4.000,
        stock: 40,
        sku: 'ARC-002',
        description: 'Carpeta tamaño Oficio color Rojo'
    },
    {
        id: 18,
        name: 'Folder',
        category: 'Archivo',
        price: 4.500,
        stock: 35,
        sku: 'ARC-003',
        description: 'Folder con diseño'
    },
    {
        id: 19,
        name: 'Folder sencillo',
        category: 'Archivo',
        price: 4.000,
        stock: 25,
        sku: 'ARC-004',
        description: 'Folder de carton'
    },
    {
        id: 20,
        name: 'Carpeta de carton',
        category: 'Archivo',
        price: 2.000,
        stock: 100,
        sku: 'ARC-005',
        description: 'Carpeta de carton sencilla'
    },
];

// Shopping cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const clearCartButton = document.getElementById('clearCartButton');
const checkoutButton = document.getElementById('checkoutButton');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const cancelCheckout = document.getElementById('cancelCheckout');

// Render products
function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-lg shadow-sm p-6';
        productCard.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-900 mb-2">${product.name}</h3>
            <p class="text-sm text-gray-500 mb-4">${product.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                <button 
                    onclick="addToCart(${product.id})"
                    class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    ${product.stock === 0 ? 'disabled' : ''}
                >
                    ${product.stock === 0 ? 'Agotado' : 'Agregar al Carrito'}
                </button>
            </div>
            <div class="mt-2 text-sm text-gray-500">
                Stock disponible: ${product.stock}
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter products
function filterProducts() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredProducts = products.filter(product => {
        const matchesCategory = !category || product.category === category;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    renderProducts(filteredProducts);
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        if (cartItem.quantity < product.stock) {
            cartItem.quantity++;
        }
    } else {
        cart.push({
            productId,
            quantity: 1
        });
    }
    
    updateCartCount();
    showSuccessMessage('Producto agregado al carrito');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'flex justify-between items-center';
        cartItemElement.innerHTML = `
            <div>
                <h4 class="font-medium">${product.name}</h4>
                <div class="text-sm text-gray-500">
                    $${product.price.toFixed(2)} x ${item.quantity}
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <span class="font-medium">$${itemTotal.toFixed(2)}</span>
                <button 
                    onclick="removeFromCart(${product.id})"
                    class="text-red-600 hover:text-red-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItemElement);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    updateCartCount();
    renderCart();
}

function clearCart() {
    cart = [];
    updateCartCount();
    renderCart();
    cartModal.classList.add('hidden');
}

// Form validation
function validateCheckoutForm(formData) {
    const errors = {};
    
    if (!formData.name.trim()) {
        errors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
        errors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
        errors.phone = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        errors.phone = 'Teléfono inválido (10 dígitos)';
    }
    
    if (!formData.address.trim()) {
        errors.address = 'La dirección es requerida';
    }
    
    return errors;
}

function showErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Show new errors
    Object.entries(errors).forEach(([field, message]) => {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    });
}

function showSuccessMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

// Event Listeners
categoryFilter.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

cartButton.addEventListener('click', () => {
    renderCart();
    cartModal.classList.remove('hidden');
});

closeCartModal.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

clearCartButton.addEventListener('click', clearCart);

checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    cartModal.classList.add('hidden');
    checkoutModal.classList.remove('hidden');
});

closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
});

cancelCheckout.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };
    
    const errors = validateCheckoutForm(formData);
    
    if (Object.keys(errors).length > 0) {
        showErrors(errors);
        return;
    }
    
    // Here you would typically send the order to a server
    // For now, we'll just show a success message and clear the cart
    showSuccessMessage('¡Pedido realizado con éxito!');
    clearCart();
    checkoutModal.classList.add('hidden');
    checkoutForm.reset();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.add('hidden');
    }
    if (e.target === checkoutModal) {
        checkoutModal.classList.add('hidden');
    }
});

// Initial render
renderProducts();
updateCartCount();