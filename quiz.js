var pergunta = document.getElementById('pergunta')
var rA = document.getElementById('respostaA')
var rB = document.getElementById('respostaB')
var rC = document.getElementById('respostaC')
var acertos = 0
var info = document.getElementById('info')

alternativas = [pergunta, rA, rB, rC]
let questoes = [
  [
    'Pergunta 1: Qual o maior animal terrestre?',
    'a) Baleia Azul',
    'b) Dinossauro',
    'c) Elefante africano',
    'c) Elefante africano'
  ],
  [
    'Pergunta 2: Que líder mundial ficou conhecida como “Dama de Ferro”?',
    'a) Dilma Rousseff',
    'b) Angela Merkel',
    'c) Margaret Thatcher',
    'c'
  ],
  [
    'Pergunta 3: Quais os nomes dos três Reis Magos?',
    'a) Gaspar, Nicolau e Natanael',
    'b) Belchior, Gaspar e Baltazar',
    'c) Belchior, Gaspar e Nataniel',
    'b'
  ],
  [
    'Pergunta 4: Qual a religião monoteísta que conta com o maior número de adeptos no mundo?',
    'a) Cristianismo',
    'b) Zoroatrismo',
    'c) Islamismo',
    'a'
  ],
  [
    'Pergunta 5: Qual desses filmes foi baseado na obra de Shakespeare?',
    'a) Muito Barulho por Nada (2012)',
    'b) Capitães de Areia (2011)',
    'c) A Dama das Camélias (1936)',
    'a'
  ],
  [
    'Pergunta 6: Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?',
    'a) Marie Curie',
    'b) Blaise Pascal',
    'c) Louis Pasteur',
    'c'
  ],
  [
    'Pergunta 7: As pessoas de qual tipo sanguíneo são consideradas doadores universais?',
    'a) Tipo A',
    'b) Tipo B',
    'c) Tipo O',
    'c'
  ],
  [
    'Pergunta 8: Quais são os cromossomos que determinam o sexo masculino?',
    'a) Os V',
    'b) Os X',
    'c) Os Y',
    'c'
  ],
  [
    'Pergunta 9: Em que estado australiano fica situada a cidade de Sydney?',
    'a) Nova Gales do Sul',
    'b) Victoria',
    'c) Tasmânia',
    'a'
  ],
  [
    'Pergunta 10: Quem amamentou os gêmeos Rômulo e Remo?',
    'a) uma cabra',
    'b) uma loba',
    'c) uma vaca',
    'b'
  ]
]

let count = 0
next()
function next() {
  for (let l = 0; l <= 3; l++) {
    alternativas[l].innerHTML = questoes[count][l]
    var resposta = document.getElementsByName('radalt')
    if (resposta.checked == questoes[count][4]) {
      info.innerHTML = 'Acertou miseravi!'
      acertos++
    } else {
      info.innerHTML = 'Errou miseravi!'
    }
  }
  count++
}
info.innerHTML = `Você acertou ${acertos}/10 questões`

// for (let i = 0; i < 10; i++) {
//
//   var radalt = document.getElementsByName('radalt')
//   if (radalt.checked == questoes[i][4]) {
//     info.innerHTML = 'Acertou miseravi!'
//     acertos++
//   } else {
//     info.innerHTML = 'Errou miseravi!'
//   }
// }
