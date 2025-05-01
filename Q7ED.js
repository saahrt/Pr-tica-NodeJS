// Questão 07
// Valor: 1,5

// ENADE – 2017 - TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS - ADAPTADA
// Uma mercearia deseja controlar o estoque dos produtos: arroz, feijão, óleo, açúcar e café. Cada produto possui um código numérico e está armazenado em um vetor. 

// Nessa situação e considerando o desenvolvimento de um sistema para gerenciar a organização dos produtos, estabeleceu a declaração dos seguintes variáveis:
// Var
//    produtos: vetor [1..5] de texto = {"arroz", "feijão", "óleo", "açúcar", "café"}
//    estoque: vetor [1..5] de inteiro
//    i: inteiro

// Com base nessa declaração e considerando a codificação dos produtos exposta, faça o que se pede nos itens a seguir, apresentando as soluções em pseudocódigo ou em linguagem de programação:
// a) Escreva um trecho de código para ler o estoque dos produtos e armazená-los no vetor estoque. 
// b) Escreva o trecho de código que solicite o código do produto, sendo: 0 – Arroz, 1 – Feijão, 2 – Oléo, 3 – Açúcar, 4 – Café, o tipo de movimentação(entrada ou saída) e por fim a quantidade. Atualize o estoque do produto conforme a operação (entrada aumenta o estoque, saída diminui). 


const prompt = require('prompt-sync')();

const produtos = ["arroz", "feijão", "óleo", "açúcar", "café"];
let estoque = [];

console.log("----------------------");
console.log("-CADASTRO DE PRODUTOS-");
console.log("----------------------");

for (let i = 0; i < produtos.length; i++){
    let quantidade = parseInt(prompt(`Insira a quantidade de ${produtos[i]}: `));
    estoque.push(quantidade);
}

console.log("--------------------");
console.log("-CODIGO DE PRODUTOS-");
console.log("--------------------");

console.log("0 – Arroz, 1 – Feijão, 2 – Oléo, 3 – Açúcar, 4 – Café");
let codigo = parseInt(prompt("Insira o número do código do produto:"));

if (codigo < 0 || codigo >= produtos.length){
    console.log("CÓDIGO INVÁLIDO");
} else {
    let tipo = prompt("Informe o tipo de movimentação (entrada/saida): ").toLowerCase();
    let quantidade = parseInt(prompt("Informe a quantidade: "));
    if (tipo === "entrada"){
        estoque[codigo] += quantidade;
        console.log(`ENTRADA REALIZADA\n Novo estoque de ${produtos[codigo]}: ${estoque[codigo]}`);
    } else if (tipo === "saida"){
        if (quantidade > estoque[codigo]) {
            console.log("ERROR: saída maior que produtos disponíveis");
        } else{
            estoque -= quantidade;
            console.log(`SAIDA REALIZADA\n Novo estoque de ${produtos[codigo]}: ${estoque[codigo]}`);
        }
    } else {
         console.log("Tipo de MOVIMENTAÇÃO inválido");
    }
} 

