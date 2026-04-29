/*// contagem de 1-10
console.log("Contagem:")
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//tabuada de um número:

const numero = Number(prompt("Tabuada de qual numero? "))
if (Number.isNaN(numero)) {
    alert("Número invalido")
} else {
    console.log(`\n Tabuada do ${numero}\n`)

    for(let i = 0; i <= 10; i++){
        const resultado = numero * i;
        alert(`${numero} x ${i} = ${resultado}`)
    }
}

//Soma dos primeiros N números naturais:

const num = Number(prompt("Digite um numero para a soma:"))
let soma = 0
for(let ii = 1; ii <=num; ii++){
    soma += ii
}
alert(`soma de 1 até ${num} = ${soma}`)

//Exibir os números pares de 1 a 50:


for (let index = 0; index <= 50; index++) {
    
    if (index % 2 === 0) {
        console.log(index)
    }
}

// Adivinhação
const numeroSecreto = Math.floor(Math.random() * 10) +1;
let palpite;
let tentativa = 0;
alert("Adivinhe um numero de 1-10");

do {
    palpite = Number(prompt("Seu palpite: "))
    tentativa++
    if (Number.isNaN(palpite)) {
        alert("Digite apenas numeros válidos")
    } else if (palpite < numeroSecreto) {
        alert("Muito baixo, tente novamente")
    }else if (palpite > numeroSecreto){
        alert("muito alto")
    }else {
        alert(`Acertou! limpe a cueca! Numero de tentativas ${tentativa}`);
    }
} while (palpite !== numeroSecreto);

console.log("Contagem regressiva");
let tempo = 10;
console.log("contagem regressiva em...");
while (tempo > 0) {
    console.log(tempo);
    tempo--;
}
console.log("===========")
console.log("Decolou!");*/

//Soma dos dígitos de um número:

let numero = Number(prompt("Digite um numero inteiro"))

let soma = 0;

while (numero > 0) {
    let digito = numero % 10
    soma += digito;

    numero = Math.floor(numero/10);
}

alert("Soma dos digitos:" + soma)






