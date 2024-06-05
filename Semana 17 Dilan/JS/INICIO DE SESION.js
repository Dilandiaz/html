function validainputs(){
    let email=document.getElementById("email");// transfiere info de formulario a js
    let password=document.getElementById("password");
    let ingreso=document.getElementById("login");
    let emailval=email.value.trim();// eliminar espacio en ambos lados
    let passwordval=password.value.trim();
    let passwordok="a12345"; //contraseña establecida para ingreso
    var errorf=0; //variable de control de ingreso - estado apagado= no hay erro
    //seccion de variable email
    if(emailval===""){
        ocErrorform(email,"Por favor ingrese su Email...");
        errorf=1; //activa error
    }
    else if(!valEmail(emailval)){
        ocErrorform(email,"Email no valido favor corregir...");
        errorf=1; //activa error
    }
    else{
        exitosform(email); //correcto ingreso de email
    }
    //seccion de validacion password
    if(passwordval===""){
        ocErrorform(password,"Por favor ingrese su contraseña");
        errorf=1;
    }else if(passwordval !=passwordok){
        ocErrorform(password,"Contraseña incorrecta ...");
        errorf=1;
    }
    else{
        exitosform(password);
    }
    // seccion de ingreso exitoso.
    if(errorf==0){
        ingreso.addEventListener('click',function(){
            swal("ACCESO PERMITIDO A PLATAFORMA...","CLIC EN OK PARA CONTINUAR","success");
        })
    }

    return false;
// seccion de definicion de funciones error y exitos
// funcion de error *******
    function ocErrorform(input,message){
        let formControl=input.parentElement;
        let small=formControl.querySelector("small");
        formControl.className="form-control error";
        small.innerText=message;
    }
//funcion de exito
function exitosform(input){
    let formControl=input.parentElement;
    formControl.className="form-control success";
}
// EXPRESION REGULAR
function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
}
}
//seccion mostrar contraseña
function mostrarSeña(){
    var tipo=document.getElementById("password");
    if(tipo.type=="password"){
        tipo.type="text"; // para mostar contraseña ingresada
    }else{
        tipo.type="password"; // para ocultar contraseña ingresada
    }
}