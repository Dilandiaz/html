let input=document.querySelector('input');//va a buscar la etiqueta html input
let content1=document.querySelector('#bgblue');
let content2=document.querySelector('#bgred');
let content3=document.querySelector('#txtwhite');
let content4=document.querySelector('#txtblack');
let content5=document.querySelector('#tm30px');
let content6=document.querySelector('#tm20px');
let content7=document.querySelector('#center');
let content8=document.querySelector('#izq');
let content9=document.querySelector('#txtsub');
let content10=document.querySelector('#tipol');
// seccion de addEventListener : disparador de eventos con click en botones
content1.addEventListener('click',function(){
    input.style.backgroundColor="blue";
});
content2.addEventListener('click',function(){
    input.style.backgroundColor="red";
});
content3.addEventListener('click',function(){
    input.style.backgroundColor="white";
});
content4.addEventListener('click',function(){
    input.style.backgroundColor="black";
});
content5.addEventListener('click',function(){
    input.style.fontSize="30px";
});
content6.addEventListener('click',function(){
    input.style.fontSize="20px";
});
content7.addEventListener('click',function(){
    input.style.textAlign="center";
});
content8.addEventListener('click',function(){
    input.style.textAlign="left";//alinear a la izquierda
});
content9.addEventListener('click',function(){
    input.style.textDecoration="underline";//subrayado a texto 
});
content10.addEventListener('click',function(){
    input.style.fontFamily="Comic sans ms";// tipo de letra
});