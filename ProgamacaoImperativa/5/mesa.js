//Micro Desafio_1
function teste1 (x,y) {
    return y - x;
}
console.log(teste1(10,40));


// Mircro Desafio_2
function teste2 (x,y) {
    return x * 2
    console.log(x)
    return x / 2
}
console.log(teste2(10));


//Funcções simples -----
// execicio 1 --------
function polegada( num){
    const conv = 2.54
    return num * conv
}
console.log(polegada(10));


// execicio 2 ----------
function convString(texto){
return"http://www."+texto+".com.br"
}
console.log(convString("ifood"));

// exercicio 3 --------------

function string(text1){
    return text1+" !";
}
console.log(string("vermelho"));

// Execício 4 ----------
function idadeCachorro(idade){
    let result = 7 * idade;
    return  result;
}
console.log("Os cachorro, possui "+idadeCachorro(5)+" anos");



function valorHora(salario){
    vHora = salario/160;
    return vHora;
}
console.log("O valor da hora é: "+valorHora(4500))


function imc(Nome,altura, peso, ){
    result = peso/(altura*altura);
    return ("Senhor "+Nome+" seu IMC é de : "+ result)
}
console.log(imc("Jonas",1.84,106))