const cliente = {
    nome: 'Bruna',
    idade: 30,
    cpf: '54644646446',
    fones: [ '8457367465', '944646446464' ],
    dependentes: [
      { 
        nome: 'Debora', 
        parantesco: 'Irmã', 
        dataNacimento: '23-09-1989' },
      {
        nome: 'Brendo',
        parantesco: 'Irmão',
        dataNacimento: '10-09-1995'
      }
    ],
    saldo: 100,
    depositar: function (valor) { // Não pode se arrow function 
        this.saldo += valor;
    }
  };

  console.log(cliente.saldo);
  cliente.depositar(30);
  console.log(cliente.saldo);