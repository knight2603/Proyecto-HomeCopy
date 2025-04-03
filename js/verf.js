document.addEventListener("DOMContentLoaded", function(){
    console.log("verf.js cargado correctamente");
    const registerForm = document.querySelector("form");

    if(registerForm){
        registerForm.addEventListener("submit", function (event){
            event.preventDefault();

            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const role = document.getElementById("role").value;
            const password = document.getElementById("password").value;

            if (username === "" || email === "" || role === "" || password === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }
            if (password.length < 8) {
                alert("La contraseña debe tener al menos 8 caracteres.");
                return;
            }
            if(username && email && role && password){
                let users = JSON.parse(localStorage.getItem("users")) || [];
                users.push({username, email, role, password});
                localStorage.setItem("users", JSON.stringify(users));
                alert("Usuario registrado correctamente. ahora puedes iniciar sesiom");
                window.location.href = "login.html";
        }else{
            alert("Por favor, completa todos los campos.");
        }
    });
       }else{
        console.error("No se encontró el formulario de registro.");
       }
});
