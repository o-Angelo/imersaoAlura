var nSecreto = parseInt(Math.random() * 1001)
var chute = 0
var nTentativas = 0

while (chute != nSecreto) {
    chute = prompt('Digite um numero de 1 a 1000')
    nTentativas += 1
    if (chute == nSecreto) {
        alert('Depois de ' + nTentativas + ' tentativas\n'
            + 'Você acertou!')
    } else if (chute < nSecreto) {
        alert('Errou... O numero é maior que ' + chute)
    } else if (chute > nSecreto) {
        alert('Errou... O numero é menor que ' + chute)
    }
}