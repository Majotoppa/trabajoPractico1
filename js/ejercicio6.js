//Escribe un programa que pida dos números 
//escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

if(numero1 > numero2){
    document.write("EL primer numero es el mas grande" + numero1)

}else{
    if(numero1 == numero2) { 
    document.write("los numeros son iguales" + numero2)
 }else{
    document.write("EL segundo numero es el mas grande" + numero2)
 }
}
