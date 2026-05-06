//filter
//Dado o array const notas = [4, 7, 9, 3, 10, 5];, filtre apenas as notas maiores ou iguais a 7.

const notas = [4, 7, 9, 3, 10, 5];

const filtro = notas.filter((nota) => {
    return nota >= 7;
})
console.log(filtro)
console.log("\n")
//Dado o array const palavras = ["sol", "mar", "computador", "lua", "código"];, 
//filtre apenas as palavras com mais de 4 letras.

const palavras = ["sol", "mar", "computador", "lua", "código"];

const maisD4 = palavras.filter((m4) => {
    return m4.length >= 4;
})
console.log(maisD4)
console.log("\n")

//Dado o array const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];, 
// filtre apenas os animais cujo nome começa com a letra "c".

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const letraC = animais.filter((animal) => {
    return animal.startsWith('c')
})
console.log(letraC)
console.log("\n")

//find
//Dado o array const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, 
// encontre o primeiro filme que começa com a letra "B".

const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];

const letraB = filmes.find((filme) => {
    return filme.startsWith('B')
})
console.log(letraB)
console.log("\n")
//Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.

const numeros = [2, 4, 6, 9, 12, 15];

const impar1 = numeros.find((numI) => {
   return numI % 2 != 0
})
console.log(impar1)
console.log("\n")

//Dado o array const alunos = [{nome: "Ana", nota: 8}, {nome: "Carlos", nota: 5}, {nome: "Beatriz", nota: 9}];, 
// encontre o primeiro aluno com nota maior ou igual a 7.

const alunos = [ {nome: "Ana", nota: 8}, 
                 {nome: "Carlos", nota: 5}, 
                 {nome: "Beatriz", nota: 9}
                ];
const maior7 = alunos.find((aluno) => {
    return aluno.nota >= 7
})
console.log(maior7.nome)