alert("Soy JavaScript!");

/* Shift + Alt + A 
acceso rapido a varios comentarios */

//acceso rapido a una linea de comentarios

//Variables
let mensaje = "Hola Mundo";
alert("usando variables de tipo 'let' "+ mensaje);

const pi = Math.PI;
alert("Usando variables de tipo 'const' "+pi);

var numero = 13;
alert("Usando variables de tipo 'var' "+numero);

//Capitulo 2.5 - Type DAta

const bigInt = 123456789012345678901234567890n; // Un valor bigInt se crea agregando al final una 'n' de un numero entero

//Cadenas (string)
let str = "Hello"; //comillas dobles
let str2 = 'Single uotes are ok too'; //Comillas simples
let phrase = `can mbed nother ${str}`; //Comillas invertidas

// Las comillas invertidas contienen "funcionalidades extendidas". Nos permiten incrustar variables y expresiones
// en una cadena envolviendolas en un ${...}
// EJEMPLO
let name = "Leandro";
alert(`Hello,${name}!` );
alert(`The result is ${ 2 + 1 } `);
// Esta funcionalidad solo se permite hacer con las comillas invertidas

//No existe 'char'. En JS se usa 'string' que puede estar vacio, tener un solo caracter o una cadena de caracteres

//Tipo booleado
let nameFieldChecked = true;
let isGreater = 4 > 1;

//Valor Nulo (null)
let age = null;

//valor indefinido (undefined)

let age2 = 100;
age = undefined;
alert(age); //Imprime 'undefined'

// Objetos y Simbolos
// Todos los tipos de datos nombrados hasta ahora se denominan 'primitivos'

// Un tipo de dato 'object' se utilizan para almacenar colecciones de datos y entidades mas complejas
// Un tipo de dato 'symbol' se utiliza para crear identificadoes unicos para objetos

// Operador 'typeof'
typeof undefined;
typeof 0; // "number"
typeof 10n; // bigInt
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("Id"); // "symbol"
typeof Math // "Object" (1)
typeof null // "Object" (2)
typeof alert // "function" (3)

//El operador 'typeof' devuelve una cadena con el nombre del tipo de dato que contiene
