const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senhaExemplo = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Leonardo";

// concatenação (+)

console.log(citacao + meuNome)

//template string OU template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

/* Os caracteres \u no início do código são caracteres
 de escape que usamos para sinalizar ao JavaScript 
 de que estamos falando de códigos Unicode, 
 e não de strings de texto usuais.*/


 const cidade = "belo horizonte";
 const input = "Belo Horizonte";
 
 console.log(cidade === input); // false


const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

