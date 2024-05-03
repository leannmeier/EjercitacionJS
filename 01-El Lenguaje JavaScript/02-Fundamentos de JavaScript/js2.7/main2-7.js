//Conversiones de tipos

//Conversion de cadenas
let value = true;
alert(typeof value); //boolean

value = String(value); //ahora el contenido del String es "true"
alert(typeof value); //String

//La conversion a cadena es bastante obvia

//Conversiones numericas
alert("6"/"2"); //3, cadena convertida a numero

let str = "123";
alert (typeof str); //Imprime String

let num = Number(str);//Con el metodo Number(value) convierto explicitamente al valor por parametro en un valor de tipo number
alert (typeof num);//number

let age = Number("Holaaaaa");
alert(age); //NaN

/*
Valor           | Se convierte
undefined             NaN
null                   0 
true & false         1 y 0
string           Cadena vacia: 0
             Al menos un caracter: NaN

*/
alert(Number("    123    ") ); //123
alert(Number("123z")); //NaN
alert(Number(true)); //1
alert(Number(false)); //0
alert(Number("   ")); //0

//Conversiones booleanas
//-Valores que intuitivamente esten "vacios", como 0, una cadena vacia, null, undefines y NaN -> 0
//- Cualquier otro valor ->  true

//forma explicita con el metodo Boolean(value);
alert(Boolean(1)); //true
alert(Boolean(0)); //false
alert(Boolean("Hello")); // true
alert(Boolean(" ")); // false
alert(Boolean("0")); // ??? :) (true)

//Las conversiones mas utilizadas
//String conversion - Numeric conversion - Boolean conversion