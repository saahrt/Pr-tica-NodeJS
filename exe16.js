// 16 - Conte quantos números entre 1 e 1000 são divisíveis por 7

divisiveis = [];

for (let i = 1; i <= 1000; i++){
    if (i % 7 == 0){
        divisiveis.push(i);
    }
}

console.log(divisiveis);