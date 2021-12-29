function imprimeNomeEmail(tipo, local) {
    console.log(`Nome: ${this.nome}; E-mail: ${this.email}; Local: ${local}; 
    Tipo: ${tipo}`);
}

const clienteUm = {
    nome: 'João',
    email: 'joao@email.com',
    imprime: imprimeNomeEmail
}
const clienteDois = {
    nome: 'Carlos',
    email: 'carlos@email.com',
    imprime: imprimeNomeEmail
}

clienteUm.imprime('vip', 'Goiânia');
clienteDois.imprime('normal', 'Brasília');

//Utilizando call() --> call(objeto, "argumentos da função", "argumentos da função", ...)

const pessoa1 = {
    nome: 'João',
    email: 'joao@email.com'
}

const pessoa2 = {
    nome: 'Carlos',
    email: 'carlos@email.com'
}

imprimeNomeEmail.call(pessoa1, 'vip', 'Goiânia');
imprimeNomeEmail.call(pessoa2, 'normal', 'Brasília');

//Utilizando apply() --> apply(objeto, ["argumento1", "argumento2" , ...])

const dados1 = ['vip', 'Goiânia'];
const dados2 = ['normal', 'Brasília'];

imprimeNomeEmail.apply(pessoa1, dados1);
imprimeNomeEmail.apply(pessoa2, dados2);

//Utilizando bind() --> bind(função)

const personagem = {
    nome: 'Goku',
    planeta: 'Vegeta',
    apresentar: function() {
        return `Nome: ${this.nome}; Planeta: ${this.planeta}`;
    }
}

const meuPersonagem = personagem.apresentar;
const meuPersonagemDefinido = meuPersonagem.bind(personagem);
console.log(meuPersonagemDefinido());
