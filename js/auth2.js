export const authenticateUser = (email, role, password) => {
    const isValid = email === 'usuario@gmail.com' && 
                   role === 'user' && 
                   password === 'UserHomeCopy_02';
    return {
      success: isValid,
      message: isValid ? 'Bienvenido de nuevo Usuario!' : 'Credenciales incorrectas'
    };
  };
