/*
//contagem de 1 a 5

let contador = 1
while (contador <= 5) {
    console.log("contagem: ", contador);
    contador++
}

//contagem regressiva
console.log("Contagem regressiva");
let tempo = 10;
console.log(" contagem regressiva em...");
while (tempo > 0) {
    console.log(tempo);
    tempo--;
}
console.log("Feliz ano novo!");

//validação de Senha
const senhaCorreta = "123456";
let tentativa = "";
while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite a senha: ")
    if (tentativa === senhaCorreta) {
        alert("Senha correta")
    } else {
        alert("Senha incorreta")
    }
}

//somar numeros até ultrapassar 100
let soma = 0;
let numero = 1;
console.log("Somando numeros até passar de 100")
while (soma < 100) {
    soma += nnumero;
    console.log(`${numero} Soma parcial: ${soma}`)
    numero++
}
console.log(`\n precisou de ${numero - 1} numeros para ultrapassar 100`)
    
console.log(`\ soma final:  `+soma)

const numero = Number(prompt("qual numero: "))

if (Number.isNaN(numero)) {
    console.log("Digite um numero válido")
} else {
    let multiplicador = 1;
    alert(`Tabuada do ${numero} \n`)

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador
        alert(resultado)
        multiplicador++;
    }
}

let x = 10
while (x < 5) {
    console.log("isso não vai aparecer")
}

let y = 10
do {
    console.log("Isso vai aparecer uma vez")
} while (y < 1);

//Me3nu interativo

let option;

do {
    console.log("\n=======MENU=======")
    console.log("1 - ver saldo")
    console.log("2 - fazer depósito")
    console.log("3 - fazer saque")
    console.log("0 - sair")
    console.log("====================\n")
    option = prompt("Digite a opção desejada:")

    if (option === "1") {
        console.log("se saldo é de: 10,99")
    } else if(option === "2"){
        console.log("Depósito realizado")
    }else if (option === "3") {
        console.log("saque realizado")
    }else if (option === "0") {
        console.log("Bye")
    }
} while (option !== "0");

*/

//jogo: adivinhe um numero

const numeroSecreto = Math.floor(Math.random() * 10) +1;
//Math.random 0.0 0.9999999...
//* 10 0.0 9.99999999
//math.floor 0 - 9
// + 1 0 = 1 - 10
let palpite;
let tentativa = 0;
alert("Adivinhe um numero");

do {
    palpite = Number(prompt("Seu palpite: "))
    tentativa++
    if (Number.isNaN(palpite)) {
        alert("Digite apenas numeros válidos")
    } else if (Palpite < numeroSecreto) {
        alert("Muito baixo, tente novamente")
    }else if (palpite > numeroSecreto){
        alert("muito alto")
    }else {
        alert(`Acertou! limpe a cueca! Numero de tentativas ${tentativa}`);
    }
} while (palpite !== numeroSecreto);

