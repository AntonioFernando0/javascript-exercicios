var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')


let A = parseFloat(lines[0])
let B = parseFloat(lines[1])

let Soma = A + B

console.log(`SOMA = ${Soma}`)