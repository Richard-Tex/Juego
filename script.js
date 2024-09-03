var ne=8;
function adivinar(){
    var nd=document.getElementById("barra").value;
    if(ne==nd){
        alert("GANASTE");
    }else if(ne>nd){
        alert("EL NÚMERO ES MAYOR");
    }else{
        alert("EL NÚMERO ES MENOR");
    }
}
