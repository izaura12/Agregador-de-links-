
let contador = 1;
do {
    console.log(contador);

    contador++;

} while(contador <= 5);

// EXEMPLO 02

let blocos = 10;
let contadorUm = 1;

do {

   console.log('Correndo no bloco' + contador);
   contador++;

} while( contadorUm <= blocos);

// EXEMPLO 03

let segundos = 30;

do {
   console.log('Faltam ' + segundos + 'segundos');
    segundos --;

} while(segundos > 0);

    // EXEMPLO 04

    let soma = 0;
    let numerosoma = 1;

    do {

        soma += numerosoma;
        numerosoma++;

    } while (numerosoma <=500);

    console.log(soma);

    // EXEMPLO 04 - LOOP DENTRO DO LOOP 

    let contadortres = 0;

    do {

     contadortres++;

    } while(contadortres <= 3 );

    console.log(contadorQuatro);
    
    // EXEMPLO COM CALCULADORA

    let contadorCinco = 1;

    do {

        console.log('Tabuada do' + contadorCinco);

        for(let index =1; index <= 5; index++) {

           console.log(contadorCinco + '+' + index + '=' + (contadorCinco+index));
        }

     contadorCinco++;

    } while(contadorCinco <= 3 );
    