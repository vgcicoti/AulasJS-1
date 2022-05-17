// Aula 3 - Console
console.log("Olá Mundo 2");

// Aula 4 - Variáveis
var a;

var b = "x";

a = "HD";

a = "Placa de captura";

b = a;

console.log(b);

// Aula 5 - Tipos de dados

/*  --> String - Cadeia de caracteres 
                "\n" muda a linha
                "" define uma string sem as "" o código se torna um número

    --> Number - Números no console ficam em azul
                utilizar sem as aspas

    --> Undefined -  Programa não sabe o que tem na variável

    --> Null - Não tem nada na variável

    --> Boolean - True ou False, permite fazer operações lógicas
                utilizar sem as aspas
*/

// Aula 6 - Operações Aritméticas

/* (+ Adição) (- Subtração) (* Multiplicação) (/ Divisão)
 (% Módulo) (++ Incremento) (-- Decremento) */

var a = 10;
var b = 15;

var c = a + b;

var d = a % b; // Módulo da o resto da divisão exata

a++ /* Incremento de "a" adiciona uma unidade é igual a = a + 1
    se o sinal é colocado antes (EXEMPLO: --a) a impressão ocorre dentro de outra variável: var b = --a
    se o sinal é colocado depois (EXEMPLO a--) a impressão não ocorre: var b = a-- */

console.log(c);
console.log(d);
console.log(a);

// Aula 7 - Atribuições

// =    x = y    x = y
// +=   x += y   x = x + y
// -=   x -= y   x = x - y
// *=   x *= y   x = x * y
// /=   x /= y   x = x / y
// %=   x %= y   x = x % y

// EXEMPLO:

var aa = 30;

aa = aa * 3;

console.log(aa);

// Aula 8 - Operadores Comparativos

//     == igual a
//     === valor igual e igual o tipo (number ou string)
//     != não é igual
//     !== não igual ou não igual
//     > maior que
//     < menor de
//     >= maior que ou igual a
//     <= menor ou igual a

// EXEMPLO:

var bb = 3;
var cc = 4;

console.log(bb !== cc);
console.log(cc > bb);

// Aula 9 - Operadores Lógicos

// && e
// || ou
// Negativo

// EXEMPLO:

var dd = true;
var ee = false;

var ff = dd && ee;
console.log(ff);


var idade = 35;

var maior20 = idade >= 20
var menor30 = idade <= 30

console.log("Maior que vinte", maior20);
console.log("Menor que 30", menor30);

var entre = maior20 && menor30;
console.log("Entre 20 e 30", entre);


var idade2 = 10;

var menor10 = idade2 <= 10;
var maior60 = idade2 >= 60;

var gratuidade = menor10 || maior60;
console.log("Gratuidade por idade", gratuidade)

var ex3 = 100;

var maior50 = ex3 >= 50;
var menor50 = !maior50;

console.log(maior50)
console.log(menor50)

// Aula 10 - Strings

var numero = 8;
var str = 'Texto qualquer "texto nas aspas" ' + 'Texto somado ' + numero;

console.log(str);

// Aula 11 - Transformando Strings em Números

var g = "2.5";
var h = "4";

var gh = parseFloat(g) + parseInt(h)
console.log(gh)

// Aula 12 - Alert e Prompt

var numeroX = parseInt(prompt("Digite um número"))
var dobroX = numeroX * 2

alert("O dobro de " + numeroX + " é " + dobroX)

// Aula 13 - Condicionais IF

var idade3 = 71;

if (idade3 >= 35 && idade3 <= 70) {
    console.log("pode");
    console.log("Qual o seu pedido?");
}

else if (idade >= 18 && idade3 <= 70) {
    console.log("pode");
    console.log("Apresentar identidade");
}

else {
    console.log("não pode");
    console.log("Volte futuramente");
}

// Aula 14 - Operador Ternário

// Outra maneira de programar "if"

var idade4 = 17;

idade4 >= 18 ? console.log("Pode") : console.log("Não pode");




