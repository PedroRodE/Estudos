//Usando o forEach

const array1 = [1, 2, 3, 4, 5];
let valor = 0;

array1.forEach(numero => {
    valor = valor + numero + 1;
});

console.log(valor);

//Usando o map

const array2 = [3, 4, 2, 5, 10];

let array2Atualizado = array2.map(numero => numero < 10 ? ++numero : numero);
console.log(array2Atualizado);

const nomes = ['Pedro eloi', 'josé SIlva', 'CARLos Antonio'];

let nomesAtualizados = nomes.map(nome => nome.toUpperCase());
console.log(nomesAtualizados);

//métodos de String

const nome = 'Pedro Eloi';

let nomeM = nome.toUpperCase();
console.log(nomeM);

const nomeAlura = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nomeAlura.length; i++) {
 nomeMaiusculas += nomeAlura[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

let indice = nomeAlura.charAt(1); //retorna o caracter da posição 1 da string
console.log(indice);

//EXEMPLOS: reprovados

const alunos = ['Pedro', 'João', 'Marcos', 'José'];
const notasAlunos = [10, 6, 5.5, 7.2];

const reprovados = alunos.filter((_, indice) => notasAlunos[indice] < 6);
console.log(`Lista de reprovados: ${reprovados}`);

const aprovados = alunos.filter((_, indice) => notasAlunos[indice] >= 6);
console.log(`Lista de aprovados: ${aprovados}`);

const alunosJ = alunos.filter(aluno => aluno.charAt(0) == 'J');
console.log(`Alunos com inicial J: ${alunosJ}`);

//EXEMPLOS: reduce()

const notas1 = [10, 8, 7.5, 6], notas2 = [6, 6.3, 9.5, 10];

function calculaMedia(notas) {

    const media = notas.reduce((acum, atual) => atual + acum, 0)/notas.length;
    return media;
}

console.log(calculaMedia(notas1), calculaMedia(notas2));

