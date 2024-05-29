function mostrar(){
    let r,r1,r2,r3;
    let cant=0;
    if(document.getElementById('len01').checked){
        r="Javascript";
        cant++;
    }else{
        r=" ";
    }
    if(document.getElementById('len02').checked){
        r1="Python";
        cant++;
    }else{
        r1=" ";
    }
    if(document.getElementById('len03').checked){
        r2="PHP";
        cant++;
    }else{
        r2=" ";
    }
    if(document.getElementById('len04').checked){
        r3="C#";
        cant++;
    }else{
        r3=" ";
    }
    document.getElementById('resp').value=r+" "+r1+" "+r2+" "+r3;
    alert("CANTIDAD DE LENGUAJES SELECCIONADOS ES ..."+cant);
    }