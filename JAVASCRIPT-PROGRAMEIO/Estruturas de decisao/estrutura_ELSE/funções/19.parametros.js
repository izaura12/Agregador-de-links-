function minhaFuncao( seuNome){

    console.log('Olá' + seuNome);


}
minhaFuncao('Samuel');
minhaFuncao('Marcos');
minhaFuncao('Manoel');
minhaFuncao('Giovana');

// samuel é o argumento e seuNome o parametro.
// quando tenho mais de um parametro divido por (,) e os argumentos tbm. 
// posso colocar nomes diferentes qe ele vai pegar e substituir .

function minhaFuncao( seuNome){

    console.log('Meu professor(a) se chama : '  + seuNome );


}
minhaFuncao('Marciel');
minhaFuncao('Jakeline');
minhaFuncao('Adecio');
minhaFuncao('Paula Luana');

// operacões matemáticas

function minhaFuncao( primeiroNumero, segundoNumero){

    console.log('A soma dos numeros é '  + (primeiroNumero + segundoNumero));


}
somaDeNumeros(2, 10);


// Divisão

function divisaoDeNumeros ( primeiroNumero, segundoNumero){

    console.log('A Divisão dos numeros é: '  + ( primeiroNumero /  segundoNumero));


}
divisaoDeNumeros( 20, 10);
divisaoDeNumeros( 50, 2);
divisaoDeNumeros(10, 2);

// CALCULADORA

function calculadora( primeiroNumero, operacão, segundoNumero) {

    if(operacão === '+'){

           console.log('A soma dos números é: ' (primeiroNumero + segundoNumero) );
    } else if (operacão === ' -') {

 console.log('A subtração dos números é: ' (primeiroNumero - segundoNumero) );
    } else {

        console.log('Operação Inválida');
        
    }
}

calculadora(10,'+', 2);
calculadora(10,'-', 2);
calculadora(10,'*', 2);


