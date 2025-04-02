const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName(name) {
    return name.trim().length >= 2 && name.trim().length <= 50;
}

function validateEmail(email) {
    return EMAIL_REGEX.test(email);
}

function validateForm(data) {
    let isValid = true;
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';

    if (!validateName(data.name)) {
        nameError.textContent = 'El nombre debe tener entre 2 y 50 caracteres';
        isValid = false;
    }

    if (!validateEmail(data.email)) {
        emailError.textContent = 'El email no es válido';
        isValid = false;
    }

    return isValid;
}