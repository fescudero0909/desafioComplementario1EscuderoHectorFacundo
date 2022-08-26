
let askAgain = true

do{
    let usuario = prompt('Ingrese nombre de usuario: ');
    let contrasena = prompt ('Ingrese contraseña: ');
    if (usuario !="" && contrasena !=""){
        alert('Bienvenido ' + usuario);
    }
    if (usuario === "" || contrasena === ""){
        alert('Uno de los campos está vacio');
    } else {
        askAgain = false
    }

} while (askAgain);


