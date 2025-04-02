// Order status constants
const STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected'
};

// Sample orders data
let orders = [
    {
        id: 1,
        productName: 'Cuaderno Profesional',
        quantity: 100,
        requestDate: '2024-12-06',
        status: STATUS.PENDING,
        urgency: 'alta',
        details: 'Cuaderno Argollado 5 materias con diseño',
        price: 20.000
    },
    {
        id: 2,
        productName: 'Lápiz Mirado',
        quantity: 500,
        requestDate: '2024-12-06',
        status: STATUS.PENDING,
        urgency: 'media',
        details: 'Lápiz de grafito HB #2 Mirado',
        price: 1.300
    },
    {
        id: 3,
        productName: 'Bolígrafo Azul Paper Matte',
        quantity: 200,
        requestDate: '2024-12-06',
        status: STATUS.ACCEPTED,
        urgency: 'baja',
        details: 'Bolígrafo punta fina, tinta azul',
        price: 1.000
    }
];

function getStatusBadgeClass(status) {
    switch(status) {
        case STATUS.PENDING:
            return 'bg-yellow-100 text-yellow-800';
        case STATUS.ACCEPTED:
            return 'bg-green-100 text-green-800';
        case STATUS.REJECTED:
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

function getUrgencyBadgeClass(urgency) {
    switch(urgency.toLowerCase()) {
        case 'alta':
            return 'bg-red-100 text-red-800';
        case 'media':
            return 'bg-yellow-100 text-yellow-800';
        case 'baja':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(amount);
}

function renderOrders() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';

    orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">${order.productName}</div>
                <div class="text-sm text-gray-500">${order.details}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${order.quantity}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatCurrency(order.price)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getUrgencyBadgeClass(order.urgency)}">
                    ${order.urgency.charAt(0).toUpperCase() + order.urgency.slice(1)}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatDate(order.requestDate)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(order.status)}">
                    ${order.status === STATUS.PENDING ? 'Pendiente' : 
                      order.status === STATUS.ACCEPTED ? 'Aceptado' : 'Rechazado'}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                ${order.status === STATUS.PENDING ? `
                    <div class="flex items-center justify-end space-x-3">
                        <button onclick="handleOrderResponse(${order.id}, '${STATUS.ACCEPTED}')" 
                                class="text-green-600 hover:text-green-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </button>
                        <button onclick="handleOrderResponse(${order.id}, '${STATUS.REJECTED}')"
                                class="text-red-600 hover:text-red-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                ` : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });

    updateOrdersCount();
}

function handleOrderResponse(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    const confirmMessage = newStatus === STATUS.ACCEPTED
        ? '¿Estás seguro de que deseas aceptar este pedido?'
        : '¿Estás seguro de que deseas rechazar este pedido?';

    if (confirm(confirmMessage)) {
        order.status = newStatus;
        renderOrders();
        showNotification(
            newStatus === STATUS.ACCEPTED
                ? 'Pedido aceptado exitosamente'
                : 'Pedido rechazado'
        );
    }
}

function updateOrdersCount() {
    const pendingCount = orders.filter(o => o.status === STATUS.PENDING).length;
    const acceptedCount = orders.filter(o => o.status === STATUS.ACCEPTED).length;
    const rejectedCount = orders.filter(o => o.status === STATUS.REJECTED).length;

    document.getElementById('pendingCount').textContent = pendingCount;
    document.getElementById('acceptedCount').textContent = acceptedCount;
    document.getElementById('rejectedCount').textContent = rejectedCount;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function filterOrders() {
    const statusFilter = document.getElementById('statusFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;

    const filteredOrders = orders.filter(order => {
        const matchesStatus = !statusFilter || order.status === statusFilter;
        const matchesSearch = order.productName.toLowerCase().includes(searchTerm) ||
                            order.details.toLowerCase().includes(searchTerm);
        const matchesDate = !dateFilter || order.requestDate === dateFilter;

        return matchesStatus && matchesSearch && matchesDate;
    });

    renderFilteredOrders(filteredOrders);
}

function renderFilteredOrders(filteredOrders) {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = '';

    if (filteredOrders.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td colspan="7" class="px-6 py-4 text-center text-gray-500">
                No se encontraron pedidos que coincidan con los filtros
            </td>
        `;
        tbody.appendChild(tr);
        return;
    }

    filteredOrders.forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">${order.productName}</div>
                <div class="text-sm text-gray-500">${order.details}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${order.quantity}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatCurrency(order.price)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getUrgencyBadgeClass(order.urgency)}">
                    ${order.urgency.charAt(0).toUpperCase() + order.urgency.slice(1)}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${formatDate(order.requestDate)}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(order.status)}">
                    ${order.status === STATUS.PENDING ? 'Pendiente' : 
                      order.status === STATUS.ACCEPTED ? 'Aceptado' : 'Rechazado'}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                ${order.status === STATUS.PENDING ? `
                    <div class="flex items-center justify-end space-x-3">
                        <button onclick="handleOrderResponse(${order.id}, '${STATUS.ACCEPTED}')" 
                                class="text-green-600 hover:text-green-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </button>
                        <button onclick="handleOrderResponse(${order.id}, '${STATUS.REJECTED}')"
                                class="text-red-600 hover:text-red-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                ` : ''}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderOrders();
    
    // Add filter event listeners
    document.getElementById('statusFilter').addEventListener('change', filterOrders);
    document.getElementById('searchInput').addEventListener('input', filterOrders);
    document.getElementById('dateFilter').addEventListener('change', filterOrders);
});