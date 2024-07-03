let nomeVendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());

if (isNaN(salarioFixo) || isNaN(totalVendas)) {
    console.log("Erro: Por favor, insira valores numéricos válidos para o salário fixo e o total de vendas.");
} else {
    let comissao = totalVendas * 0.15;
    let totalReceber = salarioFixo + comissao;
    console.log(`TOTAL = R$ ${totalReceber.toFixed(2)}`);
}