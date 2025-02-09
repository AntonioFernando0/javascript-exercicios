// São 5 competidores e 4 tipos de chá diferentes.
const cha = Number(lines[0]); // Tipo correto do chá

// Respostas dos 5 competidores
const respostas = lines[1].split(" ").map(Number);

function contarAcertos(cha, respostas) {
    return respostas.filter(resposta => resposta === cha).length;
}

// Chamando a função e exibindo o resultado
console.log(contarAcertos(cha, respostas));