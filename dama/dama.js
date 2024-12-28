let jogador1 = "X";
let jogador2 = "O";

let matriz = [
    ["", "", ""], // Linha 1
    ["", "", ""], // Linha 2
    ["", "", ""]  // Linha 3
];


function verificarVitoria(matriz) {
    for (let i = 0; i < 3; i++) {
        
        if (matriz[i][0] !== "" && matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2]) {
            return true;
        }
     
        if (matriz[0][i] !== "" && matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i]) {
            return true;
        }
    }

    if (matriz[0][0] !== "" && matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]) {
        return true;
    }
    if (matriz[0][2] !== "" && matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]) {
        return true;
    }

    return false;
}

function jogar(matriz, linha, coluna, jogador) {
    if (matriz[linha][coluna] === "") {
        matriz[linha][coluna] = jogador;
        return true;
    } else {
        console.log("Posição ocupada!");
        return false;
    }
}

for (let verificar = 0; verificar < 9; verificar++) {
   
    console.log("Jogada número:", verificar + 1);
}

console.log(matriz);


console.log("Posição [0][1]:", matriz[0][1]);
