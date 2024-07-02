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
let D = parseFloat(lines[3])

let Diferenca = ((A*B) - (C*D) )

console.log(`DIFERENCA = ${Diferenca}`)