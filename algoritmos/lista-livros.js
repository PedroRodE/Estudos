function lista(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

const nomes = ['JavaScript', 'PHP', 'Java', 'Elixir', 'Go', 'Python'];
const precos = [25, 15, 30, 50, 45, 20];
const arrLivros = [];

for(let i = 0; i < nomes.length; i++) {
    let listaLivros = new lista(nomes[i], precos[i]);
    arrLivros.push(listaLivros);
}

module.exports = arrLivros;

