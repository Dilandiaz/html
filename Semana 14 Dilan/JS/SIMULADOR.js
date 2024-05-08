function calcular(){
    //proceso de transferencia del formulario al JS
    var n1=document.getElementById("valorc").value;
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //proceso calcular
    var ValorA=parseFloat(n1)*parseFloat(n3);
    var ValorB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3)));
    //proceso de transferencia del JS al formulario
    document.getElementById("valora").value=ValorA
    document.getElementById("valorb").value=ValorB.toFixed(0);
}
function limpiar(){
    document.getElementById("valorc").value=" ";//borrar dato input
    document.getElementById("numc").value=" ";//borrar dato input
    document.getElementById("interese").value=" ";//borrar dato input
}