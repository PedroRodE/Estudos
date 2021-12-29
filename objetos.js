const cliente = {

    nome: 'Pedro',
    idade: 23,
    CPF: '70549542116',
    email: 'pedroeloi07@gmail.com'
}

console.log(cliente.nome.toUpperCase());

//Exibindo apenas os 3 primeiros digitos do CPF

console.log(cliente.CPF.substring(0,3));
console.log(cliente.CPF.slice(0,3)); //diferenças sutis com o substring

const personagem = {

    nome: 'Luffy',
    idade: 19,
    ocupacao: 'Pirata',
    objetivo: 'Ser o rei dos piratas',
    akumaNoMi: 'Gomu Gomu no Mi',
    alcunha: 'Luffy do chapéu de palha'
}

console.log(personagem['nome']); //notação com colchetes
console.log(personagem);

delete personagem.alcunha; //delete personagem['alcunha'];
personagem.bando = 'Chapéus de Palha';

console.log(personagem);

const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 pessoa.seguroSocial = '8451265-8';
 pessoa['cpf'] = '458496426-18'; //notação com colchetes
 console.log(pessoa);

 chaves = ['nome', 'dataNascimento', 'carteiraIdentidade',
  'email', 'telefone', 'cidade', 'estado', 'seguroSocial',
  'cpf'];
  console.log(pessoa[chaves[0]]);
  
  chaves.forEach(item => {
      if (item == 'cpf') {
          console.log(pessoa.cpf.substring(0,3));
      } else if (item == 'seguroSocial') {
          console.log(pessoa.seguroSocial.substring(0,3));
      } else {
        console.log(pessoa[item]);
      }
  });