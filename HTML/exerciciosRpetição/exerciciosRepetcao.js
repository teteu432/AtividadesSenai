// contagem de 1-10
/*console.log("Contagem:")
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
}*/

//Soma dos primeiros N números naturais:

const num = Number(prompt("Digite um numero para a soma:"))
let soma = 0
for(let ii = 1; ii <=num; ii++){
    soma += ii
}
alert(`soma de 1 até ${num} = ${soma}`)