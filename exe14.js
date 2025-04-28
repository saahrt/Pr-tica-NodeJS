// 14 - Calcule a média de uma quantidade indefinida de números, parando com 0

const prompt = require('prompt-sync')();

let soma = 0;  // Para armazenar a soma dos números
let contador = 0;  // Para contar quantos números foram fornecidos

while (true) {  // O laço continua até o número 0 ser inserido
    const num = parseFloat(prompt('Digite um número (0 para parar): '));  // Captura a entrada do usuário
    
    if (num === 0) {
        break;  // Interrompe o laço se o usuário digitar 0
    }
    
    soma += num;  // Soma o número à variável soma
    contador++;  // Incrementa o contador
}

if (contador > 0) {
    const media = soma / contador;  // Calcula a média
    console.log(`A média dos números digitados é: ${media}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}