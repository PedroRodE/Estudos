function trocaLugar(array, posAtual) {
    let nomeAtual = array[posAtual];
    let nomeAnterior = array[posAtual - 1];

    array[posAtual] = nomeAnterior;
    array[posAtual - 1] = nomeAtual;
}

module.exports = trocaLugar;