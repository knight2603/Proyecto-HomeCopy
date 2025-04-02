export const showError = (message) => {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
    } else {
      alert(message);
    }
  };
  
  export const clearError = () => {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
    }
  };