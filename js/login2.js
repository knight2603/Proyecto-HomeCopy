import { validateEmail, validatePassword, validateRequired } from './validators2.js';
import { authenticateUser } from './auth2.js';
import { showError, clearError } from './ui2.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const passwordInput = document.getElementById('contraseña');
    const togglePassword = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('error-message');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Change eye icon
        togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        clearError();

        const email = document.getElementById('correo').value;
        const role = document.getElementById('rol').value;
        const password = passwordInput.value;

        // Validate required fields
        const emailRequired = validateRequired(email, 'correo');
        const passwordRequired = validateRequired(password, 'contraseña');
        const roleRequired = validateRequired(role, 'rol');

        if (!emailRequired.isValid || !passwordRequired.isValid || !roleRequired.isValid) {
            showError('Por favor, complete todos los campos requeridos.');
            return;
        }

        // Validate email format
        if (!validateEmail(email)) {
            showError('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validate password requirements
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            showError(passwordValidation.message);
            return;
        }

        // Attempt authentication
        const authResult = authenticateUser(email, role, password);
        
        if (authResult.success) {
            alert(authResult.message);
            window.location.href = 'pageusuarios.html';
        } else {
            showError(authResult.message);
        }
    });
});
