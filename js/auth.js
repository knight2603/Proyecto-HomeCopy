export const authenticateUser = (email, role, password) => {
    const isValid = email === 'administrador@gmail.com' && 
                   role === 'Administrador' && 
                   password === '12345678';
    return {
      success: isValid,
      message: isValid ? 'Bienvenido de nuevo Administrador!' : 'Credenciales incorrectas'
    };
  };
