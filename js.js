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
  // if (e === 1) {
  //   alert('Está todo piola con e')
  // } else {
  //   alert('No está todo piola con e')
  // }; //En este caso no está todo piola con e.
  //
  // if (e !== 1) {
  //   alert('Está todo piola con e')
  // } else {
  //   alert('No está todo piola con e')
  // }; //En este caso está todo piola con e.
  //
  // if (e <= 1) {
  //   alert('Está todo piola con e')
  // } else {
  //   alert('No está todo piola con e')
  // }; //En este caso no está todo piola con e.
  //
  // if (e >= 1) {
  //   alert('Está todo piola con e')
  // } else {
  //   alert('No está todo piola con e')
  // }; //En este caso está todo piola con e.


//FUNCIONES
  function hola(nombre, apellido){
    return 'Hola ' + nombre + ' ' + apellido;
  };
  //La llamamos en la consola de la siguiente manera: "hola(Emiliano,Baier);".

  //Invocamos una función automáticamente
  (function(){
    //alert('Que se yo');
  }());

  //Asignación a variables
  var calc = function calculador(a,b){
    return a+b;
  };
  //La llamamos en la consola de la siguiente manera: "calc(7,9);".

  //Asignación a variables
  var calc = function (a,b){
    return a+b;
  };
  //Si no le ponemos nombre a la funcifunción se la denomina "función anónima".

  //Callbakc
  /* $('#button').click(function(){
     //bloque de la función
  });
   */
  //El callback va a ejecutar la función cuando se haga click en el botón indicado.


//SCOPE
  //Variable global
  var a = 0;
  var b = 1;
  //Declaradas de esta manera las funciones tendrán un scope global. Las llammamos en la consola de la siguiente manera: "window.a;" y "window.b;".

  //Variable local
  function test(){
    var test = 'test';
  };


//STRICT MODE = Nos previene de cometer erroes como: Crear variables globales accidentalmente, de duplicar nombres de parámetros, de usar Keywords de JS como nombre de funciones, entre otros erroes.
  // (function(){
  //   'use strict'; //De esta manera se implementa el Strict mode. En este caso previene que "sMode" sea una variable global.
  //   sMode = 'Strict mode';
  // }());
  //
  // (function(){
  //   'use strict'; //En este caso evita la repetición del nombre de los parámetros.
  //   function test1 (a,a){
  //     console.log();
  //   };
  // }());
  //
  // (function(){
  //   'use strict'; //En este caso nos previene de usar la palabra clave "function" como nombre de la función.
  //   var function = 'funcion';
  // }());


//IF & ELSE IF
  (function(){
    var variable = 1;
    if (variable) {
      console.log('true');
    };

    if (variable) {
      console.log('true');
    } else if (variable != 1) {
      console.log('false');
    };
  }());

  //if Ternario
  (function(){
    (false) ? console.log('true') : console.log('false');
  }());


//FOR - FOR IN - FOR OF

  //For
  var arrayDePrueba = ['item1','item2','item3'];
  var largoArrayDePrueba = arrayDePrueba.length;

  for (var i = 0; i < largoArrayDePrueba; i++) {
    console.log(arrayDePrueba[i]);
  }

  //For in
  var auto = {marca: "Fiat", modelo: 550, color: "blanco"}; //Objeto

  for (var caracteristica in auto) {
    console.log(auto[caracteristica]);
  };

  //for of
  var cars = ['BMW', 'Volvo', 'Mini Cooper']; //Objeto

  for (marcas of cars) {
    console.log(marcas);
  };


//STRINGS (manipulación)
  var myString = "Hola cara de nepe :)";
  var myString2 = "          prueba trim 2          ";

  console.log(myString);
  console.log(myString.length); //Nos dice la cantidad de caracteres que tenemos en la variable (contando los espacios y empezando desde el índice 0).
  console.log(myString.toUpperCase()); //Convierte toda la cadena de texto a mayúsculas.
  console.log(myString.toLowerCase()); //Convierte las mayúsculas que haya en la cadena a minúsculas.
  console.log(myString.indexOf('nepe')); //Nos dice en que posición (índice) se encuentra el primer caracter de la palabra que pasamos como parámetro, en este caso la "n".

  console.log(myString.split(' '));  //Convierte nuestra cadena de texto en un array, separando las palabras por el caracter que pasamos como parámtero, en este caso el espacio.
  // Otro ejemplo de split:
  console.log(myString.split(" ", 3)); // myString.split('separador', limite);

  console.log(myString.slice(3, 8)); // Imprime el contenido del array en la consola comenzando por el caracter cuyo índice indicamos como primer parámetro y detenidose en el índice que indicamos como segundo parámetro.
  console.log(myString.slice(2, -8)); // lo que hace el valor negativo es contar desde el final del string para atrás.

  console.log('    prueba trim    '.trim()); // Elimina los esapcios y tabulaciones de mas, no elimina los espacions entre palabras.
  console.log(myString2.trim());


//ARRAYS (manipulación)
  var array = [1,2,3];

  /*
  Mutadores de arrays
  array.push(4);
  array.unshift(0);
  array.pop();
  array.shift();
  array.push(1,0,'hola');
  array.revert();
  array.sort();

  Accesos a arrays
  array.join();
  array.indexOf();
  array.filter();
  */

  console.log(array.join());
  console.log(array.join(''));
  console.log(array.join('-'));
  console.log(array.indexOf(2));


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
