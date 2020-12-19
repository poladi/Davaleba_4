//1. Variables
let firstname = 'Lata';
console.log(firstname);

//2. What is x?
let x = 'Geeta'; //Geeta


//3. Several variables
let flower = 'rose';
let tree = 'maple';
console.log(flower);
console.log(tree);

//4. Reassignment
let x = 'Tic';
x = 'Tac';
x = 'Toe';
console.log(x); //Toe

//5. Assign variables
let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;
console.log(x); //'Hardy'

//6. Functions
 function hello(){
     return 'Hello world!'
 }

// 7. Multiple functions
function a(){
    return 'Hello a!';
}
function b(){
    return 'Hello b!';
}

// 8. Function calls
function greet(){
    return 'Haydo!'
}

let salutation = greet();

// 9. What is x?
function hello() {
    return 'Hi!';
  }
  
  let x = hello(); //Hi!

// 10. Parameters
function echo(input){
    return input;
}
echo('Greta');
echo('CO2');

// 11. What is x?
function reply(phrase) {
    return phrase;
  }
  
  let x = reply('How do you do?'); //'How do you do?'

// 12. Strings
function greet(a){
    return 'Hello ' + a +'!';
    }
    
// 13. What is x?
function whereIs(name) {
    return 'Where is ' + name + '?';
  }
  
  let x = whereIs('Jacky'); //'Where is Jacky?'

// 14. What is x?
function hi(name) {
    return 'Hi ' + name + '!';
  }
  
  let h1 = hi('Selva');
  let h2 = hi('Pola');
  let x = h1 + ' ' + h2; //'Hi Selva! Hi Pola!'

// 15. Logging
function log(){
  console.log('Hello Console!');
  }

// 16. Logging variables
function log(x){
  console.log(x);
  }
  log('Ken Thompson');

// 17. Logging and Strings
function shout(word) {
  let result = word + word;
  console.log(result);
  return result;
}
shout('Fire'); //'FireFire'

// 18. Silent Teacher
function double(name) {
  return name + ' and ' + name;
}

let x = double('Roy'); //'Roy and Roy'

// 19. String: length
function length(x){
  return x.length;
  } 

  length('sun'); //3

// 20. String: toUpperCase()
function toCase(x){
  return x.toLowerCase()+'-'+x.toUpperCase();
  }
  toCase('Mthatha'); //'mthatha-MTHATHA'

// 21. String: charAt()
function shortcut(x,y){
  return x.charAt(0) + y.charAt(0);
  }
  shortcut('Amnesty', 'International'); //'AI'

// 22. String: trim()
function firstChar(x){
  return (x.trim()).charAt(0);
  }

// 23. String: indexOf()
function indexOfIgnoreCase(x, y) {
  let resultx= x.toLowerCase();
  let resulty= y.toLowerCase();
  return resultx.indexOf(resulty);
}
// 24. String: indexOf() with from index
function secondIndexOf(x, y) {
  let result= x.indexOf(y);
  return x.indexOf(y, result+ 1);
}

// 25. String: substr()
function firstWord(x){
  let result = x.indexOf(' ');
  return x.substr(0, result);
}

// 26. String: replace()
function normalize(x){
  let result1= x.replace('-', '/');
  let result2= result1.replace('-', '/');
  return result2;
  }
  
  normalize('20-05-2017');

// 27. Numbers
function add(x, y) {
  return x + y;
}
// 28. Increment
let x = 3;
x++;
x = x * 2;
x--;
console.log(x); //7

// 29. Fahrenheit
function toFahrenheit(celsius) {
  return 1.8 * celsius + 32;
}
// 30. Modulo
function onesDigit(x){
  let result = x % 10;
  return result;
  }

// 31. Parentheses
function mean(x,y) {
  return (x+y)/2;
  }

// 32. Math
function hypotenuse(a, b) {
  let cSquare = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(cSquare);
}

// 33. min and max
function midrange(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return (min + max) / 2;
}

// 34. Math.PI
function area(radius) {
  return  Math.PI * radius * radius;
}

// 35. Rounding


// 36. Random numbers
function dice(){
  return  Math.floor(Math.random() * 6) + 1
  }

// 37. parseInt
function add(x) {
  let result1= parseInt(x, 10);
  let result2= x.indexOf('+');
  let result3= x.substr(result2+ 1);
  let result4= parseInt(result3, 10);
  return result1+ result4;
}
// 38. Boolean
function nand(x, y) {
  let result= x && y;
  return !result;
}

// 39. NOR
function nor(x, y) {
  let result = x || y;
  return !result;
}

// 40. XOR
function xor(x,y) {
  return !x == y || !x == y;
}

// 41. Strict equality
function equals(x, y) {
  return x === y;
}
// 42. Three identical values
function equals(x,y,z) {
  return x === y && x === z;
}

// 43. Even numbers
function isEven(n) {
  return n % 2 == 0;
}

// 44. Strict inequality
function unequal(x,y,z) {
  return x !== y && x !== z && y !== z;
}

// 45. Compare numbers
function isThreeDigit(x) {
  return x >= 100 && x < 1000;
}

// 46. if
function equals(x, y) {
  let result = 'UNEQUAL';
  if (x === y) {
    result = 'EQUAL';
  }
  return result;
}

// 47. Two returns
function repdigit(x) {
  let y = x % 10;
  let z = Math.floor(x / 10);
  if (y === z) {
    return 'Repdigit!';
  }
  return 'No Repdigit!';
}
// 48. if...else
function addWithSurcharge(x, y) {

  let surchage = 0;

  if (x <= 10) {
    surchage+= 1;
  } else {
    surchage+=2;
  }

  if (y <= 10) {
    surchage +=1;
  } else {
    surchage +=2;
  }

  return x + y + surchage;
}

// 49. else if

function addWithSurcharge (x,y){
  let surchage = 0;
  
  
  if (x <= 10) {
    surchage += 1;
  } else if (y <= 10) {
    surchage += 1;
  } else if (x>10||x<=20) {
    surchage += 2;
  } else if (y>10||y<=20) {
    surchage += 2;
  } else if (x>20) {
    surchage += 3;
  }else {
    surchage += 3;
  }
  return x + y + surchage;
  }

// 50. Arrays
function toArray(x,y){
  return [x,y];
  }
// 51. Get array elements
function getFirstElement([x, y]){
  let myArray = [x,y];
  return myArray[0];
  }

// 52. Set array elements
function setFirstElement(myArray, x) {
  myArray[0] = x;
  return myArray;
}

// 53. Array: length
function getLastElement(x) {
  return x[x.length - 1];
}

// 54. Sorting arrays
// 55. Array: shift() and push()
function rotate(x) {
  let result= x.shift();
  x.push(result);
  return x;
}

// 56. Array: indexOf()
function add(arr, number) {
  if (arr.includes(number)) return arr;
  else return [...arr, number];

}

// 57. Array: concat()
function concatUp(firstArray, secondArray) {

  if (secondArray.length >= firstArray.length) {
    return firstArray.concat(secondArray);
  }

  return secondArray.concat(firstArray);
}

// 58. Array: slice()
// 59. Array: join()
function list(x) {

  if (x.length === 0) {
    return '';
  }

  if (x.length === 1) {
    return x[0];
  }

  let y = x.slice(0, x.length - 1);
  let z = x[x.length - 1];
  return y.join(', ') + ' and ' + z;
}
// 60. Array of arrays
// 61. Comments
// 62. undefined
// 63. null
// 64. for loop
function addTo(x) {
  let sum = 0;
  for (let i = 0; i <= x; i++) {
    sum = sum + i;
  }
  return sum;
}
// 65. Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
// 66. Loops and arrays
function mean(x) {

  let sum = 0;

  for (let i = 0; i < x.length; i ++) {
    sum = sum + x[i];
  }

  return sum / x.length;
};

// 67. while loop
function spaces(num) {
  let mySpaces = '';

  while (num-- > 0)
    mySpaces += ' ';

  return mySpaces;
}

// 68. do...while loop
function lcm(a, b) {

  let theLCM = 0;
  let remainderA;
  let remainderB;

  do {

    theLCM++;
    remainderA = theLCM % a;
    remainderB = theLCM % b;

  } while (remainderA !== 0 || remainderB !== 0)

  return theLCM;
}

// 69. gcd
function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// 70. break and continue
function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
// 71. Nested loops
// 72. The arguments object
// 73. NaN
function parseFirstInt(input) {

  let inputToParse = input;

  for (let i = 0; i < input.length; i++) {
    let firstInt = parseInt(inputToParse);
    if (!Number.isNaN(firstInt)) {
      return firstInt;
    }
    inputToParse = inputToParse.substr(1);
  }

  return NaN;
}
// 74. String: split()
// 75. Functions call functions
// 76. Recursion
// 77. Roman numerals I
// 78. Roman numerals II
// 79. Project Euler
// 80. To be continued ...