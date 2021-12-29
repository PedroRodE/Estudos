const trocaLugar = require('./troca');
const troca = require('./troca');

const nomes = ['JavaScript', 'PHP', 'Java', 'Elixir', 'Go', 'Python'];
console.log(nomes);

function ordenaLista(lista) {
    for(let atual = 0; atual < lista.length; atual++) {
        let posAtual = atual;
        while(posAtual > 0 && lista[posAtual] < lista[posAtual - 1]) {
            trocaLugar(lista, posAtual);
            posAtual--
        }
    }
    console.log(lista);
}

ordenaLista(nomes);