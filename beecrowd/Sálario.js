var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])

let Fun = A
let Sal = B * C 
let cel = Sal.toLocaleString('pt-br',{style: 'currency', currency: 'USD'});

console.log(`NUMBER = ${Fun}`)
console.log(`SALARY = U$ ${Sal.toFixed(2)}`)