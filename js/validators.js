export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return {
    isValid: password.length >= 8,
    message: password.length < 8 ? 'La contraseña debe tener al menos 8 caracteres.' : ''
  };
};

export const validateRequired = (value, fieldName) => {
  return {
    isValid: value.trim() !== '',
    message: value.trim() === '' ? `Por favor, ingrese su ${fieldName}` : ''
  };
};

