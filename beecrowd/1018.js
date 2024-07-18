const valorTotal = parseInt(lines[0], 10); // Substitua 'lines[0]' pela leitura da entrada conforme necessário

const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];

function quantidadeNotas(valor, nota) {
    const quantidade = Math.floor(valor / nota);
    return quantidade;
}

function quantidadesPorNota(valor, notas) {
    return notas.map(nota => {
        const quantidade = quantidadeNotas(valor, nota);
        valor -= quantidade * nota;
        return { nota, quantidade };
    });
}

function mostrarNotasNecessarias(valor, notas) {
    console.log(valor); // Imprime o valor lido
    const notasNecessarias = quantidadesPorNota(valor, notas);

    notasNecessarias.forEach(({ quantidade, nota }) => {
        console.log(`${quantidade} nota(s) de R$ ${nota},00`);
    });
}

// Executar a função com o valor lido e as notas disponíveis
mostrarNotasNecessarias(valorTotal, notasDisponiveis);