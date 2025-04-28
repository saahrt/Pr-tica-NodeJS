// 10 - Receba um número e diga se é primo
// primo quando um número diferente de 1 for divisivel por 1 e por ele mesmo

const n1 = 5;

let isPrimo = true;

if (n1 <= 1) {
    isPrimo = false; 
} else {
    for (let i = 2; i < n1; i++) {
        if (n1 % i === 0) {  // se for divisível por qualquer número além de 1 e n1, falso
            isPrimo = false;
            break;
        }
    }
}

if (isPrimo) {
    console.log(`O número ${n1} é primo.`);
} else {
    console.log(`O número ${n1} não é primo.`);
}