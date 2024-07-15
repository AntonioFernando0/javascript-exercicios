var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



 const consumoMedio = (distancia, combustivel) => distancia / combustivel

    const resultado = consumoMedio(...lines)

    console.log (`${resultado.toFixed(3)} km/l`)