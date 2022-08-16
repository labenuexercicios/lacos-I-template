// let num = +prompt("Digite um numero. Para sair digite zero")
// let soma = 0

// soma += num
// soma = soma + num
// são iguais

// while(num !== 0 ){
//     soma = soma + num
//     num = +prompt('Digite um numero. Para sair digite zero')
// }

// alert(`A soma dos números é ${soma}`)

// ----- exercicio 2

// let num = +prompt("insira um número")

// for(let i = 0; i <= num; i++ ){
//     console.log(i)
// }

// exercicio 3

// const array = [4,2,8,9,2,2,6]

// for(let i = 0; i <= array.length; i++){
//     console.log(`O indice é ${i} = ${array[i]}`)
// }

// exercicio de fixação 1
const usuario = prompt("Digite uma letra \n A-Adiministrados \n B-Usuario Comum \n C-Usuario assinante")

while(usuario !== "A"){
    alert("Acesso Negado")
    usuario = prompt("Qual o Nivel de acesso \n A-Adiministrados \n B-Usuario Comum \n C-Usuario assinante").toUpperCase()
}
alert("Bem-vindo Adimin")


// exercicio de fixação 2
// const arrayNum = [0,1,2,3,4,5,6,7,8,9,10]
let num = +prompt("Qual tabuada voce quer")
let numm = +prompt("Quantas vezes repetir?")

for(i=0; i <= numm; i++){
    console.log(`Tabuada do ${num} com ${i} = ${i * num}`);
}

// exercicio de fixação 3
const array = ["g","f","e","d","c","b","a"]

for(let i = 0; i < array.length; i++){
    console.log(`O indice é ${i} = ${array[i]}`.toUpperCase(i))
}




