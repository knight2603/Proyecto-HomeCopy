import { validateEmail, validatePassword, validateRequired } from './validators.js';
import { authenticateUser } from './auth.js';
import { showError, clearError } from './ui.js';

const initializeLoginForm = () => {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) {
    console.error('Login form not found');
    return;
  }

  loginForm.addEventListener('submit', handleSubmit);
};

const handleSubmit = (event) => {
  event.preventDefault();
  clearError();

  const email = document.getElementById('correo')?.value ?? '';
  const role = document.getElementById('rol')?.value ?? '';
  const password = document.getElementById('contraseña')?.value ?? '';

  const emailRequired = validateRequired(email, 'correo');
  const passwordRequired = validateRequired(password, 'contraseña');
  const roleRequired = validateRequired(role, 'rol');

  if (!emailRequired.isValid || !passwordRequired.isValid || !roleRequired.isValid) {
    showError('Por favor, complete todos los campos requeridos.');
    return;
  }

  if (!validateEmail(email)) {
    showError('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    showError(passwordValidation.message);
    return;
  }

  const authResult = authenticateUser(email, role, password);
  
  if (authResult.success) {
    alert(authResult.message);
    window.location.href = 'pageadmin.html';
  } else {
    showError(authResult.message);
  }
};

document.addEventListener('DOMContentLoaded', initializeLoginForm);