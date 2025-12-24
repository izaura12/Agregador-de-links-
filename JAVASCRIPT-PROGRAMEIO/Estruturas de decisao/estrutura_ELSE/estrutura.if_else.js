var anoDeNascimento = 1994;
var anoAtual = 2025;
var idadePessoa1 = anoAtualAtual - anoDeNascimento;

if (idadePessoa1 >= 18) {
   console.log('Voto OBRIGATÓRIO  Idade:' + idadePessoa1);
} else if ( idadePessoa1 === 16 || idadePessoa1 === 17 ) {
     console.log('Voto Opcional  Idade:' + idadePessoa1);
} else {
    console.log('Não pode votar ainda...  Idade:' + idadePessoa1);
}


var userName = 'Amstrong';
var senha = '26122007';

if (userName !== 'Amstrong' && senha !== '26122007'){
    console.log('Usuário e Senha Incorretos');
} else if (userName != 'Amstrong'){
    console.log('Usuário Incorreto!');
} else if (senha !== '26122007'){
    console.log('Senha Incorreta!');
} else {
    console.log('Pode entrar no sistema');
    console.log('Usuário e Senha Incorretos');
}


var notaAluno = 10;

if (notaAluno <= 7){
    console.log('Aluno Aprovado, Parabéns :D');
}else if(notaAluno === 6){
    console.log('Aluno  de Recuperação - Precisa estudar mais! ');
} else {
    console.log('Aluno Reprovado');
}
   