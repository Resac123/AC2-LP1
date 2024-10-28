let numeros = [2, 5, 8, 13, 16, 21];
let numerosImpares = [];

numeros.forEach(function(numero) {
 if (numero % 2 != 0) {
 numerosImpares.push(numero);
 }
});

console.log(numerosImpares * Math.floor(Math.random() * 10));