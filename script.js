// // let num  = Number(prompt("digite um numero. Para sair digite zero"))
// // soma =0 

// // while (num!==0){
// //     soma = soma + num 
// //     num =  Number(prompt('digite numero. para sair digite zero'))
// // }
// // alert (`A soma do dos numeros e ${soma}`)

// let num = Number(prompt("insira um numero"))

// for (let i=0; i<9; i++){

// }
//-- exercicio 2 
/*let num =Number(prompt("insira um numero"))
for ( let i=0;i<=num ; i++){
     console.log(i)
}*/

// --- exercicios 3 
 const numeros = [0, 1, 2, 3, 4, 5, 6];

 for(let i = 0; i < numeros.length; i++){
     console.log(numeros[i]);
 }

 const  array1 =[7,5,5,4,3,2,1]
  for (let i =0;i<array.length; i++ ){
  console.log(`O numero do indice é ${i}`)
     alert(array1[i])
  }

// 1)
let usuario= prompt("digite o tipo de usuario").toUpperCase()
while (usuario !=="A"){
    console.log("Acesso negado")
    alert("Acesso negado")
    usuario = prompt("Tente outro usuário").toUpperCase()
}
console.log(`Boas Vindas`)
alert(`Boas Vindas`)

// 2)
let num = Number(prompt("calcule a tabuada "))
let num1 = Number(prompt("digite o limite do calculo"))
s = num
for ( let i=1; i<num1; i++){
    s = num*i
    console.log(`tabuada de 2 posição ${i}  ${s}`)
}

// 3) 
const array = ["Joao", "Maria", "Jonas", "judas" , "jesus" ] 
for (let i=0 ; i<array.length;i++){
    console.log(array[i].toUpperCase())
}
