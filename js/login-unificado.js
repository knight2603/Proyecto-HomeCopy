// --- VALIDATORS ---
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    return {
      isValid: password.length >= 8,
      message: password.length < 8 ? 'La contraseña debe tener al menos 8 caracteres.' : ''
    };
  };
  
  const validateRequired = (value, fieldName) => {
    return {
      isValid: value.trim() !== '',
      message: value.trim() === '' ? `Por favor, ingrese su ${fieldName}` : ''
    };
  };
  
  // --- UI ---
  const showError = (message) => {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    } else {
      alert(message);
    }
  };
  
  const clearError = () => {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
    }
  };
  
  // --- AUTH ---
  const users = [
    {
      email: 'administrador@gmail.com',
      role: 'Administrador',
      password: 'AdminHomeCopy_01',
      redirect: 'pageadmin.html',
      welcome: '¡Bienvenido de nuevo Administrador!'
    },
    {
      email: 'usuario@gmail.com',
      role: 'Usuario',
      password: 'User1234',
      redirect: 'pageusuarios.html',
      welcome: '¡Bienvenido de nuevo Usuario!'
    },
    {
      email: 'proveedor@gmail.com',
      role: 'Proveedor',
      password: 'Proveedor2024',
      redirect: 'supplier.html',
      welcome: '¡Bienvenido de nuevo Proveedor!'
    }
  ];
  
  const authenticateUser = (email, role, password) => {
    const user = users.find(u =>
      u.email === email &&
      u.role === role &&
      u.password === password
    );
  
    if (user) {
      return {
        success: true,
        message: user.welcome,
        redirect: user.redirect
      };
    } else {
      return {
        success: false,
        message: 'Credenciales incorrectas'
      };
    }
  };
  
  // --- LOGIN MAIN ---
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const passwordInput = document.getElementById('contraseña');
    const togglePassword = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('error-message');
  
    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
  
    // Form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearError();
  
      const email = document.getElementById('correo').value;
      const role = document.getElementById('rol').value;
      const password = passwordInput.value;
  
      // Validaciones campo por campo
      const emailRequired = validateRequired(email, 'correo');
      const roleRequired = validateRequired(role, 'rol');
      const passwordRequired = validateRequired(password, 'contraseña');
  
      if (!emailRequired.isValid) {
        showError(emailRequired.message);
        return;
      }
      if (!roleRequired.isValid) {
        showError(roleRequired.message);
        return;
      }
      if (!passwordRequired.isValid) {
        showError(passwordRequired.message);
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
        window.location.href = authResult.redirect;
      } else {
        showError(authResult.message);
      }
    });
  });
  
