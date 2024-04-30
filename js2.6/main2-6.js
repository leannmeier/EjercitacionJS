//Capitulo 2.6 - Interaction: alert, prompt & confirm

//ALERT()
alert("Hello 2.6"); //Ya sabemos que hace

//PROMPT()
//result = prompt(title);

//muestra una ventana modal con un msj de texto, un campo de entrada
// para el visitante y los botones aceptar/cancelar

// title -> texto para mostrar al visitante
// default -> (opcional). EL valor inicial del campo de entrada

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

let test1 = prompt("Test1");
let test2 = prompt("Test2","");

//CONFIRM() 
// restult = confirm(question);
// la funcion confirm muestra una ventana modal con un question y dos botones: Acetar y Cancelar
// OK -> true | Cancel -> false

let isBoss = confirm("Are you the boss?");
alert(isBoss);

//TODOS ESTOS METODOS SON MODALES. PAUSAN LA EJECUCION DEL SCRIPT Y NO PERMITEN QUE EL VISITANTE
// INTERACTUE CON EL RESTO DE LA PAGINA HASTA QUE NO SE CIERRE LA VENTANA

//Limitaciones: No podemos cambiar su ubicacion. Normalmente esta en el centro
//              Tampoco podemos cambiar su aspecto ya que es propio del navegador
