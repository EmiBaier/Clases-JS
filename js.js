//Single line comments

/*
Multi
lines
comments
*/


//VARIABLES
  var nombre; //valor = undefined
  var miApellido = 'Baier'; //valor = Baier

  var a,b,c; //valor = undefined.
  // var a,b,c; es lo mismo que:
  var a;
  var b;
  var c;

  var a = 1;
  var b = 2;
  var c = 3;
  var d = null;

  console.log(a);
  console.log(b,c,d); //Esto esta piola, imprimís mas de una variable con un solo console.log.


//ALERT
  // alert('Hola');


//ARRAYS
  var unArray = [1,'uno', null, true, false];
  console.log(unArray);
  console.log(unArray[3]);
  console.log(unArray[3,0]); //Funciona como dos console.log separados (?).
  console.log(unArray.length); //Nos dice la cantidad de elementos que tiene el array.


//OBJETOS
  var object = {
    a : 'valor de a',
    b : 2,
    c : null
  }
  console.log(object.c);
  console.log(object['a']);


//OPERADORES
  //Aritméticos
  var suma = 1 + 1;
  var resta = 1 - 1;
  var multiplicacion = 2 * 1;
  var division = 5 / 2.5;
  console.log(suma,resta,multiplicacion,division);

  //Módulos
  var remainder = 5 % 2;
  console.log('remainder es igual a ' + remainder);

  //Postfix
  console.log(suma++); //En este punto "suma" sigue siendo 2, hay que hacer un nuevo console.log(suma); sin "++" para que nos devuelva el 2 + 1.
  console.log('Con postfix ahora es ' + suma);

  //Prefix
  console.log(++suma); //Prefix suma 1 directamente sin la necesidad de hacer dos console.log();.

  //Asignaciones simples
  var e = 1;
  e += 1; //Es lo mismo que: e = e + 1;
  console.log('Ahora la variable "e" es igual a ' + e);

  var f = 2;
  f -= 1; //Es lo mismo que: f = f - 1;
  console.log('Ahora la variable "f" es igual a ' + f);

  var g = 3;
  g *= 1; //Es lo mismo que: g = g * 1;
  console.log('Ahora la variable "g" es igual a ' + g);

  var h = 4;
  h /= 1; //Es lo mismo que: h = h / 1;
  console.log('Ahora la variable "h" es igual a ' + h);

  var i = 5;
  i %= 2; //Es lo mismo que: i = i / 1;
  console.log('Ahora la variable "i" es igual a ' + i);

  //Comparadores
  if (e === 1) {
    alert('Está todo piola con e')
  } else {
    alert('No está todo piola con e')
  }; //En este caso no está todo piola con e.

  if (e !== 1) {
    alert('Está todo piola con e')
  } else {
    alert('No está todo piola con e')
  }; //En este caso está todo piola con e.

  if (e <= 1) {
    alert('Está todo piola con e')
  } else {
    alert('No está todo piola con e')
  }; //En este caso no está todo piola con e.

  if (e >= 1) {
    alert('Está todo piola con e')
  } else {
    alert('No está todo piola con e')
  }; //En este caso está todo piola con e.


//ELEMENTOS
  var newElement = document.createElement('li');
  newElement.textContent = 'Now i´m first ;)';

  var list = document.getElementById('mi-lista');
  // list.appendChild(newElement);

  list.insertBefore(newElement,list.firstElementChild);

  //list.removeChild(newElement);

  var replaceElement = document.createElement('li');
  replaceElement.textContent = 'Soy el nuevo objeto';
  list.replaceChild(replaceElement,newElement);

  console.log(newElement);
