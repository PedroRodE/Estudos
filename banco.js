const carlos = {

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
    ],
    saldo: 3000,
    deposito: function(valor) {

        this.saldo += valor;
    }
}

let relatorio = '';
for (let chave in carlos) {

    if(typeof carlos[chave] === 'object' || typeof carlos[chave] === 'function') {
        continue;
    } else {
        relatorio += `
        ${chave} - ${carlos[chave]}
        `;
    }
}
console.log(relatorio);

const seguro = function(cliente) {

    const proposta = Object.keys(cliente); //Object.values e Object.entries
    if(proposta.includes('dependentes')) {
        console.log(`Oferta de seguros disponível para ${cliente.nome}!`);
    }    
}

seguro(carlos);