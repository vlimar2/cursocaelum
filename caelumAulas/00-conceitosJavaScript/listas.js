/**
 Em lógica de programação, é muito comum trabalharmos
 com listas de objetos
 Chamamos essas listas de arrays
 */

 //lista de compras
 let listaCompras = ["ovos", "leite","farinha"]

 //como substituir elementos da lista
 listaCompras[2]="queijo"
 listaCompras[1]="suco"

 //como acrescentar elementos na lista
 //push inclui um item (append)
listaCompras.push("sorvete")

//Para visualizar (ler) todos os elementos de uma lista
for (let index = 0; index < listaCompras.length; index++) {
    const element = listaCompras[index];
    console.log(index,element)  
}

//remove um elemento da lista
//listaCompras.splice(1,2)

//remove um elemento de lista e inclui outro
listaCompras.splice(1,2, "aveia","mel")
console.log(listaCompras)

//adiconar um novo elemento usando splice
listaCompras.splice(3,0, "chocolate")
console.log(listaCompras)

if (listaCompras.includes("aveia")){
    console.log("Você já comprou esse item")
}
