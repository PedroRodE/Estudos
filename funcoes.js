let delta = 0;

function escreve(texto) {

    console.log(texto);

    let parametro = 5;

    if(typeof(texto) == "number" && texto >= parametro) {

        console.log('Maior igual a cinco.');
    } else if (typeof(texto) == "number" && texto < parametro) {

        console.log('Menor que cinco.');
    }
}

function somatorio() {

    let soma = '2 + 1';
    return soma;
}

function avanco() {

    return delta++;
}

escreve(somatorio());
if (somatorio() > 3) {

    avanco();
    console.log(delta);
} else {

    console.log(delta);
}

//Algumas funções de matemática

console.log(Math.ceil(6.1), Math.floor(6.1), Math.round(6.1));
console.log(Math.round(Math.random() * 10)); //valor aleatório entre 0 e 10
console.log(Math.PI, Math.acos(0.5), Math.sqrt(2));
console.log(Math.pow(-2, -3));

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
    for (let i = 0; i < lista.length; i++) {
        e += '\n'+ descricao + lista[i]
    }
    return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))

function somaNova(num1, num2) {

    return num1 + num2;
}
                    //valor padrao 1
function multiplica(num1 = 1, num2 = 1) {

    return num1 * num2;
}

console.log(multiplica(somaNova(2, 3)));

//Expressão de função

const funcao = function(num1,num2) {

    return num1 + num2;
}

console.log(funcao(2,2));

//Arrow function

const outraFuncao = num1 => 'Olá mundo.'
console.log(outraFuncao());

const outroTeste = (num1, num2) => {

    if(funcao(2,2) > 2) {
        console.log(num1*num2);
    } else {
        console.log(num1/num2);
    }
}

outroTeste(2,2);