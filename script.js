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

alert('Vamos fazer agora uma contagem')
let numberUser = Number(prompt('Digite seu número para contagem'))

for (i = 1; i < numberUser + 1; i++){
    console.log(i)
}
