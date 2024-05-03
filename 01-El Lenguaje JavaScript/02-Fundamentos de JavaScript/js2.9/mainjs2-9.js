//Comparaciones
/*
Mayor >
Menor <
Mayor e igual >=
Menor e igual <=
asignacion a = b
comparacion a == b
estricta igualdad a === b sin conversion de tipos
distinto a != b
estricta desigualdad a !== b


Todos los operadores de comparacion devuelven valores booleanos
*/
alert (2>1);//devuelve true
alert (2==1);//devuelve fasle
alert (2 != 1);//devuelve true

let resultado = 5>4; //resultado = true
alert("resultado "+resultado);

//Comparacion de cadenas
//JS utiliza el orden lexicografico para determinar si una cadena es mayor que otra
//NO ES UN DICCIONARIO REAL, UTILIZA EL ORDEN UNICODE
alert('Z'>'A'); //true
alert('Glow'>'Glew'); //true
alert('Bee'>'Be'); //true

//Comparacion de diferentes tipos
alert('2' > 1);//true
alert('01' == 1);//true
//Para valores booleanos, true se convierte en 1 y false en 0

//Estricta igualdad
alert(0 === false); //false
alert(0 == false); //true

//Comparacion con nulo e indefinido
alert(null === undefined); //false
alert(null == undefined); //true

/* Resumen
- Los operadores de comparación devuelven un valor booleano.
- Las cadenas se comparan letra por letra en el orden del "diccionario".
- Cuando se comparan valores de diferentes tipos, se convierten en números 
  (con la exclusión de una estricta verificación de igualdad).
- Los valores nully undefinedson iguales ==entre sí y no son iguales a ningún otro valor.
- Tenga cuidado al utilizar comparaciones como >o <con variables que ocasionalmente pueden 
  ser null/undefined. Comprobar por null/undefinedseparado es una buena idea.
*/