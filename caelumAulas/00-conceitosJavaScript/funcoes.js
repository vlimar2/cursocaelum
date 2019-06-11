/*
Função é um dos pilares de linguagens de programação
A função é basicamente um conjunto de instruções que:
1. Executa uma atividade ou
2. Calcula um valor e retorna o resultado
*/

console.log("- Teoria de funções")

/*
function hello (nome) {
console.log("Hello world")
console.log(nome)
}

let nomePessoa = prompt("Digite seu nome:")
hello(nomePessoa)

function helloMoto (nome1, sobreNome){
    console.log("Boa noite," + nome1 + " " + sobreNome)
    //console.log(nome1)
    //console.log(sobreNome)
}

let nome1 = prompt ("Digite seu nome")
let sobreNome = prompt ("Digite seu sobrenome")
helloMoto(nome1, sobreNome)*/

//funcoes que calcula e devolve retorno
function raizQuadrada(numero) {
    return Math.sqrt(numero)
}

let numero = 36
let resultado = raizQuadrada(numero)

console.log("A raiz quadrada de " + numero + " é igual a " + resultado)


