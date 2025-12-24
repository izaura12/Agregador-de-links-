let contadorNumero = 1;

    do {

        console.log('Tabuada do' + contadorNumero);

        for(let index =1; index <= 10; index++) {

           console.log(contadorNumero + 'x' + index + '=' + (contadorNumero * index));
        }

     contadorNumero++;

    } while(contadorNumero <= 10 );