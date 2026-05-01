/*//filter

// callback
//array.metodo((element, index, array) => {});

//forEach
/*const frutas = ["maçã", "Banana", "Uva"];

frutas.forEach((element, index) => {
    console.log(index, element)
})

for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

const alunos = ["Lucas", "Maria", "João"];

alunos.forEach((nome, index) => {
    console.log(`${index + 1} aluno: ${nome}`)
})



//const novoArray = array.filter((element) => {
//    return condicao;
//});

const maiores = people.filter((person) => {
    return person.age >= 18
})
console.log(maiores)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

const par = numeros.filter((numbers) => {
    return numbers % 2 === 0;
})
console.log(par)

const num50 = [10, 20, 50, 55, 80]



//map
//const novoArray = array.map((element) => {
 //   return novoValor.
//});

const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const nomes = people.map((person) => {
    return person.nome.toUpperCase()
})
console.log(nomes)

const numeros = [1, 2, 3, 4, 5, 6]

const dobro = numeros.map((numero) => {
    return numero * 2
})

const produtos = ["Mousse", "teclado", "monitor"];

const frases = produtos.map((produto) => {
    return `Produtos: ${produto}`
})
console.log(frases)

//use map para transformar um array de preços em preços com desconto de 10%


const precos = [100, 200, 300];


const desconto = precos.map((numero)=> {
    return numero * 0.9
});
console.log(desconto)

/*
//use map para transformar: [1,2,3,4] em ["número 1, "número 2"...]
const numeros = [1, 2, 3, 4];
const resultado = numeros.map((numero) => {
    return `Número ${numero}`
});
console.log(resultado);





//find


/*
const item = Array.find((Element) => {
    return condicao;
})





const maria = people.find((person) => {
    return person.name === "Maria"
});


const numeros = [5, 8, -2, 10, 7];
const negativo = numeros.find((numero) => {
    return numero < 0;
});

//Reduce
array.reduce((acc, element) =>{
    return novoACC;

}, valorInicial);

const numeros = [10, 20, 30];

const soma = numeros.reduce((acc, numero) =>{
    console.log("ACC:", acc)
    console.log("Numero atual", numero)
    return acc + numero
}, 0);
console.log(soma)


//reduce




const totalIdade = people.reduce((acc, person) => {
    return acc + person.age;
}, 0)
console.log(totalIdade)

*/
const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "João", age: 18},
    {nome: "Ana", age: 22},
];

const nomes = people.reduce((acc, person) => {
    return acc + " " + person.nome;
}, "");
console.log(nomes)

const numeros = [2,3,4]

const soma = numeros.reduce((acc, numero) =>{
    return acc * numero;
}, 1)

console.log(soma)

//Reduce
//Somar preços dos produtos

const carrinho = [
    {produto: "mousse", preco:50 },
    {produto: "teclado", preco:100 },
    {produto: "mousse", preco:900 },
]

const total = carrinho.reduce((acc, produto) =>{
    return acc + produto.preco
}, 0)
console.log(total)

const palavra = ["oi", "javascript", "html"]

const contador = palavra.reduce((acc, letra) =>{
    return acc + letra.length
}, 0)
console.log(contador)