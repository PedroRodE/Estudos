const nomes = ['Ana', 'Pedro', 'José'];
const idades = [10, 9, 11];

const nomesIdades = [nomes, idades];
console.log(`${nomesIdades[0][1]}, sua idade é ${nomesIdades[1][1]}`);

// Ana(0,0) Pedro(0,1) José(0,2)
//  10(1,0)   9(1,1)    11(1,2)

//EXEMPLO

const alunos = ['José', 'Pedro', 'Antônio', 'Ana'];
const notas = [7.5, 10, 6.5, 9];

const listaDeAlunosNotas = [alunos, notas];

const exibeNomeNota = (nomeDoAluno) => {

    if(listaDeAlunosNotas[0].includes(nomeDoAluno)) {

        let indice = listaDeAlunosNotas[0].indexOf(nomeDoAluno);
        return listaDeAlunosNotas[0][indice] + ', sua nota é ' + listaDeAlunosNotas[1][indice];
    } else {

        return 'Aluno não encontrado.';
    }
}

console.log(exibeNomeNota('Pedro'));