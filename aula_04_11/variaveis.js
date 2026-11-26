/*

- Instalar a biblioteca prompt-sync()
    npm install prompt-sync


- Executar os arquivos .js
    node nome-do-arquivo.js



*/

//Variaveis e constantes

// variavel - posso substituir os valores e não preciso atribuir na declaração


var nome;
let ola;

// Constante


// Não podemos usar VAR


/*
let b = "Joao";
{   
    let b = "Felipe";
    console.log(b)
}
console.log(b);

let media = 6;
if (media >= 6) {
    let nota1 = 5.9;
    let nota2 = 7.5;
    let media = (nota1 + nota2) / 2;
    console.log("A media é: " + media);
}

*/

/*

let idade = 18;
if (idade >= 18) {
    let maioridade = true;
    console.log("Você é maior de idade: " + maioridade);
}

let num = 10;
if (num == 5) {
    console.log("O número é 5");
}
else {
    console.log("O número não é 5");
}

let texto = "Joao"
console.log(typeof nome)

let int = 5
console.log(typeof int)


let number = 5.15
console.log(typeof number)

let nulo = null
console.log(typeof nulo)


let booleano = false
console.log(booleano)


// laçõs de repetição

// condicional if else

let condicao;
let media = "6";

if (media >= 6) {
    condicao = "Aprovado";
    console.log(condicao);
}
else {
    condicao = "Reprovado";
    console.log(condicao);
}

condicao = media >= 6 ? "Aprovado" : condlicao >= 5 ? "REA" : "Reprovado";
console.log(condicao);

*/

/*

let nome = "João";
let media = 6;
let condicao;



if(media >= 6) {
    condicao = "Aprovado";
    console.log('${nome} está ${condicao} com média ${media}');
}
else {
    condicao = "Reprovado";
    console.log(condicao);
}

//condicao = media >= 6 ? "Aprovado" : condicao >= 5 ? "REA" : "Reprovado";
console.log(condicao);

*/

let num = 3;
num **= 3;
console.log(num);



// Funções
//Sem argumentos/parametros e sem retorno
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}

saudacao();

//Com argumentos/parametros e sem retorno
function soma(a, b) {
    return a + b;
}
console.error(soma(2, 4));


//função anonima
const sub = function (a, b) {
    return a - b;
}

console.log(sub(2, 4));

//fução seta
const subtracao = (a, b) => {
    return a - b;
}

console.log(subtracao(4, 2));
