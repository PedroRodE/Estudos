class Clientes {
    constructor (cliente, cpf, email, saldo, dependente) {
        this.cliente = cliente;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
        this.dependente = dependente || [];
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }

    adicionarDependente(pessoa) {
        this.dependente.push(pessoa);
    }
}

const Pedro = new Clientes('Pedro', '70549542116', 
'pedroeloi07@gmail.com', 100);

Pedro.depositar(200);
Pedro.exibirSaldo();

Pedro.adicionarDependente('Carlos');
console.log(Pedro);

class ClientePoupanca extends Clientes {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        super(nome, email, cpf, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarPoupanca(valor) {
        this.saldoPoup += valor;
    }
}

const luffy = new ClientePoupanca('Luffy', '37491628912', 'reidospiratas@email.com',
100, 200);
console.log(luffy);

luffy.depositar(100);
luffy.depositarPoupanca(200);
console.log(luffy);