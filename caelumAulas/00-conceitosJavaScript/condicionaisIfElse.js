/*
Condicionais em javascript para efetuar comparações tendo como
consequência resultado verdadeiro ou falso
*/

/*
Estudo de caso 
Calcular a média do estudante 
se a média for maior ou igual a seis o estudante estará aprovado
caso contrário estará reprovado
Para cálculo da média, considere duas provas (notas)
*/

//Montem um algoritmo para calcular a aprovação/reprovação exibindo o resultado no console

let nota1
let nota2
let media

//estudante aprovado
nota1 = 7.0
nota2 = 5.0
media = (nota1 + nota2) / 2

if (media >= 6.0) {
    console.log ("Aprovação com média:", media)
} else {
    console.log ("Reprovação com média:", media)
} 

//estudando reprovado
nota1 = 6.0
nota2 = 4.0
media = (nota1 + nota2) / 2

if (media >= 6.0) {
    console.log ("Aprovação com média:", media)
} else {
    console.log ("Reprovação com média:", media)
} 


