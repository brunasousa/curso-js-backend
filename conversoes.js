const numero = 10;
const nome = "Deb";
console.log(numero+nome); // Concatena

let variavelNaoDefinidada;
console.log(0 == false);
console.log("" == false);
console.log(null == false);
console.log(variavelNaoDefinidada == false)
console.log(Number("12a") == false)

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis