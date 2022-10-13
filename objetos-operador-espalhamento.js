const clientes = [
    {
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
  },
  {
    nome: 'Maria',
    idade: 49,
    cpf: '54644646446',
    fones: [ '8457367465', '944646446464' ],
    dependentes: [
      { 
        nome: 'Flavio', 
        parantesco: 'Marido', 
        dataNacimento: '25-25-1969' }
    ]
  }
];

const dependentes1 = [...clientes[0].dependentes, ...clientes[1].dependentes];
console.table(dependentes1);

let dependentes = [];
clientes.forEach((_, index) => {
    dependentes.push(...clientes[index].dependentes);
})

console.table(dependentes);