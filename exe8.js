// 8 - Calcule o IMC e diga a classificação
// IMC = peso / altura²
// abaixo do peso (IMC < 18,5), peso normal (18,5 ≤ IMC < 25), sobrepeso (25 ≤ IMC < 30), obesidade (30 ≤ IMC)

const peso = 50;
const altura =  1.66;

const imc = peso/(altura * altura);
const IMC = imc.toFixed(1);

if (IMC < 18.5){
    console.log(`O seu IMC está em ${IMC} e está ABAIXO do peso.`);
} else if (IMC >= 18.5 && IMC < 25){
    console.log(`O seu IMC está em ${IMC} e está NORMAL.`);
} else if (IMC >= 25 && IMC < 30){
    console.log(`O seu IMC está em ${IMC} e está ACIMA do peso.`);    
} else {
    console.log(`O seu IMC está em ${IMC} e você está OBESO.`);   
}