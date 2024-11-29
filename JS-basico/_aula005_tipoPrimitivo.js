

/**
 * O Javascript é uma linguagem fracamente tipada, isso significa que  “ele” tentará converter
 * em tempo de execução os dados no valor. 
 */

let x = 25; // Número inteiro
console.log(`Aqui variavel X recebe o valor ${x}(valor numerico inteiro)`)
console.log(typeof x)

x = 1.75; // Número decimal(ponto flutuante)
console.log(`Aqui foi ratribuido a variavel X o valor ${x}(valor numerico real)`)
console.log(typeof x)

x = ("Hello JS!")
console.log(`Aqui foi ratribuido a variavel X o conteúdo ${x}(string)`)
console.log(typeof x)

//Tipos primitivos em JS
//Number: Representa números, incluindo números inteiros e de ponto flutuante.
// Declaração de variáveis do tipo number
let idade = 25; // Número inteiro
let altura = 1.75; // Número decimal(ponto flutuante)
console.log(`Maria tem ${idade} anos.`)
console.log(`João tem ${altura} mt`)

//String: Sequências de caracteres, como texto.
const nome = 'João';
const idade2 = 30;
const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade2} anos.`;
console.log(mensagem); // Saída: "Olá, meu nome é João e eu tenho 30 anos."

//Boolean: Representa um valor lógico verdadeiro (true) ou falso (false).
// Declaração de variáveis booleanas
let estaChovendo = true;
let temSol = false;

