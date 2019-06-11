/*
Operadores são utilizados em javascript para 
expressões com variáveis e construir lógica
e algoritmos
*/

console.log("- Operadores")

//1. Aritméticos
let oper1 = 10 //Atribuição
let oper2 = 20 //
let oper3 = (oper1 + oper2)//Atribuição e soma

console.log(oper1+oper2)
console.log(oper1-oper2)
console.log(oper1*oper2)
console.log(oper1/oper2)
console.log(oper1%oper2)
console.log(oper1**oper2)

oper1 ++
console.log (oper1)
oper1 = oper1 + 1
console.log(oper1)
oper1 += 1
console.log(oper1)

/*oper1++//sempre adiciona 1 à variavel
oper1 = oper1 + 1
oper1 += 1
console.log(oper1)*/

oper1 += 5
console.log (oper1)

oper1--
oper1 = oper1 -1
oper1 -= 1
console.log (oper1)


//operadores de comparação
oper2 = 1
console.log(oper2 > 1)
console.log(oper2 >= 1)

//quero saber se uma vairiável é igual a alguma coisa
console.log (oper2 == 1)

//quero saber se a variável é diferente de alguma coisa
console.log (oper2 != 1)

//posso comparar uma variável com outra
console.log (oper2 == oper1)


//operdores lógicos
let operBool1 = true
let operBool2 = false
console.log (operBool1 == true)
console.log (operBool2 == true)

//1.Operador E (And) em javascript  = &&
//2. Operador OU (OR) em javascript = ||

//cenário
let temIdade 
let estaComResp
let temIngresso

//caso 1. poderá entrar no cinema
temIdade = 15
estaComResp = false
temIngresso = true

let entradaLiberada = (temIdade >= 16 || estaComResp) && temIngresso
console.log("Entrada liberada = ", entradaLiberada)

//caso 2
temIdade = 19
estaComResp = false
temIngresso = true

entradaLiberada = (temIdade >= 16 || estaComResp) && temIngresso
console.log("Entrada liberada = ", entradaLiberada)

//caso 3
temIdade = 19
estaComResp = true
temIngresso = false

entradaLiberada = (temIdade >= 16 || estaComResp) && temIngresso
console.log("Entrada liberada = ", entradaLiberada)

//caso 4
//Para conseguir entrar na sala de aula preciso
// 1. Passar um cartão de aluno E
// 2. Colocar a digital (fingerprint) OU
//Validar a retina
//construa a expressão lógica para validar a entrada

let cartaoAluno = false
let digital = true
let retina = true

let entradaOk  = cartaoAluno && (digital || retina)
console.log("Entrada na Caelum = ", entradaOk)






