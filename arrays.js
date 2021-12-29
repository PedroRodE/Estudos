//índices:    0   1   2   3
let notas = [10, 8.5, 6, 7.2]; //array com 4 elementos
let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(media);

////////////////////

notas.push(10); //coloca elementos na posição final do array
console.log(notas);
//shift coloca na primeira posição

notas.pop(); //retira elementos da posição final do array
console.log(notas);
//unshift retira o da primeira posição

////////////////////

let notas1 = [10, 8, 7];
let notas2 = [7, 5, 3];
let notas3 = [6, 4, 8];

let notas4 = notas1.concat(notas2, notas3); //junta dois ou mais arrays
console.log(notas4);

let alpha = ['a', 'b', 'c'];
let alpha2 = alpha.concat(1, [2, 3]); //juntando valores ao array
console.log(alpha2);

////////////////////

const funcao = (valor) => {

    return valor > 4;
}

let vetor = [10, 8, 4, 5, 7, 4, 2];

let novoVetor = vetor.filter(funcao); //filtra os elementos que obedecem a condição dentro da função
console.log(novoVetor);

////////////////////

let outroVetor = vetor.find(funcao); //filtra e retorna apenas o primeiro encontrado
console.log(outroVetor);

outroVetor = vetor.findIndex(funcao); //retorna apenas o índice
console.log(outroVetor);

outroVetor = vetor.indexOf(4); //retorna o índice da ocorrência do número
console.log(outroVetor);

outroVetor = vetor.lastIndexOf(4); //retorna o índice da última ocorrência do número
console.log(outroVetor);

////////////////////

const array1 = [1, 2, 3, 4];
const reducer = (valor1, valor2) => valor1 * valor2;

console.log(array1.reduce(reducer));

console.log(array1.reduce(reducer, 5));
//reduceRight faz a mesma coisa porém do final para o início

////////////////////

console.log(array1.reverse()); //inverte o vetor

console.log(array1.slice(1,3)); //deixa apenas da posição 2 até 3
console.log(array1.slice(-2)); //retira os dois últimos elementos do vetor

meuNome = ['Pedro', ' Eloi', ' Oliveira', ' Rodrigues'];

console.log(meuNome.slice(0, meuNome.length/2));
console.log(meuNome.slice(meuNome.length/2));

meuNome.splice(1, 2, ' Rodrigo');
console.log(`Nome: ${meuNome}`);

meuNome.splice(1, 0, ' Ronaldo');
console.log(`Nome: ${meuNome}`);


