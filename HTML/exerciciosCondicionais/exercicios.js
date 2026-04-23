
//Verificação de idade!
const idade = Number(prompt("DIgite sua idade para verificação: "));

if (idade >= 18) {
    alert("Liberado! Você é de maior")
} else {
    alert("Acesso Negado! Você é menor de idade")
}

//Verificar se um número é positivo ou negativo:

const verificando = Number(prompt("Digite um numero para verificar: "))
    
if (verificando >= 0) {
    alert("Este numero é positivo!")
} else {
    alert("Este numero é negativo!")
}

//Aprovação em uma prova:

const prova = Number(prompt("Digite a nota: "))
    
if (prova >= 60) {
    alert("Aprovado!")
} else {
    alert("Reprovado!")
}

//Verificar se um número é positivo, negativo ou zero:

const numero = Number("Digite um numero: ");

if (numero === 0) {
    alert("Este numero é 0!")
} else if(numero > 0) {
    alert("numero" + numero + "é positivo")
}
else{
    alert("este numero é negativo")
}

//Classificação de idade:

const classificacao = Number(prompt("Qual sua idade: "))

if (classificacao <= 12 && classificacao >=0) {
    alert("Criança")
} else if(classificacao >= 13 && classificacao <= 17) {
    alert("Adolescente")
} else{
    alert("Adulto")
}

//Verificar se um número é par ou ímpar:

const parImpar = Number(prompt("Digite um numero: "))
const div2 = parImpar % 2
if (div2 === 0) {
    alert("par")
} else {
    alert("impar")
}

//Maior entre três números:

const n1 = Number(prompt("Digite o primeiro numero:"))
const n2 = Number(prompt("Digite o segundo numero:"))
const n3 = Number(prompt("Digite o terceiro numero:"))

if (n1 > n2 && n1 > n3) {
    alert(n1 + " é maior dos tres")
} else if(n3 > n2 && n3 > n1){
    alert(n3 + " é maior dos tres")
}else{
    alert(n2 + " é maior dos tres")
}
    

//3. **Desconto em compras:**
   // - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
    //- Caso contrário, exiba o valor normal.

const valor = Number(prompt("Valor da compra: R$ "))
const desc = 10;
const calculo = valor * (desc / 100)
const final = valor - calculo

if (valor > 100) {
    alert("Total com desconto: R$" + final)
} else {
    alert("Não tem desconto, o valor é: R$" + valor)
}
    
//Calculadora simples: Peça dois números e uma operação (+, -, *, /).

const c1 = Number((prompt("Numero 1: ")))
const operador = (prompt("Digite o operador (+, -, *, /): "))
const c2 = Number((prompt("Numero 2: ")))

if (operador === "+") {
    alert("resultado: " + (c1+c2))
} else if(operador === "-") {
    alert("resultado: " + (c1-c2))
}else if (operador === "*") {
    alert("resultado: " + (c1*c2))
}else{
    alert("resultado: " + (c1/c2))
}
    

//Sistema de login simples:

const usuario = "admin"
const senha = "1234"
const login = prompt("login: ")
const confSenha = prompt("Senha")

if (login === usuario && confSenha === senha) {
    alert("Login bem-sucedido")
} else {
    alert("Acesso negado!")
}
    

//1. **Classificação de triângulos:**
   // - O usuário insere três lados.
   // - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.
   //equilátero (três lados iguais )
   //isósceles (pelo menos dois lados iguais) 
   // escaleno é um polígono de três lados onde todos os lados e ângulos internos possuem medidas diferentes entre si

const l1 = Number(prompt("medida 1"))
const l2 = Number(prompt("medida 2"))
const l3 = Number(prompt("medida 3"))

if (l1 === l2 && l1 == l3) {
    alert("Triangulo equilátero! todos os lados iguais")
} else if(l1 != l2 && l1 != l3 && l2 != l3) {
    alert("Escaleno! Todos os lados são diferentes")
}else{
    alert("isóceles! dois lados iguais e um diferente")
}
    
//Conversão de notas para conceitos:
//A (90-100), B (80-89), C (70-79), D (60-69), F (<60).

const notaC = Number(prompt("Digite uma nota de 0-100"))

if (notaC >= 90 && notaC<= 100) {
    alert("Nota A")
} else if(notaC >= 80 && notaC < 90 ) {
    alert("Nota B")
} else if (notaC >= 70 && notaC < 80) {
    alert("Nota d")
} else if(notaC >= 60 && notaC <= 69) {
    alert("Nota e")
}else if(notaC < 60 && notaC >= 0){
    alert("F")
} else{
    alert("Inválido")
}
    
//Validação de ano bissexto:

const ano = Number(prompt("Digite um ano: "));

if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
    alert("é bixesto")
} else {
    alert("Não é bisexto")
}

// calculo imc
const altura = Number(prompt("Qual sua altura? digite apenas numero"))
const peso = Number(prompt("Qual o seu peso?"))
const calImc = (peso / (altura * altura))


if (Number.isNaN(peso) || Number.isNaN(altura)) {
    alert("Digite apenas numeros")
} else if (peso <= 0 || altura <= 0) {
    alert("Peso e altura devem ser positivos")
}
else if (altura > 3) {
    alert("Voce é uma girafa?")
}
else {
    if (calImc < 18.5) {
        alert("Seu IMC é: " + calImc.toFixed(2))
        alert("Ta magrelo")

    } else if (calImc < 25 && calImc >= 18.5) {
        alert("Seu IMC é: " + calImc.toFixed(2))
        alert("Ta suave")
    } else if (calImc > 30) {
        alert("Seu IMC é: " + calImc.toFixed(2))
        alert("ta imenso")
    }
}