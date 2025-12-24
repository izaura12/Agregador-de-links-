function fazerBolo(saborBolo){

console.log('Preparar a massa');
console.log('Colocar na forma');
console.log('Colocar para assar');
console.log('Adicionar cobertura');


return 'BOLO' + saborBolo;

}

let boloChocolate = fazerBolo('Chocolate');

console.log(boloChocolate);

// Lógicas mais complexas...

function somaNumeros(primeiroNumero, segundoNumero){

    return primeiroNumero + segundoNumero;

}

let primeiraSoma = somaNumeros(40, 2);
let segundaSoma = somaNumeros(40, 2);
let terceiraSoma = somaNumeros(40, 2);

console.log(primeiroSoma);

// Função Two de Letras  - FTL
// Escopo é tudo que está dentro das chaves .

function numeroDeLetras(){

    let meuNome = 'izaura';
    console.log(meuNome);
}

// Cógido não funcional - o let ai não funciona pois não tem escopo global é em blocos.
function numeroDeLetras(){

    let meuNome = 'izaura';
    
}
console.log(meuNome); 
// o var pode ser acessado de todo local mas não é uma boa prática!
function numeroDeLetras(){

    var meuNome = 'izaura';
    
}
console.log(meuNome);

// CÓDIGO FUNCIONAL - tem o return !
function numeroDeLetras(){

    let meuNome = 'izaura';
    return meuNome;
}
console.log(numeroDeLetras());

// Exemplo 02... Função pronta que faz algo especifico ex:length.
// length - conta o número de caracteres da palavra,frase,etc e espaços.
function numeroDeLetras(frase){

    let contadorDeLetras = frase.length;
    return contadorDeLetras;
}
let fraseDeEfeito = 'A vida , o universo e tudo mais!';
console.log(fraseDeEfeito)
console.log('A frase tem :' + numeroDeLetras(fraseDeEfeito) + 'letras');


