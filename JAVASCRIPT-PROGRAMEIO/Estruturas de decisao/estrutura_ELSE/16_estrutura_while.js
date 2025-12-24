// não tem uma variavel que dite até onde ele vai e termine.
// Fizemos uma apenas para parAcer o for e nesse exemplo abaixo tempo um loop infinito pois o while não para de ser executado.
// PARA PARAR O LOOP INFINITO POSSO COLOCAR CTRL C NO TERMINAL.

// LOOP EXEMPLO
let contador = 0;
while(contador <= 5) {
console.log(contador);

}

// EXEMPLO SEM LOOP POIS VAI CONTAR ATÉ CHEGAR NO SEIS ,OBSERVA SE CORRESPONDE A CONDIÇÃO E PARAR ;
// No while já temos que trabalhar com a condição que vai parar o loop diferente do FOR.

let contadorDois = 0;
while(contadorDois<= 5) {
console.log(contadorDois);
contadorDois ++;
}

// OUTRA PECULARIDADE DO WHILE É QUE
// SE O CONTADOR FOR DEPOIS DA CONDIÇÃO POR EXEMPLO 10,
// NADA ACONTECE NO TERMIANL NÃO APARECER NEM UM NÚMERO OU SEJA O CÓDIGO NÃO É EXECUTADO;
            
       // EXEMPLO 03
let contadorTres= 0;
while(contadorTres<= 5) {
console.log(contadorTres);
contadorTres ++;
}

// SE FOR FAZER EXEMPLO DE NÚMEROS PARES É MELHOR JÁ COMEÇAR COM UM NÚMERO PAR.
// numeroPar = numeroPar + 2; é a mesma coisa que numeroPar +=2;
         // EXEMPLO 04 

let numeroPar = 2;
while(numeroPar <= 20 ) {
    console.log(numeroPar);
    numeroPar = numeroPar + 2;
}

     // EXEMPLO 05

let soma = 0;
let numeroAtual = 1;

while(numeroAtual <= 100) {

    soma += numeroAtual;
    numeroAtual++;

}
console.log(soma);

// EXEMPLO 05

let minutosRestantes = 5;
while (minutosRestantes > 0){
   console.log('Faltam'+ minutosRestantes + 'minutos para o cafezin!');
   minutosRestantes--;
}

console.log('Hora do CAFÉ :D');
