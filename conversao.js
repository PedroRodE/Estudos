const numero1 = 23;
const numero2 = '23';
const booleano = false;
const booleano2 = true;

console.log(numero1 === Number(numero2));
console.log(Number(numero2) + 2);
console.log(String(numero1) + 2);
console.log(Number(booleano) + ' e ' + Number(booleano2));

//Outra forma de converter número para string

console.log(booleano.toString());

//Outra forma de converter string para número

console.log(+ numero2 * numero1);

//Tipos de variáveis: var, let e const

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

//Novo bloco ou escopo
{
    var respostaDeTudo = 3.14 //pode ser reatribuido independente do bloco
    let idade = 42 //pode ser reatribuido em blocos diferentes
    const pi = 29
    console.log(respostaDeTudo, idade, pi)
}
console.log(respostaDeTudo, idade, pi)

console.log(typeof(idade));
if(typeof(idade) == "number") {
    console.log('Verdadeiro');
}
