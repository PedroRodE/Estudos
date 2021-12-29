function classe(aluno) {

    this.aluno = aluno || []; //aluno é um array
}

function novaClasse() {
    classe.call(this);
}

classe.prototype = {
    adicionar: function(nome) {
        this.aluno.push(nome);
    },
    mostrar: function() {
        return this.aluno;
    }
}

novaClasse.prototype = Object.create(classe.prototype);

const pedro = new classe('Pedro');
console.log(pedro.aluno);

const novosAlunos = new novaClasse();
novosAlunos.adicionar('Joaquim');
console.log(novosAlunos.mostrar());
novosAlunos.adicionar('Carlos');
console.log(novosAlunos.mostrar());
