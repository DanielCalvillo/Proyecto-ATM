var userNip = null;
var validNip = 2435;
var validador = false
document.getElementById("inputNip").value = userNip;

    function actualizarNip() {   
        userNip = document.getElementById("inputNip").value;
    }
    // Renderizado condicional del botón continuar
//bug de validación 
function logUser(){
    userNip = parseInt(userNip);
    console.log(userNip)
    if(userNip === validNip) {
        alert("Logeado con éxito")
        window.location.href="../Opciones/opciones.html";
    } else if (!(userNip === validNip)){
        alert("tu nip no es valido")
    }
}

function paginaFinal(){
    window.location.href="../FinalScreen/finalScreen.html";
}
