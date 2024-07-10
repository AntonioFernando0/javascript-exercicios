const [A, B, C] = lines[0].split(' ').map(Number) 


let Tri = ( A * C ) / 2;
let pi = 3.14159;
let Area =   pi * Math.pow(C,2);
let Trap = ( A + B ) * ( C / 2);
let Quad = Math.pow(B ,2);
let Ret = A * B;

console.log( `TRIANGULO: ${Tri.toFixed(3)}`);
console.log( `CIRCULO: ${Area.toFixed(3)}`);
console.log( `TRAPEZIO: ${Trap.toFixed(3)}`);
console.log( `QUADRADO: ${Quad.toFixed(3)}`);
console.log( `RETANGULO: ${Ret.toFixed(3)}`);