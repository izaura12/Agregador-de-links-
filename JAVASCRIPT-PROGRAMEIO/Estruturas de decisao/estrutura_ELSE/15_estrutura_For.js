for(let index = 0; index <= 5; index++ ){
   console.log(index);
}


// EXEMPLO 02

console.log('START!');

for(let blocos = 0; blocos <=10; blocos ++){
   console.log('Personagem  no  bloco ' +  blocos);
}

console.log('END... ');

// EXEMPLO 03

console.log('Tá chegando o dia do meu Niver')

var nome = 'Izaura';

for(var segundos = 10; segundos > 0; segundos --) {
    console.log('Faltam:'+ segundos + 'segundos'); 
}

console.log('FELIZ ANIVERSÁRIO ' + nome);


// EXEMPLO 04

var meuNumero = 5;

for(let index = 1; index <= 10; index++){

   console.log(index + "+ " + meuNumero + "=" + (index + meuNumero));

}

// EXEMPLO 05

var blocoDoBuraco = 3;

console.log('START!');

for( let blocos = 1; blocos <=5; blocos++){

   console.log('Personagem no Bloco: ' + blocos);

   if (blocos === 3){
      console.log('PULAR !');
   }else {
      console.log('correr...');
   }
}
console.log('END...');