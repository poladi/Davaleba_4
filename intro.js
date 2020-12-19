// Exercise - Hello World
alert('Hello world');

//Exercise - Weeks in a lifetime
var daysInYear = 365.25;
var daysInWeek = 7;
var yearsInLifetime = 80;
var result = (daysInYear + daysInWeek + yearsInLifetime) / 3;
console.log("Average: " + result);

// Exercise - String Concatenation
let greeting = 'hello';
let name = 'world';
alert(greeting + " " + name);
console.log(greeting + " " + name);
let change1 = greeting.replace('l','1');
let change2 = change1.replace('l','1');
let change3 = change2.replace('o','0');
let change4 = name.replace('o','0');
let change5 = change4.replace('l', '1');
console.log(change3 + " " + change5);
alert (change3 + " " + change5);

//Conditional logic
let time;
time = (new Date().getHours());
if (time <12) {
alert("It's morning");
} else if (time < 18) {
alert("It's afternoon");
} else {
alert("It's night");
}
