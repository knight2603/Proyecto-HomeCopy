let userProfile = {
    name: 'Admin Usuario',
    email: 'admin@example.com',
    notifications: {
        email: true,
        push: false
    }
};

// Form validation
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const errors = [];
    
    if (password.length < minLength) {
        errors.push(`La contraseña debe tener al menos ${minLength} caracteres`);
    }
    if (!hasUpperCase) {
        errors.push('Debe contener al menos una mayúscula');
    }
    if (!hasLowerCase) {
        errors.push('Debe contener al menos una minúscula');
    }
    if (!hasNumbers) {
        errors.push('Debe contener al menos un número');
    }
    if (!hasSpecialChar) {
        errors.push('Debe contener al menos un carácter especial');
    }
    
    return errors;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showErrors(elementId, errors) {
    const errorContainer = document.getElementById(elementId);
    errorContainer.innerHTML = '';
    
    if (Array.isArray(errors)) {
        errors.forEach(error => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-sm text-red-600 mt-1';
            errorDiv.textContent = error;
            errorContainer.appendChild(errorDiv);
        });
    } else if (errors) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-sm text-red-600 mt-1';
        errorDiv.textContent = errors;
        errorContainer.appendChild(errorDiv);
    }
}

function clearErrors() {
    const errorContainers = document.querySelectorAll('.error-container');
    errorContainers.forEach(container => container.innerHTML = '');
}

// Profile form handling
function handleProfileSubmit(event) {
    event.preventDefault();
    clearErrors();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let hasErrors = false;
    
    if (name.length < 2) {
        showErrors('nameError', 'El nombre debe tener al menos 2 caracteres');
        hasErrors = true;
    }
    
    if (!validateEmail(email)) {
        showErrors('emailError', 'Email inválido');
        hasErrors = true;
    }
    
    if (!hasErrors) {
        userProfile.name = name;
        userProfile.email = email;
        showSuccessModal('Perfil actualizado exitosamente');
    }
}

// Password form handling
function handlePasswordSubmit(event) {
    event.preventDefault();
    clearErrors();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Simulate current password validation
    if (currentPassword !== 'admin123') {
        showErrors('currentPasswordError', 'Contraseña actual incorrecta');
        return;
    }
    
    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
        showErrors('newPasswordError', passwordErrors);
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showErrors('confirmPasswordError', 'Las contraseñas no coinciden');
        return;
    }
    
    showSuccessModal('Contraseña actualizada exitosamente');
    event.target.reset();
}

// Notification toggles
function handleNotificationToggle(type) {
    userProfile.notifications[type] = !userProfile.notifications[type];
    const toggle = document.getElementById(`${type}Toggle`);
    const thumb = toggle.querySelector('.toggle-thumb');
    
    if (userProfile.notifications[type]) {
        toggle.classList.add('bg-blue-600');
        toggle.classList.remove('bg-gray-200');
        thumb.classList.add('translate-x-5');
        thumb.classList.remove('translate-x-0');
    } else {
        toggle.classList.remove('bg-blue-600');
        toggle.classList.add('bg-gray-200');
        thumb.classList.remove('translate-x-5');
        thumb.classList.add('translate-x-0');
    }
}

// Success modal
function showSuccessModal(message) {
    const modal = document.getElementById('successModal');
    const messageElement = document.getElementById('successMessage');
    messageElement.textContent = message;
    modal.classList.remove('hidden');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize form values
    document.getElementById('name').value = userProfile.name;
    document.getElementById('email').value = userProfile.email;
    
    // Form submit handlers
    document.getElementById('profileForm').addEventListener('submit', handleProfileSubmit);
    document.getElementById('passwordForm').addEventListener('submit', handlePasswordSubmit);
    
    // Notification toggle handlers
    document.getElementById('emailToggle').addEventListener('click', () => handleNotificationToggle('email'));
    document.getElementById('pushToggle').addEventListener('click', () => handleNotificationToggle('push'));
    
    // Initialize notification toggles
    Object.entries(userProfile.notifications).forEach(([type, enabled]) => {
        const toggle = document.getElementById(`${type}Toggle`);
        const thumb = toggle.querySelector('.toggle-thumb');
        
        if (enabled) {
            toggle.classList.add('bg-blue-600');
            toggle.classList.remove('bg-gray-200');
            thumb.classList.add('translate-x-5');
            thumb.classList.remove('translate-x-0');
        }
    });
    
    // Logout handler
    document.getElementById('logoutButton').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            window.location.href = 'login.html';
        }
    });
});