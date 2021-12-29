const livros = require('./lista-livros');
const menorValor = require('./precos-livros');

for(let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenor = livros[menor];

    livros[atual] = livroMenor;
    livros[menor] = livroAtual;
}
console.log(livros);

//Usando forEach()
livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
console.log(livros)

//Usando for of
for (const [indice,_] of livros.entries()) {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
}

console.log(livros);

const array = [4, 0, 3, 2, 7, 5, 9, 1];
console.log(array.sort());

const arrayLetras = ['c', 'a', 'b', 2, 'd'];
console.log(arrayLetras.sort());


