// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.
//  Faça um programa que calcule e escreva:

// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

function maiorAltura(pessoas) {
    pessoas.sort(function(a, b) {
        return b.altura - a.altura;
    });
  
    return pessoas[0].altura;
  }
  
  function menorAltura(pessoas) {
    pessoas.sort(function(a, b) {
        return a.altura - b.altura;
    });
  
    return pessoas[0].altura;
  }
  
  function mediaMulheres(pessoas) {
    let quantidadeMulheres = 0;
    let somaAltura = 0;
    for (i=0; i< pessoas.length; i++) {
        if (pessoas[i].sexo==="F"){
            somaAltura += pessoas[i].altura 
            quantidadeMulheres++
        }
    }
    return somaAltura / quantidadeMulheres;
  
  
  }
  
  function quantidadeHomens(pessoas) {
    let quantidadeHomens = 0;
    let somaAltura = 0;
    for (i=0; i< pessoas.length; i++) {
        if (pessoas[i].sexo==="M"){
            somaAltura += pessoas[i].altura 
            quantidadeHomens++
        }
    }
    return quantidadeHomens;
  
  
  }
  
  
  const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.00,
        "idade": 50,
        "opiniao": "1"
    },
    {
  
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.10,
        "idade": 45,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.20,
        "idade":30,
        "opiniao": "1"
    },
    {
  
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.30,
        "idade": 25,
        "opiniao": "2"
    },
    {
  
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.40,
        "idade": 25,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.50,
        "idade": 30,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.60,
        "idade": 30,
        "opiniao": "3"
    },
    {
  
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.70,
        "idade": 30,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.80,
        "idade": 30,
        "opiniao": "3"
    },
    {
  
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.90,
        "idade": 30,
       "opiniao": "3"
    }
  ]
  
  
  console.log(maiorAltura(arquivos));
  console.log(menorAltura(arquivos));
  console.log(mediaMulheres(arquivos));
  console.log(quantidadeHomens(arquivos));
  
  
  
  
  