document.addEventListener("DOMContentLoaded", function (){

    const form = document.getElementById("password-form");
    
    form.addEventListener("submit", function (event){
        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("password2").value;

        if(password === confirmPassword){
            alert("Cambio de contraseña exitoso");
            window.location.href = "login.html";
        }else{
            alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
        }
    });
});