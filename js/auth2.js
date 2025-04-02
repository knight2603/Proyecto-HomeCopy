export const authenticateUser = (email, role, password) => {
    const isValid = email === 'usuario@gmail.com' && 
                   role === 'user' && 
                   password === '12345678';
    return {
      success: isValid,
      message: isValid ? 'Bienvenido de nuevo Usuario!' : 'Credenciales incorrectas'
    };
  };