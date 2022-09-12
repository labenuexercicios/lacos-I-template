//while - Exercicio 1

// let numero = Number (prompt("Insira um número qualquer"))
// let idade = Number (prompt("Insira sua idade"))
// let numSorte = Number (prompt("Insira seu número da sorte"))
// let zero = Number (prompt("Insira o número zero"))
// let somadosNumeros = (numero + idade + numSorte + zero)

// while(zero === 0){
//     console.log(somadosNumeros)
// }
//Deu loop infinito

// let userInput = Number (prompt("Insira um número qualquer"))
// let soma = 0
// while(userInput !== 0){
//     soma = soma + userInput
//     userInput = Number (prompt("Insira um número qualquer"))
//     console.log(userInput)
//     console.log(soma)
// }

//for - Exercicio 2

// let numeroUsuario = Number (prompt("Insira um número qualquer"))

// for(let i = 0; i<= numeroUsuario; i++){
//     console.log(i)
// }

//for com arrays

// const numeros = [2, 6, 15, 28, 32, 43, 59]

// for(let i = 0; i < numeros.length; i++){
// 	console.log(`O número do índice ${i} é ${numeros[i]}`)
// }

//Exercicio de fixação

//1
let tipoUsuario = prompt("Insira seu tipo de usuario").toUpperCase()

while(tipoUsuario !== "A"){
    alert("Acesso negado");
    tipoUsuario = prompt("Insira seu tipo de usuario").toUpperCase();
}
alert("Boas-vindas, admin!")