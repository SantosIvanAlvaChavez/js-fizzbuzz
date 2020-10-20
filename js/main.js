/*
*FizzBuzz
*/

//Numeri stampati da 1 al 100

//1 Modo con for
for (var i = 1; i <= 100; i++) {
  if (i % 15 == 0) { //<--multiplo di 15
    console.log('FizzBuz');
  } else if (i % 3 == 0) { //<--multiplo di 3
    console.log('Fizz');
  } else if (i % 5 == 0) { //<--multiplo di 5
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


//2 Modo con for
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) { //<--multiplo di 3 e 5
    console.log(i + ' = ' + 'FizzBuzz');
  } else if (i % 3 == 0) {
    console.log(i + ' = ' + 'Fizz');
  } else if (i % 5 == 0) {
    console.log(i + ' = ' + 'Buzz');
  } else {
    console.log(i);
  }
}


//3 Modo con for
for (var i = 1; i <= 100; i++) {

  var a = i;
  var b = '';

  if (i % 3 == 0) {
    a = '';
    b += 'Fizz';
  }

  if (i % 5 == 0) {
    a = '';
    b += 'Buzz';
  }
  console.log(a + b);
}


//4 Modo con while
var counter = 1;

while (counter <= 100) {
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log(counter + ' = ' + 'FizzBuzz');
  } else if(counter % 3 == 0) {
    console.log(counter + ' = ' + 'Fizz');
  } else if(counter % 5 == 0) {
    console.log(counter + ' = ' + 'Buzz');
  } else {
    console.log(counter);
  }
  counter++;
}
