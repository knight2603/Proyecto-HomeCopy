// Admin Dashboard JavaScript
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeUserProfile();
});

function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
        });
    });
}

function initializeUserProfile() {
    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar) {
        // Get the first letter of the user's name (in this case, "Admin")
        userAvatar.textContent = 'A';
    }
}
document.getElementById('logoutButton').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        window.location.href = 'login.html';
    }
});