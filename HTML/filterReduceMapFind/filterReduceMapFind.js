//map
const numbers = [1, 2, 3, 4, 5];

const numMultTwo = numbers.map(function(number){
    return number * 2;
})
console.log(numMultTwo)
console.log("\n")
//filter

const ages = [8, 13, 19, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0
})
console.log(evenAges)

console.log("\n")

//reduce
const sumOfAges = ages.reduce(function(age, acc) {
    return acc + age;
}, 0)
console.log(sumOfAges);

console.log("\n")
//Find

const approvedNumber = ages.find(isBigEnough);

function isBigEnough(value, index, array) {
    return value >= 18;
}
console.log(approvedNumber)

//find, filter e findIndex são métodos de array no JavaScript 
// usados para buscar dados, 
// mas com retornos diferentes: find retorna o primeiro elemento,
//  findIndex retorna a posição (índice) do primeiro elemento, e
//  filter retorna um novo array com todos os elementos que
//  satisfazem a condição
console.log("\n")
const numeros = [5, 12, 8, 130, 44];

// find: retorna o primeiro elemento > 10
const achado = numeros.find(n => n > 10); 

// findIndex: retorna o índice do primeiro elemento > 10
const indice = numeros.findIndex(n => n > 10); 

// filter: retorna todos os elementos > 10
const filtrados = numeros.filter(n => n > 10); 

console.log(achado) //find
console.log(indice) //ffindIndex
console.log(filtrados) //filter