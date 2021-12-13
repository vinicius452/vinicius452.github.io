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
    'Baleia Azul',
    'Dinossauro',
    'Elefante africano',
    'Elefante africano'
  ],
  [
    'Pergunta 2: Que líder mundial ficou conhecida como “Dama de Ferro”?',
    'Dilma Rousseff',
    'Angela Merkel',
    'Margaret Thatcher',
    'Margaret Thatcher'
  ],
  [
    'Pergunta 3: Quais os nomes dos três Reis Magos?',
    'Gaspar, Nicolau e Natanael',
    'Belchior, Gaspar e Baltazar',
    'Belchior, Gaspar e Nataniel',
    'Belchior, Gaspar e Baltazar'
  ],
  [
    'Pergunta 4: Qual a religião monoteísta que conta com o maior número de adeptos no mundo?',
    'Cristianismo',
    'Zoroatrismo',
    'Islamismo',
    'Cristianismo'
  ],
  [
    'Pergunta 5: Qual desses filmes foi baseado na obra de Shakespeare?',
    'Muito Barulho por Nada (2012)',
    'Capitães de Areia (2011)',
    'A Dama das Camélias (1936)',
    'Muito Barulho por Nada (2012)'
  ],
  [
    'Pergunta 6: Qual o nome do cientista que descobriu o processo de pasteurização e a vacina contra a raiva?',
    'Marie Curie',
    'Blaise Pascal',
    'Louis Pasteur',
    'Louis Pasteur'
  ],
  [
    'Pergunta 7: As pessoas de qual tipo sanguíneo são consideradas doadores universais?',
    'Tipo A',
    'Tipo B',
    'Tipo O',
    'Tipo O'
  ],
  [
    'Pergunta 8: Quais são os cromossomos que determinam o sexo masculino?',
    'Os V',
    'Os X',
    'Os Y',
    'Os Y'
  ],
  [
    'Pergunta 9: Em que estado australiano fica situada a cidade de Sydney?',
    'Nova Gales do Sul',
    'Victoria',
    'Tasmânia',
    'Nova Gales do Sul'
  ],
  [
    'Pergunta 10: Quem amamentou os gêmeos Rômulo e Remo?',
    'uma cabra',
    'uma loba',
    'uma vaca',
    'uma loba'
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
