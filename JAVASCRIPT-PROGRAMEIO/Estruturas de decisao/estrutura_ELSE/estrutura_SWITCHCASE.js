var numeroDoDia = 1;

switch(numeroDoDia) {
     case 1:
        console.log('Domingo');
        break;

    case 2:
        console.log('Segunda');
        break;

    case 3:
        console.log('Terça');
        break;

    case 4:
        console.log('Quarta');
        break;

     case 5:
        console.log('Quinta');
        break;

    case 6:
        console.log('Sexta');
        break;

    case 7:
        console.log('Sabádo');
        break;

        default:
            console.log('Dia da Semana Inválido')
            break;

}

// EXEMPLO 02

var numeroDoDia = 1;

switch(numeroDoDia) {
     case 1:
        case 7:
        console.log('Final de semana chegou ...');
        break;
    }

// EXEMPLO 03

    var opcaoSelecionada = 0;

    console.log('0 - Novo Pedido,  1 - Acompanhar pedido, 2 - Cardápio')

switch(opcaoSelecionada) {
     case 0:
        console.log('Faça seu pedido com endereço e nome');
        break;

     case 1:
        console.log('Seu pedido está em andamento');
        break;

     case 2:
        console.log('Hoje temos Hamburguer , Pizza e Coca Cola :D');
        break;

        default:
            console.log('Opção Inválida')
            break;
    }


    // EXEMPLO 04

    var primeiroNumero = 17;
    var segundoNumero = 2;
    var opcaoSelecionada = 1;

    console.log('1 - Somar , 2 - Subtrair, 3 - Multiplicar, 4 - Dividir');

    switch (opcaoSelecionada){
      case 1:
        console.log(primeiroNumero + segundoNumero);
         break;

     case 2 :
        console.log(primeiroNumero - segundoNumero)
        break;

     case 3 :
        console.log(primeiroNumero * segundoNumero)
        break;

     case 4 :
        console.log(primeiroNumero / segundoNumero)
        break;

default:
    console.log('Opção Inválida')
    break;

    }