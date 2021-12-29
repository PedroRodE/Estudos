const numeros = [1, 2, 3, 4, 5, 6];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    
    soma += numeros[i];
}

let media = soma/numeros.length;
console.log(media);

//Usando forEach

soma = 0;

numeros.forEach(nota => {

    soma += nota;
})

/* 
numeros.forEach(function(nota){

    soma += nota;
})
*/

media = soma/numeros.length;
console.log(media);