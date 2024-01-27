/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"  */
let alfabeto = "abcdefghijklmnñopqrstuvwxyz ";
let vocales = "aeiou";
let conversion = ["ai","enter","imes","ober","ufat"];

function encriptar(){

let inputStr = document.getElementById("Ingresar").value;
let contador = 0;
let contenedor = [];
let resultado = "";

//Limpiar el text area del copiado cuando marca alerta
//COMPROBACION DE CARACTERES

if (inputStr.trim() == "") {
  return alert("Ingresa algo");
} else {
  for (let i = 0; i < inputStr.length; i++) {
      if (alfabeto.includes(inputStr[i])) {
          contador = contador + 1;
          if (contador == inputStr.length) {
              console.log("Ya está encriptado");
          }
      } else {
          document.getElementById("Cifrar").value = "";
          return alert("CARACTER INVALIDO");
      }
  }
}

console.log(inputStr);
//ENCRIPTACION

for(let j = 0; j<inputStr.length; j++){

  contenedor.push(inputStr[j]);        
}

for(let k = 0; k<contenedor.length; k++){

    
if(vocales[0] == contenedor[k]){   

  contenedor[k] = conversion[0];

} else if(vocales[1] == contenedor[k]){
  
  contenedor[k] = conversion[1];  
  
}
else if(vocales[2] == contenedor[k]){

  contenedor[k] = conversion[2];

}
else if(vocales[3] == contenedor[k]){

  contenedor[k] = conversion[3];

}
else if(vocales[4] == contenedor[k]){

  contenedor[k] = conversion[4];

}

}

resultado = contenedor.join('');
console.log(resultado);
return document.getElementById("Cifrar").value = resultado;

}

function desencriptar(){

let inputStr1 = document.getElementById("Ingresar").value;
let contador = 0;
let resultado = "";

//Limpiar el text area cuando la alerta se activa
//COMPROBACION DE CARACTERES

if(inputStr1.trim() == ""){
  
return alert("Ingresa algo");

}else{
for(let i = 0; i<inputStr1.length; i++){ 

if(alfabeto.includes(inputStr1[i])){

contador = contador + 1;
if(contador == inputStr1.length){
console.log("Good");
}
} else{
document.getElementById("Cifrar").value = "";
return alert("CARACTER INVALIDO");

}  
}
} 
//DESENCRIPTACION

if(inputStr1.includes(conversion[0])){    

inputStr1 = inputStr1.replace(/ai/g, vocales[0]);   
} 
if(inputStr1.includes(conversion[1])){

inputStr1 = inputStr1.replace(/enter/g, vocales[1]);
}
if(inputStr1.includes(conversion[2])){

inputStr1 = inputStr1.replace(/imes/g, vocales[2]);
}
if(inputStr1.includes(conversion[3])){

inputStr1 = inputStr1.replace(/ober/g, vocales[3]);
}
if(inputStr1.includes(conversion[4])){

inputStr1 = inputStr1.replace(/ufat/g, vocales[4]);
}

//Resultado de la desencriptacion
//Si arroja el mismo input quiere decir que el texto ya esta desencriptado 
resultado = inputStr1;
console.log(resultado);
return document.getElementById("Cifrar").value = resultado;


}

function copiar() {

// Obtener el elemento y texto del textarea
let inputText = document.getElementById("Cifrar").value;

// Utilizar el API Clipboard para copiar al portapapeles
navigator.clipboard.writeText(inputText).then(function() {
    console.log("Texto copiado al portapapeles: " + inputText);
}).catch(function(err) {
    console.error("Error al copiar al portapapeles: ", err);
});
}

