// 14 - Calcule a média de uma quantidade indefinida de números, parando com 0

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;

while (true) { 
    const num = parseFloat(prompt('insura um número (0 para parar): '));
    if (num === 0) {
        break;
    }
    
    soma += num;  
    contador++;  // incrmento
}

if (contador > 0) {
    const media = soma / contador; 
    console.log(`A média é: ${media}`);
} else {
    console.log('Nenhum número válido foi digitado.');
}