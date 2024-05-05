function ocultar(){
    if(document.getElementById("deshabilitar").checked == true){
        var gustos = document.getElementById("gustos");
        gustos.style.display = 'none';
}
}

function mostrar(){
    var gustos = document.getElementById("gustos");
        gustos.style.display = 'block';
}

function validar(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var direccion = document.getElementById("address").value;
    var cc = document.getElementById("document").value;
    var password = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;

    validarNombre(nombre, "Nombres");
    validarNombre(apellido, "Apellidos");validarDireccion(direccion, 5, 50, "dirección");validarCampos(cc, 10, 20,"cédula"); validarPassword(password, 8, 15, "contraseña");validarCampos(email, 20, 120, "correo"); validarCampos(telefono, 10, 20, "teléfono");
    
}

function validarNombre(texto, campo){
    return validarCampos(texto, 0, 25, campo);
}

function validarDireccion(direccion, min, max, nombreCampo){
    if(validarCampos(direccion, min, max, nombreCampo)){

    direccion = direccion.replace(" ","");
    var opciones = ["cll","cra","av","anv","trans"]
    var bandera = false;
    
    for(i=0; i< opciones.length; i++){
        if(direccion.startsWith(opciones[i])){
             bandera = true;
        }
    }

    if(!bandera){
        alert(`El campo ${nombreCampo} no cumple con los requisitos. Debe iniciar por alguna de las siguientes combinaciones : cll, cra, av, trans, anv`);
    
    }
    return bandera;
}
}

function validarCampos(campo, min, max, nombreCampo){
    if(campo == null || campo == ""){
        alert(`El campo ${nombreCampo} no puede estar vacio.`)
        return false;
    }else{
        var longitud = campo.length;

        if(longitud < min || longitud > max){
            alert(`El campo ${nombreCampo} debe tener una longitud de entre ${min} y ${max} caracteres.`)
            return false;
        }else{
            return true;
        }
    }
    
}

function validarPassword(password, min, max, nombreCampo){
    if(validarCampos(password, min, max, nombreCampo)){
        if(!verificarRequisitos(password)){
            alert("La contraseña debe contener al menos una Mayuscula, una minuscula, un número y un caracter especial, además de un longitud minima de 8 caracteres.")
            return false;
        }else{
            return true;
        }
    }
    
}

function verificarRequisitos(texto) {
    // Expresiones regulares para verificar los requisitos
    var tieneMayuscula = /[A-Z]/.test(texto);
    var tieneMinuscula = /[a-z]/.test(texto);
    var tieneNumero = /[0-9]/.test(texto);
    var tieneCaracterEspecial = /[^A-Za-z0-9]/.test(texto);

    // Verificar si se cumplen todos los requisitos
    return tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial;
}

