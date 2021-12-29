const clientes = [{

    nome: 'Carlos Ferreira dos Santos',
    idade: 42,
    cpf: '34513679814',
    email: 'carlos123@email.com',
    fones: ['6232876589', '6282567490'],
    dependentes: [
        {
            nome: 'Carlos Junior Ferreira Melo',
            parentesco: 'Filho',
            dataNasc: '24/06/2012' },
        {
            nome: 'Ana Clara Ferreira Melo',
            parentesco: 'Filha',
            dataNasc: '31/08/2018'
        }
    ] },
{
    nome: 'Júlio da Silva Amorim',
    idade: 42,
    cpf: '82313689517',
    email: 'julio321@email.com',
    fones: ['6232878743', '6281453290'],
    dependentes: [
        {
            nome: 'Jéssica da Silva Amorim',
            parentesco: 'Filha',
            dataNasc: '16/02/2015' },
    ]
}];

function dependentesClientes(cliente) {

    const dpts = [];
    for(let i = 0; i < cliente.length; i++) {

        dpts.push(...cliente[i].dependentes);
    }
    console.table(dpts);
    console.log(dpts);
}

dependentesClientes(clientes);

const [num1, num2, ...num3] = [1, 2, 3, 4, 5];
console.log(num1, num2, num3);

const pares = [0, 2, 4, 6, 8];
const impares = [1, 3, 5, 7, 9];
const numeros = [...pares, ...impares];
console.log(numeros);

let {nome} = clientes[0]; // nome = clientes[0].nome
console.log(nome);

function imprimeDados(dado) {

    let {nome, idade} = dado;
    console.log(nome, idade);
}

imprimeDados(clientes[0]);

function imprimeDados2({nome, idade}) { //outra forma de fazer

    console.log(nome, idade);
}

imprimeDados2(clientes[0]);

//Outro exemplo

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(guerreiro);
