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
        "idade":19,
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
        "idade": 85,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.50,
        "idade": 52,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.60,
        "idade": 76,
        "opiniao": "3"
    },
    {
  
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.70,
        "idade": 21,
        "opiniao": "3"
    },
    {
  
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.80,
        "idade": 11,
        "opiniao": "3"
    },
    {
  
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.90,
        "idade": 24,
       "opiniao": "3"
    }
  ]   
    
    function mediaQuestionario(pessoas){
      let quantidadeBom = 0;
      let somaBom = 0;
  
        for (i=0; i< pessoas.length; i++){
            if (pessoas[i].opiniao==="3"){
                somaBom += pessoas[i].idade
                quantidadeBom++
            }
        }
            return somaBom / quantidadeBom;
  
    }

  console.log(mediaQuestionario(arquivos));

  
    function quantidadeRegular(pessoas) {
      let quantidadeRegular = 0;
        for (i=0; i< pessoas.length; i++) {
            if (pessoas[i].opiniao==="1"){
              
              quantidadeRegular++
            }
        }
        return quantidadeRegular;      
    }
  
  console.log(quantidadeRegular(arquivos));
  
  
    function porcentagemBom(pessoas) {
      let quantidadeBom = 0;
      let quantidadePessoas = 0;
        for (i=0; i < pessoas.length; i++) {
          quantidadePessoas++
  
            if (pessoas[i].opiniao === "2"){                                   
              quantidadeBom++
            }
        }
      return (quantidadeBom / quantidadePessoas) * 100;
      
    }

  console.log(porcentagemBom(arquivos) +"%");
  
  


