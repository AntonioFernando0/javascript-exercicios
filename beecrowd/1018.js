// Valor total a ser decomposto em notas
const valorTotal = lines[0];

// Array com os valores das notas disponíveis, ordenados do maior para o menor
const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];

/**
 * Função que calcula a quantidade de uma determinada nota necessária para compor um valor
 * @param {number} valor - O valor total restante
 * @param {number} nota - O valor da nota
 * @returns {number} - A quantidade de notas necessárias
 */
function quantidadeNotas(valor, nota) {
    const quantidade = Math.floor(valor / nota); // Calcula a quantidade inteira de notas
    return quantidade; // Retorna a quantidade de notas necessárias
}

/**
 * Função que calcula a decomposição de um valor em notas
 * @param {number} valor - O valor total a ser decomposto
 * @param {Array<number>} notas - Array com os valores das notas disponíveis
 * @returns {Array<{nota: number, quantidade: number}>} - Array com a quantidade de cada nota
 */
function quantidadesPorNota(valor, notas) {
    // Usa o método `map` para calcular a quantidade de cada nota
    const listaNotas = notas.map(nota => {
        const quantidade = quantidadeNotas(valor, nota); // Calcula a quantidade da nota atual
        valor = valor - (quantidade * nota); // Atualiza o valor restante
        return { nota, quantidade }; // Retorna um objeto com a nota e a quantidade
    });

    return listaNotas; // Retorna a lista com a decomposição em notas
}

/**
 * Função que exibe o valor total e a quantidade de cada nota necessária
 * @param {number} valor - O valor total a ser decomposto
 * @param {Array<number>} notas - Array com os valores das notas disponíveis
 */
function mostrarNotasNecessarias(valor, notas) {
    // Chama a função para calcular a decomposição em notas
    const notasNecessarias = quantidadesPorNota(valor, notas);

    console.log(valor); // Exibe o valor total lido

    // Itera sobre o array de notas necessárias e exibe a quantidade de cada uma
    notasNecessarias.forEach(({ quantidade, nota }) => {
        console.log(`${quantidade} nota(s) de R$ ${nota},00`);
    });
}

// Chamada principal para exibir o resultado
mostrarNotasNecessarias(valorTotal, notasDisponiveis);