class Cliente {
    nome;
    saldo;

    setNome(nome) {
        this.nome = nome;
    }
        
    depositar (valor) {
        this.saldo += valor;
    }

    exibirSaldo () {
        console.log(this.saldo);
    }
}

const andre = Cliente;
const objAndre = new andre();
console.log(objAndre);
objAndre.exibirSaldo();