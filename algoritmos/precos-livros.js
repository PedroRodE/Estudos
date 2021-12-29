function menorValor(arrLivros, posicaoInicial) {
    let menorPreco = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrLivros.length; atual++) {
        if(arrLivros[atual].preco < arrLivros[menorPreco].preco) {
            menorPreco = atual;
        } 
    }
    return menorPreco;
}

module.exports = menorValor;



