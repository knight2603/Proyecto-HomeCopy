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

let editingProductId = null;

function renderProducts() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';

    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">${product.sku}</div>
            </td>
            <td class="px-6 py-4">
                <div class="text-sm text-gray-900">${product.name}</div>
                <div class="text-sm text-gray-500">${product.description}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${product.category}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="text-sm text-gray-900">$${product.price.toFixed(2)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="text-sm ${product.stock > 20 ? 'text-green-600' : 'text-red-600'}">${product.stock}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex items-center justify-end space-x-3">
                    <button onclick="editProduct(${product.id})" class="text-blue-600 hover:text-blue-900" title="Editar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button onclick="deleteProduct(${product.id})" class="text-red-600 hover:text-red-900" title="Eliminar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openModal() {
    document.getElementById('productModal').classList.remove('hidden');
    if (!editingProductId) {
        document.getElementById('modalTitle').textContent = 'Agregar Producto';
        document.getElementById('productForm').reset();
    }
}

function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
    editingProductId = null;
    document.getElementById('productForm').reset();
    clearErrors();
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        editingProductId = productId;
        document.getElementById('modalTitle').textContent = 'Editar Producto';
        
        // Fill form fields
        document.getElementById('name').value = product.name;
        document.getElementById('category').value = product.category;
        document.getElementById('price').value = product.price;
        document.getElementById('stock').value = product.stock;
        document.getElementById('sku').value = product.sku;
        document.getElementById('description').value = product.description;
        
        openModal();
    }
}

function deleteProduct(productId) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        products = products.filter(product => product.id !== productId);
        renderProducts();
    }
}

function validateForm(data) {
    const errors = {};
    
    if (!data.name.trim()) {
        errors.name = 'El nombre es requerido';
    }
    
    if (!data.sku.trim()) {
        errors.sku = 'El SKU es requerido';
    } else if (!/^[A-Z]{3}-\d{3}$/.test(data.sku)) {
        errors.sku = 'El SKU debe tener el formato AAA-000';
    }
    
    if (isNaN(data.price) || data.price <= 0) {
        errors.price = 'El precio debe ser mayor a 0';
    }
    
    if (isNaN(data.stock) || data.stock < 0) {
        errors.stock = 'El stock no puede ser negativo';
    }
    
    return errors;
}

function showErrors(errors) {
    clearErrors();
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = errors[field];
        }
    });
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        category: document.getElementById('category').value,
        price: parseFloat(document.getElementById('price').value),
        stock: parseInt(document.getElementById('stock').value),
        sku: document.getElementById('sku').value.toUpperCase(),
        description: document.getElementById('description').value
    };
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
        showErrors(errors);
        return;
    }
    
    if (editingProductId) {
        // Update existing product
        products = products.map(product => 
            product.id === editingProductId
                ? { ...product, ...formData }
                : product
        );
    } else {
        // Add new product
        const newProduct = {
            ...formData,
            id: Math.max(...products.map(p => p.id)) + 1
        };
        products.push(newProduct);
    }
    
    renderProducts();
    closeModal();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    document.getElementById('addProductButton').addEventListener('click', () => {
        editingProductId = null;
        openModal();
    });
    
    document.getElementById('productForm').addEventListener('submit', handleSubmit);
    
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) {
            closeModal();
        }
    });
    
    // Logout handler
    document.getElementById('logoutButton').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            window.location.href = 'login.html';
        }
    });
});