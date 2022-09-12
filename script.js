//EXE01
let userName;
let sum = 0;

while (userName !== 0) {
    userName = Number(prompt('Insira um N°'));
    sum += userName;
}

console.log(sum)
console.log('////////////////////////')

///////////////////////////

//EXE02
alert('Vamos fazer agora uma contagem')
let numberUser = Number(prompt('Digite seu número para contagem'))

for (i = 1; i < numberUser + 1; i++) {
    console.log(i)
}

//EXE03
const arrNumbers = [3, 5, 4, 2, 19, 10, 1]

for (i = 0; i < arrNumbers.length; i++) {
    console.log(arrNumbers[i])
}