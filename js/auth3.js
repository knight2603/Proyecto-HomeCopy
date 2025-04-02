export const authenticateUser = (email, role, password) => {
    const isValid = email === 'proveedor@gmail.com' && 
                   role === 'proveer' && 
                   password === '12345678';
    return {
      success: isValid,
      message: isValid ? 'Bienvenido de nuevo proveedor!' : 'Credenciales incorrectas'
    };
  };