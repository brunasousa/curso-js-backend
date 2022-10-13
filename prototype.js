/** O JS tem um 'protótipo' para todas as coisas criadas. Todos os métodos e propridades 
naturais são herdadas do protóptipo. 

Ex: array.__proto__ (Funciona apenas no navegador)

A herança de protótipo é utilizada para a criação de dados primitivos, arrays e objetos com JavaScript;

O cliente abaixo é criado por meio de um protótipo para cliente, mas também possui as propriedades 
herdadas de um Object, formando uma cadeia de protótipos.
**/ 

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const cliente = new Cliente("Bruna", "94573787395", "bruna@email.com", 1000);
console.log(cliente);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const clientePoupanca = new ClientePoupanca("Debora", "9858524488", "debora@email.com", 2000, 3000);

ClientePoupanca.prototype.depositarPoup = function (valor) { //Adição de um novo método no protótipo
    this.saldoPoup += valor;
}

clientePoupanca.depositarPoup(300);
console.log(clientePoupanca);

console.log(cliente.hasOwnProperty("saldoPoup"))
console.log(clientePoupanca.hasOwnProperty("saldoPoup"))
console.log(cliente instanceof Cliente)
console.log(typeof cliente)
console.log(typeof clientePoupanca)
console.log(typeof ClientePoupanca)
console.log(clientePoupanca instanceof Cliente)
console.log(clientePoupanca instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)
