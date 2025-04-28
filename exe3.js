// 3 - Receba um número e calcule o fatorial

function fatorial(n){
    let resul = 1;
    for(let i = 2; i <= n; i++){
        resul *= i;
        console.log(i);
    }
    return resul;
}

console.log(fatorial(5));