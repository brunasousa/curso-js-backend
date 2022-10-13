const cliente = {
    nome: "Bruna",
    idade: 30,
    cpf: "54644646446"
}

const chaves = ["nome", "idade", "cpf"];

console.log(cliente[chaves[0]]); //Notação de colchetes
chaves.forEach( chave => console.log(cliente[chave]) ); //Notação de colchetes

console.log(cliente.nome); // Notação de ponto

// Adicionando campos

cliente.fone = "985857562";
console.log(cliente);

cliente.fone = "9985857562"; // Substitui o valor anterior
console.log(cliente);

// Deletando campos

const delProp = delete cliente.fone; // Substitui o valor anterior
const delProp2 = delete cliente["fone"]; //Também dá certo assim, mas retora false pq a propriedade já havia sido removida
console.log(cliente);

// Adicionando mais de um valor para a mesma chave
const telefones = ["8457367465", "944646446464"];
cliente.fones = telefones;
console.log(cliente);

// Compondo objetos

cliente.dependentes = {
    nome: "Debora",
    parantesco: "Irmã",
    dataNacimento: "23-09-1989"
}

console.log(cliente);

// Lista de objetos
const dependente1 = cliente.dependentes;
cliente.dependentes = [dependente1];
cliente.dependentes.push({
    nome: "Brendo",
    parantesco: "Irmão",
    dataNacimento: "10-09-1995"
});

console.log(cliente);