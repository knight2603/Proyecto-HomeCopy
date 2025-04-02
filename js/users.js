let users = [
    {
        id: 1,
        name: 'Sebastian Sierra',
        email: 'sierrasebastian206@gmail.com',
        role: 'Administrador',
        status: 'active',
        avatar: 'images/yo.jpg'
    },
    {
        id: 2,
        name: 'David Morales Ladino',
        email: 'daviddermo56@gmail.com',
        role: 'Administrador',
        status: 'active',
        avatar: 'images/clash.png'
    },
    {
        id: 3,
        name: 'Javier Garcia Villegas',
        email: 'Jg316066@gmail.com',
        role: 'Administrador',
        status: 'active',
        avatar: 'images/costa.jpg'
    },
    {
        id: 4,
        name: 'Julieth Barragan',
        email: 'Jbg2603@gmail.com',
        role: 'Usuario',
        status: 'active',
        avatar: 'images/girl.png'
    }, 
    {
        id: 5,
        name: 'Juan Rodriguez',
        email: 'Juangb@gmail.com',
        role: 'Usuario',
        status: 'inactive',
        avatar: 'images/account-circle-line.png'
    }, 
    {
        id: 6,
        name: 'Brayan Cruz',
        email: 'stivbrayan@gmail.com',
        role: 'Usuario',
        status: 'inactive',
        avatar: 'images/account-circle-line.png'
    },
    {
        id: 7,
        name: 'Jose Alfredo',
        email: 'jsa12345@gmail.com',
        role: 'Provedor',
        status: 'active',
        avatar: 'images/account-circle-line.png'
    },
    {
        id: 8,
        name: 'Jeronimo Cruz',
        email: 'jeronimo123@gmail.com',
        role: 'Usuario',
        status: 'active',
        avatar: 'images/account-circle-line.png'
    },
    {
        id: 9,
        name: 'Carlos Cruz',
        email: 'Carlosablt12@gmail.com',
        role: 'Proveedor',
        status: 'active',
        avatar: 'images/account-circle-line.png'
    },
    {
        id: 10,
        name: 'Santiago Lopez',
        email: 'santig@gmail.com',
        role: 'Usuario',
        status: 'inactive',
        avatar: 'images/account-circle-line.png'
    },
];

let editingUserId = null;

function renderUsers() {
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <img class="h-10 w-10 rounded-full object-cover" src="${user.avatar}" alt="${user.name}">
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">${user.name}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${user.email}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${user.role}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                }">
                    ${user.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex items-center justify-end space-x-3">
                    <button onclick="toggleUserStatus(${user.id})" class="text-gray-600 hover:text-gray-900" title="${user.status === 'active' ? 'Desactivar' : 'Activar'}">
                        ${user.status === 'active' 
                            ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg>'
                            : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle></svg>'
                        }
                    </button>
                    <button onclick="editUser(${user.id})" class="text-blue-600 hover:text-blue-900" title="Editar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                    <button onclick="deleteUser(${user.id})" class="text-red-600 hover:text-red-900" title="Eliminar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleUserStatus(userId) {
    users = users.map(user => 
        user.id === userId 
            ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
            : user
    );
    renderUsers();
}

function deleteUser(userId) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        users = users.filter(user => user.id !== userId);
        renderUsers();
    }
}

function editUser(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        editingUserId = userId;
        document.getElementById('modalTitle').textContent = 'Editar Usuario';
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('role').value = user.role;
        openModal();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
    };

    if (!validateForm(formData)) {
        return;
    }

    if (editingUserId) {
        users = users.map(user => 
            user.id === editingUserId
                ? { ...user, ...formData }
                : user
        );
        editingUserId = null;
    } else {
        const newUser = {
            ...formData,
            id: Math.max(...users.map(u => u.id)) + 1,
            status: 'active',
            avatar: 'images/account-circle-line.png'
        };
        users.push(newUser);
    }

    renderUsers();
    closeModal();
    resetForm();
}

function resetForm() {
    document.getElementById('userForm').reset();
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    editingUserId = null;
}

// Event Listeners
document.getElementById('addUserButton').addEventListener('click', () => {
    document.getElementById('modalTitle').textContent = 'Agregar Usuario';
    resetForm();
    openModal();
});

document.getElementById('logoutButton').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        window.location.href = 'login.html';
    }
});

document.getElementById('userForm').addEventListener('submit', handleSubmit);

// Initial render
renderUsers();

