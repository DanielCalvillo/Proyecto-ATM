function paginaOpciones(){
    window.location.href="../Opciones/opciones.html";
}

function paginaFinal(){
    window.location.href="../FinalScreen/finalScreen.html";
}

function myReset(){
    document.getElementById("myForm").reset();
}
function myConfirmar(){
   var Confirmar = document.getElementById("myForm").value;
   alert(Confirmar);
   document.getElementById("myContinuar").style.visibility = "visible";
   
}


