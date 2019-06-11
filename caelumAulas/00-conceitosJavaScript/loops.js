//verificar número par se numero % 2 = 0 numero par
/*
while é uma das construções lógicas que iremos aprender
para controle de repetições (loops), que sao um conjunto
de comandos que devem ser repetidos enquanto (while) uma condição é 
verdadeira
*/

let numero=0
let pares=0
while(numero <= 50){
if (numero % 2 == 0) pares ++ 
console.log("numero:", numero, "Qtde de pares", pares) 
numero ++
}

//2-Do while
//numero=0
pares=0
do{
    if (numero % 2 == 0) pares ++
    console.log("numero:", numero, "Qtde de pares", pares) 
    numero ++ 
}while(numero <= 50){

}
