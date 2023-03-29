// 1 - Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.

// Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
// O resultado deve ser: 70

// let numero = Number(prompt('Digite um número:'))
// let resposta = 0

// while(numero!==0){
//     resposta = numero + resposta
//     numero = Number(prompt('Digite um novo número:'))

// }
// console.log(resposta)

// 2 - Vamos escrever um programa que recebe um número do usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

// let numeroUsuario = Number(prompt('Digite um número:'))

// for(i=0; i<=numeroUsuario; i++){
//     console.log(i)
// }

// 3 - Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O elemento de índice ${indice} é ${numero[indice]}”

const numeros = [10,9,33,22,1,0,99]

// for(let i = 0; i<=numeros.length-1; i++){
//     console.log(`Indice ${i} e ${numeros[i]}`)
// }

let i = 0
while(i<=numeros.length-1){
    console.log(`${i} e ${numeros[i]}`)
    i++
}