function copiar(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alerta").style.display = "block";
    setTimeout(function(){
        document.getElementById("alerta").style.display = "none";
        alert(copyText);
    }, 8000);
}       