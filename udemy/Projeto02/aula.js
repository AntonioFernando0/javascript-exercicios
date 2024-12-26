





document.getElementById('calculaBtn').addEventListener('click', function() {
    // Captura os valores dos inputs
    const valor1 = parseFloat(document.getElementById('input1').value);
    const valor2 = parseFloat(document.getElementById('input2').value);

    // Verifica se os valores são válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('result').textContent = "Por favor, insira valores válidos!";
        return;
    }

    // Realiza uma operação simples (soma neste caso)
    const soma = valor1 + valor2;
    const media = soma / 2;
    const maiorQue =  Math.max(valor1, valor2)
    const nome = document.getElementById('nome').value;
    
   

    // Atualiza o resultado
    document.getElementById('result').textContent = `Meu nome é: ${nome}, A soma dos valores é: ${soma}, A média dos valores é: ${media}, O maior número é ${maiorQue}`;
});