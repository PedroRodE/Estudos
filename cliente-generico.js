function cliente(nome, cpf, email, saldo) {

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.deposito = function(valor) {
        this.saldo += valor;
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {

    cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const pedro = new clientePoupanca('Pedro', '70549442116', 
'pedroeloi07@gmail.com', 1000, 2000);

console.log(pedro);

clientePoupanca.prototype.depositoPoup = function(valor) {
    this.saldoPoup += valor;
}
pedro.depositoPoup(1000);
console.log(pedro);

console.log(Object.getOwnPropertyDescriptor(pedro, 'nome'));

