// 15 - Imprima os 10 primeiros números da sequência de Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const numeros = [0,1];

for (let i = 2; i < 10; i++){   
    const proximo = numeros [i - 1] + numeros [i - 2];
    numeros.push(proximo);
}

console.log(`os numeros da sequencia Fibonacci são: ${numeros}`);