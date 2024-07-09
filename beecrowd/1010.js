// Define um espaço em branco como delimitador
const space = ' '

// Desestrutura a primeira linha de entrada, dividindo-a pelo espaço em branco
// e atribui os valores a codigo1, qtd1 e valor1
const [codigo1, qtd1, valor1] = lines[0].split(space)

// Desestrutura a segunda linha de entrada, dividindo-a pelo espaço em branco
// e atribui os valores a codigo2, qtd2 e valor2
const [codigo2, qtd2, valor2] = lines[1].split(space)

// Converte as quantidades e valores unitários de string para número
// Calcula o valor total a ser pago pelas peças somando os produtos
// das quantidades pelo valor unitário de cada peça
const valorPago = (Number(qtd1) * Number(valor1)) + (Number(qtd2) * Number(valor2))

// Imprime o valor total a ser pago, formatando o resultado com duas casas decimais
console.log(`VALOR A PAGAR: R$ ${valorPago.toFixed(2)}`) 