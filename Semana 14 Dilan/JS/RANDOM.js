function apostar(){
    let b=101;//numero para ingreso de ciclo
    let intentos=0;//contador
    var a=Math.round(Math.random()*100);//genera numero al azar del 1 al 100
    //cicle while
    while(a!=b){
        b=parseInt(prompt("INGRESE NUMERO APOSTADO AL AZAR"));
        //CONDICIONAL
        if(b>a){
            alert("VALOR ES MAS BAJO");
        }else{
            alert("VALOR ES MAS ALTO");
        }
        intentos++;
    }
document.getElementById("apostado").value=b;
document.getElementById("resultado").value=a;
swal("FELICITACIONES USUARIO","HAS ACERTADO NUMERO EXITOSAMENTE..","success");
document.getElementById("salida").value="HAS ACERTADO NUMERO A LOS.."+intentos+"..intentos";
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}