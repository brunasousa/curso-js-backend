class Cliente {
    constructor (nome, email, cpf, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar (valor) {
        this.saldo += valor;
    }

    exibirSaldo () {
        console.log(this.saldo);
    }
}


class ClientePoupanca extends Cliente {
    constructor (nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    
    depositarPoupanca (valor) {
        this.saldoPoupanca += valor
    }
}

const andre = new Cliente("Andre", "andre@email.com", "54987879879", 150);
console.log(andre);
andre.exibirSaldo();

const juliana = new ClientePoupanca("Juliana", "ju@email.com", "54987879879", 300, 100);
console.log(juliana);