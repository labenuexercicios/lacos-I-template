function linha(){
    console.log('-=-'.repeat(20))
}
linha()

// const lista =[]
// console.log(lista)

// for (let i=0;i<5;i++){
//     lista.push(prompt('insira seu nome'))

// }
// console.log(lista)

// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.

// Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
// O resultado deve ser: 70


// let num = Number(prompt('Insira um numero'))
// let resp =0
// while(num !== 0){
//     console.log(num)    
//     resp = resp + num
//     num = Number(prompt('Insira um numero'))
// }
// console.log(`A soma dos números digitados foi ${resp}`)

// let numero = Number(prompt('Digite um numero para contagem'))
// for (let i=0;i<=numero;i++){
//     console.log(i)
// }

// linha()

// let cont = 0
// while(cont <= numero){
//     console.log(cont)
//     cont ++
// }
// linha()

/*Vamos escrever um programa que recebe um número do usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.*/

// const x = Number(prompt('Insira um número: '))
// for(let i = 0;i<=x; i++){
//     console.log(i)
// }
// console.log(`Numero digitado foi ${x} Fim do programa`)

/*Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha*/

const meuArray= ['Orci', 46,'Arthur', 10,'Ana',43,'Bucky']

for(let contador=0;contador<meuArray.length;contador++){
    console.log(`O elementro ${contador} é ${meuArray[contador]}`)
}

let indice = 0
while(indice <= meuArray.length-1){
    console.log(`Na posição ${indice}, temos o elemento ${meuArray[indice]}`)
    indice = indice+1
}