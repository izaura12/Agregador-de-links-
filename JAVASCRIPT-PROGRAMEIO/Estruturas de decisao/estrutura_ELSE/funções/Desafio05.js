function calculadora( primeiroNumero, operacão, segundoNumero) {

    if(operacão === '+'){

           console.log('A soma dos números é: ' + (primeiroNumero + segundoNumero) );
    } else if (operacão === '-') {

 console.log('A subtração dos números é: ' +(primeiroNumero - segundoNumero) );
    }  else if (operacão === '*') {

 console.log('A multiplicação dos números é: ' + (primeiroNumero * segundoNumero) );
} else if (operacão === '/') {

 console.log('A divisão dos números é: '+ (primeiroNumero / segundoNumero) );
}else {

        console.log('Operação Inválida');
        
    }
}


calculadora(10,'+', 2);
calculadora(4,'-', 2);
calculadora(3,'*', 2);
calculadora(10,'/', 2);
calculadora(10,'!', 2);


