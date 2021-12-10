let comida = {
    pipoca: 10,
    macarrão: 8,
    carne: 15,
    feijão: 12,
    brigadeiro: 8
}

function microondas(comida, tempo){
    if (tempo < comida){
        console.log("Tempo Insuficiente!")
    }else if(tempo >= comida && tempo < 2 * comida){
        console.log("Prato pronto, bom apetite!!!")
    }else if(tempo >= 2 * comida && tempo < 3 * comida){
        console.log("Prato Queimou")
    }else if(tempo >= 3 * comida){
        console.log("kabumm")
    }else{
        console.log("Prato inexistente")
    }
}

microondas(comida.pipoca, 10);
microondas(comida.feijão, 13);
microondas(comida.carne, 42);
microondas(comida.macarrão, 50);
microondas(comida.pipoca, 21)