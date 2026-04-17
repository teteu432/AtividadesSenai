const idade = 17;

if( idade >= 18){
console.log("Maior de idade")
}
else{
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

if(idade2 >= 18 && temDoc && taNalista){
console.log("Pode entrar")
}
else{
    console.log("Não pode entrar")
}