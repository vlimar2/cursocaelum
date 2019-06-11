/**
 Assim como o loop com while, o loop com for executa 
 um determinado número de comandos repetidas vezes
 
 A diferença é que o for já inclui em sua sintaxe o 
 contador do loop e o incremento do contador
 */

 //Exemplo - Soma de números pares de 0 a 50 com for 
 let pares = 0
 for (let numero = 0; numero <= 50; numero++) {
    if (numero % 2 == 0) pares ++ 
    console.log("numero:", numero, "Qtde de pares", pares)  
 }

 //Exercício
 //Construa um loop com for para exibir a mensagem "hello world" 100 vezes

 let numero
 //let helloWorld = "Hello World"

 for (numero = 0; numero < 100; numero++) {
     //const  = numero[index];
     console.log("Rodada:", numero, "Hello world")
     
 }

 //Soma de números pares de 50 a 0 com for 
 pares = 0
 for (let numero = 50; numero >= 0; numero--) {
    if (numero % 2 == 0) pares ++
    console.log("numero:", numero, "Qtde de pares", pares)  
 }