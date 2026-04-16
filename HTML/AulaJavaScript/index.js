let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá Mundo!"
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log(resultado);

// isso é um comentário

console.log("isso vai executar") // comentário

let nome = "Mateus ";
let Nome = "Mateus ";
let NOME = "Mateus ";

console.log(nome + Nome + NOME)

let nome2;
let nomeCompleto;
let _contador;
let idade2;

//Nome de funções
function calcularMedida(){

}

function buscarUsuario(){

}

//tipos primitivos
//number - número
const preco = 19.9
console.log(typeof preco)

const nome3 = "Mateus";
console.log(typeof nome3);

//boolean - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//Null - ausencia intencional de valor
const vazio = null;
console.log(typeof vazio);

//undefined - variavel sem valor
let indefinido;
console.log(typeof indefinido)

//bigint - numeros muito grandes
const grande = 90099234857983745834654854576n;
console.log(typeof grande);

//valores Especiais: NaN e infinity
//Infinity - divisão por zero
console.log(5 / 0)
console.log(-5 / 0)

//NaN (Not a Number) - operação invalida
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(0 / 0)

//checar nan
console.log(Number.isNaN("abc" * 3))
console.log(Number.isNaN("1" * 3))

function calcularTotal(preco, quantidade) {
    const total = preco * quantidade;

    if(Number.isNaN(total)){
        console.log("Erro: preço inválido");
        return 0;
    }
    return total;
}

console.log(calcularTotal("abc", 2))
console.log(calcularTotal(10, 5))

// Strings e Templetes 
// aspas simples, duplas ou crase

const nome4 = 'Mateus';
const nome5 = "Maria Eduarda"
const nome6 = `Mateus`

//propriedades de metodos e string

const nomeCompleto2 = "Mateus da Silva Jesus";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

// template string (crase) - permite inserir variaveis

const nome7 = "Mateus"
const idade = 21

console.log(`Olá, meu nome é ${nome7} e tenho ${idade} anos`)

//cpnversão de tipo

console.log(Number("123"))
console.log(parseInt("10.9"))
console.log(parseFloat("10.9"))
console.log(String(123))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("oi"))

const texto2 = prompt("Digite um numero:");

console.log(texto2 + 5);

const numero2 = Number(prompt("Digite um numero:"))
//console.log(prompt(texto2 + numero2))
alert(texto2 + 5)
alert(numero2 + 5)

//operadores aritimeticos

