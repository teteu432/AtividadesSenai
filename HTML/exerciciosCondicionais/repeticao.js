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



//jogo: adivinhe um numero

const numeroSecreto = Math.floor(Math.random() * 10) +1;
//Math.random 0.0 0.9999999...
//* 10 0.0 9.99999999
//math.floor 0 - 9
// + 1 0 = 1 - 10
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

//for
console.log("Contando de 1 a 10: \n")
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`)
    console.log("------------")
}

const numero = Number(prompt("Tabuada de qual numero? "))
if (Number.isNaN(numero)) {
    console.log("Número invalido")
} else {
    console.log(`\n Tabuada do ${numero}\n`)

    for(let i = 1; i <= 10; i++){
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
        alert(`${numero} x ${i} = ${resultado}`)
    }
}

//numeros pares(0-20)

let par = 0
for(let i = 0; i <= 20; i+=2){
    console.log(i);
}   

//contagem regressiva
for(let i = 10; i >= 0; i--){
    console.log(i);
}   

//Piramide
const altura = 5;
for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = "";

    for(let i = 1; i <= linha; i++){
        asteriscos += "* ";
    }
    console.log(asteriscos)

// array = lista

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3]);
console.log(frutas.length);
console.log(frutas[1].length);


//for of

for (const fruta of frutas) {
    console.log("----------")
    console.log(`-${fruta}`)
}

//soma de todos os numeros do array
const numeros = [10, 25, 8, 42, 15, 7]
let soma = 0
for (const numero of numeros) {
    soma += numero
    console.log(soma)
}

//Objetos

const pessoa = {
    nome: "Mateus",
    idade: 35,
    cidade: "Mauá",
    profissao: "Tecnico de refrigeração"
}

console.log(pessoa.cidade)
console.log(pessoa["idade"])

//for in

for(const chave in objeto){

}

const aluno = {
    nome: "Mateus da Silva",
    matricula: "202220",
    curso: "DEV WEB",
    nota: 9.5
};

console.log("\nDados do aluno");
for (const chave in aluno) {
    const valor = aluno[chave]
        console.log(`${chave}: ${valor}`)
    }
*/

//Estoque de produtos

const estoque = {
    "Notebook": 10,
    "Mouse": 20,
    "teclado": 30,
    "monitor": 8,
    "Webcam": 22,
}

for (const chave in estoque) {
    const quantidade = estoque[chave]
   if (quantidade <10 ) {
    console.log("Precisa comprar")
   } else {
    console.log(`${chave} Quantidade: ${quantidade}`)
   }
}