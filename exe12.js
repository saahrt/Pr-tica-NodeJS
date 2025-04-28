// 12 - Faça uma tabuada de um número digitado

const prompt = require('prompt-sync')();

const num = prompt("Insira um número: ");

console.log(`Tabuada de ${num}`);
for (let i = 0 ; i <= num ; i++){
    resul = num * i;
    console.log(`${i} x ${num} = ${resul}`);
}
console.log("Fim da Tabuda");