let pares = [2, 4, 6, 8, 10, 12];

let impares = pares.map((num) => {
    return num+1;
});

console.log(pares);
console.log(impares);

let nomes = ['Jose', 'Jose', 'Pedro', 'Rafa', 'Jonas'];

let filtraJose = nomes.filter((nome) => {
    return nome ==='Jose';
})

console.log(nomes)
console.log(filtraJose)

let numeros = [2, 24, 5, 6, 22, 15, 10];

let numeroFormatado = numeros.reduce((acc, num) => {
    return acc + ' – ' + num;
})

console.log(numeroFormatado)

let animais = ['Porco', 'Foca', 'Vaca', 'Gato', 'Cachorro'];

let printAnimais = animais.forEach(
    (animal) => {
        console.log('o animal é: ', animal);
    }
)

// mesa de trabalho


let listaNumeros = [10, 20];

let novaLista = listaNumeros.map(
    (numero) => {
        return numero / listaNumeros.reduce(
            (acc, num) => {
                return acc + num
            }
        )
    }
)

console.log(novaLista);



let listaMista = ['Paus', 'Copas', 'Ouro', 'Espada', 1];

let novaLista2 = listaMista.filter(
    (item) => {
        return item.length > 0;
    }
)

console.log(novaLista2)


let listaLiterais = [{
    nome: 'Jose',
    nota: 10
}, {
    nome: 'João',
    nota: 6
}, {
    nome: 'Josefa',
    nota: 8
}];

let listaCrescNome = listaLiterais.sort(
    (a, b) => {
        return a.nome.localeCompare(b.nome)
    }
)

console.log(listaCrescNome)  

let listaCrescNota = listaLiterais.sort(
    (a, b) => {
        return b.nota - a.nota
    }
)

console.log(listaCrescNota)

