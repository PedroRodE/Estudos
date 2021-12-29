const cliente = {

    nome: 'Pedro Eloi de Oliveira Rodrigues',
    idade: 23,
    CPF: '70549542116',
    email: 'pedroeloi07@gmail.com',
    fones: ['62982069480', '6232876446'],
    faculdade: {
        curso: 'Engenharia Mecânica',
        projetoExtensao: 'Formula SAE',
        experiencia: 'Dinâmica dos Fluidos Computacional (CFD)',
        periodo: 10
    },
    saldo: 100,
    deposito: function (valor) {

        this.saldo += valor;
    },
    gostos: ['Animes'],
    acrescimo: function(gosto, tipo) {

        this[gosto].push(tipo);
    } 
}

//console.log(cliente);

cliente.programacao = [{

    nivel: 'Intermediario',
    linguagem: 'Fortran 90',
    instituicao: 'UFG'
}]
cliente.programacao.push({

    nivel: 'Intermediario',
    linguagem: 'JavaScript',
    instituicao: 'Alura'
})

cliente.faculdade.instituicao = 'Universidade Federal de Goiás';
cliente.fones.forEach(fone => console.log(fone));

console.log(cliente);
const linguagemPrograma = cliente.programacao.filter(dado => dado.linguagem === 'JavaScript');

console.log(linguagemPrograma[0].linguagem);
console.log(linguagemPrograma);

console.log(cliente.saldo);
cliente.deposito(100);
console.log(cliente.saldo);

for (let i = 0; i < 4; i++) {

    cliente.acrescimo('gostos', 'Gosto' + (i+2));
}

console.log(cliente);