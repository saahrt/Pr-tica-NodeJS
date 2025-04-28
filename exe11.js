// 11 - Exiba todos os números pares de 1 a 100

pares = [];

for (let i = 1; i <= 100 ; i++){
    if (i % 2 == 0){
        pares.push(i);
    }
}

console.log(pares);