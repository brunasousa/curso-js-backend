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

  let relatorio = "";

  for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue;
    } else {
        relatorio += `${info}:  ${cliente[info]}
`
    }
  }

  console.log(relatorio);


  function oferecerSeguro(obj) {
    const keys = Object.keys(obj); //Array de chaves do obj
    if(keys.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
  }

  oferecerSeguro(cliente);

  console.log(Object.values(cliente)); //Valores do objeto
  console.log(Object.entries(cliente)); //Objeto em formato de array