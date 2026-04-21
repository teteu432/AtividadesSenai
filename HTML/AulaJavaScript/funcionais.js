const idade = 17;

if (idade >= 18) {
    console.log("Maior de idade")
}
else {
    console.log("Menor de idade")
}

//operadores de comparação

const a = 10;
const b = 5;

console.log("10 > 5:", a > b);
console.log("5 > 10:", b > a);

console.log("10 < 5:", a < b);
console.log("5 < 10:", b < a);

console.log("10 >= 5:", a >= b);
console.log("5 >= 10:", b >= a);

//&& E AND
const idade2 = 20
const temDoc = true
const taNalista = true

if (idade2 >= 18 && temDoc && taNalista) {
    console.log("Pode entrar")
}
else {
    console.log("Não pode entrar")
}

//Operador || (ou / OR)

const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temPix || temCartao) {
    console.log("Pode pagar")
} else {
    console.log("Negado")
}

const usuario = "admin";
const senha = "1234"

const senhaCorreta = (senha === "1234");

const ehAdmin = (usuario === "admin");

const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente)) {
    console.log("Liberado")
} else {
    console.log("Negado")
}

if ((ehGerente || ehAdmin) && senhaCorreta) {
    console.log("Acesso liberado")
} else {
    console.log("Negado")
}

/* prompt
const pUsuario = prompt("Digite o nome de usuario: ");
const pSenha = prompt("Digite sua senha: ");
const pUsuarioCorreto =  (pUsuario === "Mateus")
const pSenhaCorreta = (pSenha === "1234")

if (pUsuarioCorreto && pSenhaCorreta) {
    alert("Acesso liberado!")
} else {
    alert("Acesso Negado")
}



const nota = 75;

if (nota >= 80) {
    console.log("aprovado")
} else if (nota >= 60) {
    console.log("recuperação")
} else{
    console.log("Reprovado")
}

const temp = Number(prompt("Temperatura atual C: "))

if (Number.isNaN(temp)){
    alert("Temperatura inválida.")
} else if(temp < 0){
    alert("congelado")
} else if (temp <= 15){
    alert("Frio")
}else if (temp <= 25){
    alert("ta fresco")
} else if (temp <= 32){
    alert("ta calor")
}else (
    alert("ta calor bixu!")
)

if(Number.isNaN(temp)){
    alert ("Abaixo de 0 C")
} else if(temp < 0){

}else if(temp >= 0 && temp <= 15){
    alert("Frio")
}else if (temp > 15 && temp <= 25) {
    alert("ta fresco")
}else if(temp > 25 && 35){
    alert("ta calor")
}else{
    alert("ta calor demais bixu!")
}



const vermelho = "vermelho"
const verde = "verde"
const amerelo = "amerelo"

const corFarol = prompt("Qual a cor do farol? ").toLowerCase().trim();

if (corFarol === verde){
    alert("Prossiga")
} else if (corFarol === amerelo) {
    alert("Atenção!")
} else if(corFarol === vermelho){
    alert("Pare!")
} else{
    alert("inválido!")
}
*/
//Calculadora de IMC Validada

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



