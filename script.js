// Prática guiada

//ELEMENTOS NECESSÁRIOS PARA QUALQUER LAÇO

/* Inicialização de váriável*/
/* Condição de continuação*/
/* Um conjunto de ações*/
/* Uma alteração que mude a condição de continuação*/



// While (enquanto)
/* Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um
após o outro.
Quando digitar o número "0", devemos parar de solicitar novos inputs e imprimir no console
a soma de todos os números indicads.
Ex: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
O resultado deve ser: 70. */

// variavel = Number(prompt("string"))
// variavel de soma = 0
/* while(variavel for diferente de 0){
    a variavel soma = variavel soma + variavel do prompt
    variavel = prompt de novo
}
essa condição rodará infinitamente até digitar 0 para encerrar o laço. */

console.log("Ex de while")

let numeroWhile = Number(prompt("Insira um número aleatório."))
let soma = 0

while(numeroWhile !== 0){

    soma = soma + numeroWhile
    console.log(soma)
    
    numeroWhile = Number(prompt("Insira outro número aleatório."))
}

console.log("Saiu do laço while.")



// For (para/por)
/* Vamos escrever um programa que recebe um numero aleatório por prompt
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por x vezes, onde o X é o número digitado. */

// variavel = Number(prompt("string"))
// for(inicialização de variavel; condição/verificação booleana; incremento++)
// for(let i = numero inicial; i condição da variavel; i++ significa incremento+1

let numeroFor = Number(prompt("Insira um número aleatório."))

for(let i = 0; i <= numeroFor; i++){

    console.log(i)
}
console.log("Fim do laço for.")



// for com arrays
// Declara uma variável = array [elementos]
// for(let i = número inicial; i condição da variavel.length; i++ indice+1 )
// console.log(`string de impressão`)
// console.log(`string de fim`)

const numeros = [2, 4, 6, 8, 10]
for(let i=0; i < numeros.length; i++){
    console.log(`O número do índice ${i} é ${numeros[i]}`)
}
console.log("Fim do for array.")



