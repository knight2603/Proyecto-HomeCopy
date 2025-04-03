export const authenticateUser = (email, role, password) => {
    const isValid = email === 'administrador@gmail.com' && 
                   role === 'Administrador' && 
                   password === 'AdminHomeCopy_01';
    return {
      success: isValid,
      message: isValid ? 'Bienvenido de nuevo Administrador!' : 'Credenciales incorrectas'
    };
  };
