export const authenticateUser = (email, role, password) => {
    const isValid = email === 'proveedor@gmail.com' && 
                   role === 'proveer' && 
                   password === 'ProvHomeCopy_03';
    return {
      success: isValid,
      message: isValid ? 'Bienvenido de nuevo proveedor!' : 'Credenciales incorrectas'
    };
  };
