const linhas = document.querySelectorAll(".linha");
let linhaAtual = 0;
let colunaAtual = 0;

const palavras = [
  "CASAL","AMIGO","TEMPO","FELIZ","LIVRO",
  "PORTA","CASAS","NOITE","DIASE","VERDE",
  "PRETO","BRISA","VENTO","MARTE","NORTE",
  "SULTO","PEDRA","PLANO","CARRO","MOTOS",
  "AVIÃO","NUBES","CHUVA","SOLAR","FLORE",
  "FRUTA","BANCO","GRAMA","AREIA","CANTO",
  "DANÇA","CORPO","MENTE","ALUNO","PROVA",
  "NOTAS","AULAS","TEXTO","FRASE","PALCO",
  "ATIVO","PASSO","RAPAZ","MOEDA","VALOR"
];

const casas = document.querySelectorAll('[data-i]');

casas.forEach(casa => {
  casa.addEventListener('click', () => {
    const linha = casa.parentElement;
    linhaAtual = Number(linha.getAttribute("data-linha")) - 1;
    colunaAtual = Number(casa.getAttribute("data-i")) - 1;
  });
});

document.addEventListener('keydown', (event) => {
  const letra = event.key.toUpperCase();

  if (letra.length === 1 && letra.match(/[A-Z]/)) {

    const linha = linhas[linhaAtual];
    const casa = linha.querySelector(`[data-i="${colunaAtual + 1}"]`);

    if (!casa) return;

    casa.innerText = letra;
    colunaAtual++;

    if (colunaAtual >= 5) {

      const botoes = linha.querySelectorAll('[data-i]');
      let palavraFormada = "";

      botoes.forEach(btn => {
        palavraFormada += btn.innerText;
        btn.style.cursor = "not-allowed";
      });

      console.log("Palavra digitada:", palavraFormada);

      

      linhaAtual++;
      colunaAtual = 0;
      comparar(palavraFormada);
    }
  }
});

function luck() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

const elemento = document.querySelector(".palavraSecreta");
const palavraSecreta = luck();

elemento.innerText = palavraSecreta;

function comparar(palavraFormada) {
  if (palavraSecreta === palavraFormada) {
    alert("Parabéns, você acertou!");
  }
}