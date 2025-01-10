





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

    function Verifica (valor1, valor2) {

        
            }
    
   

    // Atualiza o resultado
    document.getElementById('result').textContent = `Meu nome é: ${nome}, A soma dos valores é: ${soma}, A média dos valores é: ${media}, O maior número é ${maiorQue}`;
});



/*Exemplos de funções*/

function dizerOla() {
    console.log("Olá, mundo")
}

/*Funções com parametros*/ 

function cumprimentar(nome) {
    console.log("Olá, " + nome + "!")
}

cumprimentar ("Ana")

// Arrays

let frutas = ["maça", "banana", "manga"];

console.log(frutas[0])
console.log(frutas[1])


// Criando um objeto 

let pessoa = {
    nome: "Fernando",
    idade: 25,
    cidade: "São Paulo"
}

console.log(pessoa.cidade);

let livros = {

    nome: "Ato atômicos",
    paginas: 390,
    autor: "Eder Machado"
}
console.log(livros.nome)

let idade = 20 


    
function saberIdade (idade) {  if (idade > 18) {
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }

}
saberIdade(idade);

for (let i = 1; i <= 20; i++){
    if (i % 2  !== 0) {
        console.log(i)
    }
}

for (let V = 0; V <= 10; V++) {
    if (V + 2 == 4) {
        console.log("A condição é verdadeira! V =", V);
    }
}

let carros = {

    nome: "FORD",
    modelo: "RANGER",
    ano: 2025
}

console.log(`Nome: ${carros.nome}, Modelo: ${carros.modelo}, Ano: ${carros.ano}`);

let pessoas = {
    nome: "Junior",
    idade: 25,
    endereco: {
        rua: "Rua Prado",
        bairro: "Urbis",
        caminho: 7

    }
}

console.log(pessoas.endereco.rua)
console.log(pessoas.endereco.bairro)
console.log(pessoas.endereco.caminho)

for (let idade = 18; idade <= 28; idade++) {
    console.log(idade);
}

let a = 200
let b = 100

const soma = a + b;
const div = a / b;
const sub = a - b;

console.log(soma)
console.log(div)
console.log(sub)

 
