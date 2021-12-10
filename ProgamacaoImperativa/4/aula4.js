let nome = "Jonas Pacheco";
let  idade = 31;
let  peso = 106;
let  altura = 1.84;
let imc = peso/(altura*altura);

console.log( nome+" tem " + idade +" anos e seu índice de massa corporal é de " + imc);

function IMC (x,y){
    return (x/(y*y))
}
console.log(IMC(106,1.84))