var valorEmDolar = 30
var cotacaoEmDolar = 5.32
// 1º Desafio da Aula 01 - Adicionar a Cotação de uma Bitcoin
var cotacaoEmDogecoin = 13.09
// 2º Desafio da Aula 01 - Adicionar o Nome da Pessoa que pediu a Conversão
var nomeSolicitante = 'Angelo Antonio'

valorEmReal = valorEmDolar * cotacaoEmDolar
valorEmDogecoin = valorEmDolar * cotacaoEmDogecoin

alert('Ola '+nomeSolicitante+'!'+'\n'
+'O valor de $'+valorEmDolar+' dolares corresponde a:'+'\n'
+'R$'+valorEmReal.toFixed(2)+' Reais'+'\n'
+valorEmDogecoin.toFixed(2) + ' DogeCoins')