var nomePersonagem = 'Lara Croft';
var numeroVitorias = 10;
var numerosDerrotas = 5;
var partidasJogadas = numeroVitorias + numerosDerrotas;

console.log('Bem vindo' + nomePersonagem);
console.log(nomePersonagem + 'jogou:'
 + partidasJogadas + 'partidas'+              'teve mais vitorias: ' + (numeroVitorias > numerosDerrotas));
console.log(nomePersonagem +' jogou:' + partidasJogadas + 'teve mais derrotas: ' + (numerosDerrotas > numeroVitorias));
