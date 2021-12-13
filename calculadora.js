let res = document.getElementById('res')
function adicao() {
  let n1 = document.getElementById('Num1')
  let n2 = document.getElementById('Num2')
  let primeiroNumero = Number(n1.value)
  let segundoNumero = Number(n2.value)
  res.innerHTML = 'A soma dos numeros é: ' + (primeiroNumero + segundoNumero)
}
function subtracao() {
  let n1 = document.getElementById('Num1')
  let n2 = document.getElementById('Num2')
  let primeiroNumero = Number(n1.value)
  let segundoNumero = Number(n2.value)
  res.innerHTML =
    'A subtração dos numeros é: ' + (primeiroNumero - segundoNumero)
}
function multiplicacao() {
  let n1 = document.getElementById('Num1')
  let n2 = document.getElementById('Num2')
  let primeiroNumero = Number(n1.value)
  let segundoNumero = Number(n2.value)
  res.innerHTML =
    'A multiplicação dos numeros é: ' + primeiroNumero * segundoNumero
}
function divisao() {
  let n1 = document.getElementById('Num1')
  let n2 = document.getElementById('Num2')
  let primeiroNumero = Number(n1.value)
  let segundoNumero = Number(n2.value)
  if (segundoNumero != 0) {
    res.innerHTML = 'A divisão dos numeros é: ' + primeiroNumero / segundoNumero
  } else {
    res.innerHTML = 'Não é possivel dividir por 0'
  }
}
